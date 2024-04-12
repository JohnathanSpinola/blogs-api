module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
  'PostCategory',
  {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
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