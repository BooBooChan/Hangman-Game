var peaches = alert('Peaches');
if(peaches){
	alert('some progress is made');
	console.log("progress");
};


// alert("Peaches");
// document.getElementsByTagName('input').addEventListener("keypress", alert("Peaches"));
//The alert is appearing after a page refresh, not after a key press as intended.
//So code recognizes addEventListener() as a method, it's just not executing the method. The effect is exactly the same as alert("Peaches") all by itself.
//HTML page seems to process the event better than JS page. It accepted the JS code inside the HTML tag.
//JS page doesn't recognize id name enter-letter. Nor does it recognize the addEventListener method. Moving script from body to head hasn't helped.

//Just adding a conditional has caused alert("Peaches") to appear upon page refresh.
//Conditional did not execute. Nothing was added to console and no new alerts arose.
//Defining the alert as a variable changed nothing.