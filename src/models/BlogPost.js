module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
  'BlogPost',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
  
  BlogPost.associate = ({ User }) => {
    BlogPost.hasOne(User, {
       foreignKey: 'id', as: 'users',
    })
  }

  return BlogPost;
};