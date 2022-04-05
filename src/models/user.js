module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
      },
      fees: {
        type: DataTypes.BIGINT,
      },
      age: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.BIGINT,
      },
    },
    {
      // tabelName:'userdata'
      timestamps: false,
      // createdAt:true,
      // updatedAt:false,
      //Name Change
      // createdAt:'create_at',
      // updatedAt:'updated_at'
    }
  );
  return Users;
};
