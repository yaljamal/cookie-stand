import { color } from "ansi-styles";
import { red } from "color-name";

var sales = document.getElementById('ul');
sales.addEventListener('change', function(event){
event.target.style.color= "red";
});
