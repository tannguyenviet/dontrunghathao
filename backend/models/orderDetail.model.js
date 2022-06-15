const modelOrderDetail = (sequelize, Datatypes) => {
  const orderDetail = sequelize.define(
    'order_detail',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      //order_id + product_id
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
  return orderDetail;
};
module.exports = modelOrderDetail;
