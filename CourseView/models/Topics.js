module.exports = function(Sequelize, Datatypes) {
  var Topics = Sequelize.define("Topics", {
  	Id          :   {type: Datatypes.INTEGER, autoIncrement: true,primaryKey: true},
    Topic_Name  :   {type: Datatypes.STRING, unique: true, allowNull:false},
    Topic_Tags  : 	{type: Datatypes.STRING,unique:true, allowNull: false},               //topics will have the sub classes content name and what tags are related to 
    CourseID    :   {type: Datatypes.STRING, allowNull:false },                            //the topic so that the user can have the ability to find the connections between 
  	Topic_extras:   {type: Datatypes.STRING, allowNull:false },                            //the courses and review it,also it will help the student to have ## hashtage that will
    																					   // will publish it or search on twitter.
  });																					   //extras can be any helpful outsource ,codeshare , extra exercises or meetings....

  return Courses;
};
