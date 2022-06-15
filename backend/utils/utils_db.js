// const dbConfig = require('../config/config_db');
const {database} = require('../loaders/configs');
const userModel = require('../models/user.model');
const productModel = require('../models/product.model');
const orderDetailModel = require('../models/orderDetail.model');
const orderItemModel = require('../models/orderItem.model');
const shoppingSessionModel = require('../models/shoppingSession.model');
const cartItemModel = require('../models/cartItem.model');


const Sequelize = require('sequelize');
const sequelize = new Sequelize(database.name, database.user, database.pass, {
  host: database.host,
  dialect: database.dialect,
  pool: {
    max: database.pool.max,
    min: database.pool.min,
    acquire: database.pool.acquire,
    idle: database.pool.idle,
  },
  timezone: '+07:00',
  logging: false,
  // dialectOptions: { useUTC: '+07:00' },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = userModel(sequelize,Sequelize)
db.product =productModel(sequelize,Sequelize);
db.orderDetail = orderDetailModel(sequelize,Sequelize);
db.orderItem = orderItemModel(sequelize,Sequelize);
db.shoppingSession = shoppingSessionModel(sequelize,Sequelize);
db.cartItem = cartItemModel(sequelize,Sequelize);

db.product.hasOne(db.orderItem,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'product_id',
  },
})
db.orderDetail.hasMany(db.orderItem,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'order_detail_id',
  },
})

db.orderItem.belongsTo(db.orderDetail, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'order_detail_id',
  },
});
db.user.hasMany(db.orderDetail,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'user_id',
  },
})
db.orderDetail.belongsTo(db.user, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'user_id',
  },
});
db.shoppingSession.hasMany(db.cartItem,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'shopping_session_id',
  },
})
db.cartItem.belongsTo(db.shoppingSession, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'shopping_session_id',
  },
});



db.product.hasOne(db.cartItem,{
  foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: 'product_id',
      },
})

module.exports = db;
