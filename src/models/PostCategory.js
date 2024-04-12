module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
  'PostCategory',
  {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
  
  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategory;
};