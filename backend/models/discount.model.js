const modelDiscount = (sequelize, Datatypes) => {
  const discount = sequelize.define(
    'discount',
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
      desc: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      discount: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      active:{
        type: Datatypes.BOOLEAN,
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
  return discount;
};
module.exports = modelDiscount;
