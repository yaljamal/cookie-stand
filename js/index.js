import { color } from "ansi-styles";
import { red } from "color-name";

var sales = document.getElementById('sales');
sales.addEventListener('change', function(event){
event.target.style.color= "red";
});
