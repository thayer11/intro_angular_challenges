console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
	this.name = "Holly Coddington"; 
	this.height = 5.6; 
{

 function loanController(){
 	this.amount = "10000";
 	this.apr = "6.8";

 this.month = function(n){
 	var annual_interest = (this.amount*(this.apr/100));
 	var monthly_interest = (annual_interest / 12);
 	var accrued_interest = monthly_interest * n || 0;
 		return{
 			accrued_interest: accured_interest,
 			total_balance: this.amount + accrued_interest
 		}
	}
}