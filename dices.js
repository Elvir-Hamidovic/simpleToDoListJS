var todos = ["Buy New Turtle"];

window.setTimeout(function() {

var answer = prompt("What are you going to do?");
while(answer !== "quit")
{
	
		if (answer === "list")
	{

			console.log(todos);
	}
	else if (answer === "new") 
	{

		var newThing = prompt("Enter new thing toDo");
		todos.push(newThing);

	}

	var answer = prompt("What are you going to do?");

}

console.log("OK YOU QUIT THE APP");

							}, 500);