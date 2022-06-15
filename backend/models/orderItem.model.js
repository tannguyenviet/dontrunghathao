const modelOrderItem = (sequelize, Datatypes) => {
  const orderItem = sequelize.define(
    'order_item',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity:{
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      price:{
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      // product_id:{
      //   type: Datatypes.INTEGER,
      //   allowNull: false,
      // }
    },
    {
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deletedAt',
    }
  );
  return orderItem;
};
module.exports = modelOrderItem;
