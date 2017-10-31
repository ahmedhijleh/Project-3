'use strict';
var Sequelize = require('sequelize');
var fs        = require('fs');
const path    = require('path');
var basename  = path.basename('../public/index.html');                   // i tried to return it to the login page to check the user credintials 
var config    = require(__dirname + '/../config/Loginconfig,json') [env];
var env       = config.env || 'development';
var db        = {};

const sequelize = new Sequelize(config.database,config.username,config.password);
 fs
     .readdirSync(__dirname)
      .filter(function(file) {
   		 return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');                                   //	
                       	 	 })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
   		 db[model.name] = model;
  						});
  	sequelize.authenticate()                                                                                                 
		.then(console.log("the connection been established correctly")); 
			 .catch (err){                                                                 
				console.log("make sure the data in your package json is correct and the nodes are installed ")};
	Object.keys(db).forEach(function (modelName) {
		if (db[modelName].associate) {
			console.log(db[modelName])
		db[modelName].associate(db);
			}
			});

  		db.sequelize = sequelize;
		db.Sequelize = Sequelize;
		   module.export{db};
