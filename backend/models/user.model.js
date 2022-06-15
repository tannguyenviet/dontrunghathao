const modelUser = (sequelize, Datatypes) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Datatypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      first_name: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      telephone: {
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
  return user;
};
module.exports = modelUser;
