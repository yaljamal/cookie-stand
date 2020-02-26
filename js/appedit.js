var hours = ['  6 am ', '  7 am ', '  8 am ', '  9 am ', '  10 am ', '  11 am ', '  12 am ', '  1 pm ', '  2 pm ', '  3 pm ', '  4 pm ', '  5 pm ', '  6 pm ', '  7 pm '];
var contaner = document.getElementById('locaton');
var table = document.createElement('table');
contanier.appendChild(table);
// helper function
function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}
var shops = [];
function Location(name, max, min, avg) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;

}
Location.prototype.getRandomCookies = function () {


}

Location.prototype.render = function () {
    var trEli = document.createElement('tr');
    table.appendChild(trEli);
    var tdEli = document.createElement('td');
    trEli.appendChild(tdEli);


}
