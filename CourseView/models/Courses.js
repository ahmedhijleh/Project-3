module.exports = function(Sequelize, Datatypes) {
  var Courses = Sequelize.define("Courses", {
  	CourseID    :   {type: Datatypes.INTEGER,allowNull:false,primaryKey: true},
    CourseName  :   {type: Datatypes.STRING, unique: true, allowNull:false},
    CourseTopics: 	{type: Datatypes.STRING, allowNull: false},                                  //the time will be the weeks ,name will be the headline,topics will be the sub
    CourseTime  :   {type: Datatypes.STRING, allowNull:false },                					 //to allocate the pre-requests or activites that will support .
  	CourseTags  :   {type: Datatypes.STRING,  unique:true, allowNull:false }                     //tags same as topics,but it can be more than one to help finding all the tags to a course .

  });

  return Courses;
};
