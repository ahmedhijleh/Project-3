module.exports = function(Sequelize, Datatypes) {
  var Users = Sequelize.define("Users", {
  	id:       {type: Datatypes.INTEGER, autoIncrement: true,primaryKey: true},
    UserName: {type: Datatypes.STRING, unique: true, allowNull:false},
    Password: {type: Datatypes.STRING, allowNull: false},
    Type:     {type: Datatypes.STRING, allowNull:false }                  //to chose the user type if they are students or admins  so they can add on the commands
  });

  return Users;
};
