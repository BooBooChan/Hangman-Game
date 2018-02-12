// alert("Peaches");
// document.getElementsByTagName('input').addEventListener("keypress", alert("Peaches"));
//The alert is appearing after a page refresh, not after a key press as intended.
//So code recognizes addEventListener() as a method, it's just not executing the method. The effect is exactly the same as alert("Peaches") all by itself.
//HTML page seems to process the event better than JS page. It accepted the JS code inside the HTML tag.
//JS page doesn't recognize id name enter-letter. Nor does it recognize the addEventListener method. Moving script from body to head hasn't helped.