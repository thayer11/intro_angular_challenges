console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("CohortController", CohortController);

function WelcomeController(){
	this.full_name = "Holly Coddington"
	this.age = 33;
	this.city = "Denver";
	this.state = "CO."
	this.shout = function(string){
    	return string.toUpperCase() + "!";
  }
}

function CohortController(){
	this.class_name = "White Walkers"
	this.enrolled_students = ["Allison", "Greg", "Kyle", "Jamie", "Maddy", "Kayce", "Nick", "Mark", "Charlie", "Monica", "Louie", "Holly", "Matt", "Abe"];
	this.start_date = "6-13-2016"
	this.end_date = "9-02-2016"
	this.days_remaining = "21"
}

