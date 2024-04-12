module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
  
  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'blogPost',
    })
  }

  return User;
};