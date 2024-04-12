module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
  'BlogPost',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts'
  },
  );
  
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
       foreignKey: 'userId', as: 'user',
    })
  }

  return BlogPost;
};