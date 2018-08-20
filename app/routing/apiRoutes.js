// ***********************************************************************************
// Dependencies
// ***********************************************************************************

var friends = require("../data/friends.js");

// ===============================================================================
// Routes
// ===============================================================================

module.exports = function(app){

	// Displays all
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// Displays a single character, or returns false
	app.get("/api/friends/:friends", function(req, res) {
		var chosen = req.params.friends;
	
		console.log(chosen);
	
		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].routeName) {
				return res.json(friends[i]);
			}
		}
	
		return res.json(false);
	});

	// Create New Characters - takes in JSON input
	app.post("/api/friends", function(req, res) {
		var newUser = req.body;
		var newUserScores = req.body.scores;
		var scoresArr = [];
		var bestMatch = 0;

		//runs through all current friends in list
		for(let i = 0; i < friends.length; i++){
			var scoresDiff = 0;
			//run through scores to compare friends
			for(let j = 0; j < newUserScores.length; j++){
			  	scoresDiff += (Math.abs(friends[i].scores[j] - newUserScores[j]));
			}
	  
			//push results into scoresArr
			scoresArr.push(scoresDiff);
		}
	  
		//after all friends are compared, find best match
		for (let i = 0; i < scoresArr.length; i++){
			if (scoresArr[i] <= scoresArr[bestMatch]){
			  	bestMatch = i;
			}
		}
	  
		//return bestMatch data
		var newFriend = friends[bestMatch];
		res.json(newFriend);

		//pushes new submission into the friendsList array
		friends.push(newUser);

	});
}