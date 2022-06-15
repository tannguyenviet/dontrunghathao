const modelProductCategory = (sequelize, Datatypes) => {
  const productCategory = sequelize.define(
    'cart_item',
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
      desc:{
        type: Datatypes.STRING(255),
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
  return productCategory;
};
module.exports = modelProductCategory;
