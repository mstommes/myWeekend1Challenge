$(document).ready(function(){
	$("[name='submitButton']").on('click', function(event){
		event.preventDefault();

		var $inputs = $("#someForm :input");
		var values = {};

		$inputs.each(function(){
			values[this.name] = $(this).val();
		});

		insertEmployeeCard(values);

	});
	$("[name='deleteButton']").on('click', function(event){
		event.preventDefault();

		$("#employeeInput").children(".employee").last().remove();              

	});
});
	
function insertEmployeeCard(values){
	var $el = $("#employeeInput");
	var $myDiv = $("<div/>",  {
		class:"employee"
	});

	//this code adds each object to the div with a class of employee
	$myDiv.append("<p> First Name is: " + values.firstName + "</p>");
	$myDiv.append("<p> Last Name is: " + values.lastName + "</p>");
	$myDiv.append("<p> Title is: " + values.title + "</p>");
	$myDiv.append("<p> Employee ID Number is: " + values.employeeNumber+ "</p>");
	$myDiv.append("<p> Last Review Score was: <span style = 'color:" + reviewScoreColorMaker(values.lastReviewScore) +"'>" + values.lastReviewScore + "</span></p>");
	$myDiv.append("<p> Annual Salary is: " + values.salary + "</p>");
	
	var $button = $("<input type=\"button\" value=\"Delete This Item\" class=\"deleteThisButton\">");

	$button.on('click', function(event){
		event.preventDefault();

		$(this).parent().remove();              

	});

	$myDiv.append($button);


	//this is the code that deletes the appended elements from the previous class
	// $("someForm").append($("[name='deleteButton']").on('click', function(event){
	// 	$("#employeeInput").children(".employee").last().remove();              
	// 	}));	

	$el.append($myDiv);
}


function reviewScoreColorMaker(rating) {
	var color;
	switch (rating){
	case "1": 
		color = "red";
		break;
	case "2": 
		color = "orange";
		break;

	case "3":
		color= "yellow";
		break;

	case "4" :
		color= "blue";
		break;

	case "5":
		color = "green";
		break;

	default:
		color = "white";

	}
	return color;
}	

/*
function randomEmployeeGenerator(firstName) {
	function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);}

}



*/
