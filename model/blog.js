module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  return Blog;
};
