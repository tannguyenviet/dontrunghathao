const modelProduct = (sequelize, Datatypes) => {
  const product = sequelize.define(
    'product',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      price: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      desc:{
        type: Datatypes.TEXT,
        allowNull: false,
      }
    },
    {
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deletedAt',
    }
  );
  return product;
};
module.exports = modelProduct;
