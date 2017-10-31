//Connect to the Twitter API and search for the user hashtags search and response
var Twitter=require('twit');
var twitterconfig=require('./TwitterConfig');
var SearchHashTag=require('/../controllers/booksController')										
var GetTwitter =new Twitter(twitterconfig);
		GetTwitter.get('search/tweets',{q:'SearchHashTag', count: 140 },                   
	 	function(err,data,response) {
	 		if(err)
	 			{
	 			console.error("Check Your Connection"+err.stack);
	 				return;
	 			}
	 			else{
	 		 var tweets=data.statuses;													//create an object to push all the results from the search 
	 		 var results={};
	 			for(var i=0;i<tweets.length;i++)	{ 					
	 							results.push(tweets[i].text)
  								 					}
  					  }
  					               });
		
					module.exports = GetTwitter;
					module.exports = results;