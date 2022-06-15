const modelCartItem = (sequelize, Datatypes) => {
  const cartItem = sequelize.define(
    'cart_item',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deletedAt',
    }
  );
  return cartItem;
};
module.exports = modelCartItem;
