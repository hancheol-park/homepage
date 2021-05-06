module.exports = (sequelize, DataTypes) => {
  return sequelize.define('board', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    count: {
      type: DataTypes.DECIMAL(10),
      allowNull: true,
    }
  },
  {
    timestamps: true,
    paranoid: true
  });
};