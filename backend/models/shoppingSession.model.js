const modelShoppingSession = (sequelize, Datatypes) => {
  const shoppingSession = sequelize.define(
    'shopping_session',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      total: {
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
  return shoppingSession;
};
module.exports = modelShoppingSession;
