module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      owner: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      summary: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    });
  
    Project.associate = function(models) {
      // We're saying that a Post should belong to an User
      // A Post can't be created without an User due to the foreign key constraint
      Project.belongsToMany(models.User, {
        through: "UserProject",
        onDelete: "cascade"
      });
    };
  
    return Project;
  };
  