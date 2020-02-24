'usestrict';
var hours = ['  6 am ', '  7 am ', '  8 am ', '  9 am ', '  10 am ', '  11 am ', '  12 am ', '  1 pm ', '  2 pm ', '  3 pm ', '  4 pm ', '  5 pm ', '  6 pm ', '  7 pm ','Total'];
var contanier = document.getElementById('locaton');
var table = document.createElement('table');
var total = 0;
var t=[];
var data = [];
var masterTotal=0;


contanier.appendChild(table);

function getRandomcustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function Location(name, minCustperHour, maxCustperHour, avgCustperHour) {
  this.maxCustperHour = maxCustperHour;
  this.name = name;
  this.minCustperHour = minCustperHour;
  this.avgCustperHour = avgCustperHour;
  this.randomNumberArry = [];
  
}
//git random number
Location.prototype.randCustomerNum = function () {
  for (var printRand = 0; printRand < hours.length; printRand++) {
    this.randomNumberArry.push(Math.floor(getRandomcustomer(this.minCustperHour, this.maxCustperHour) * this.avgCustperHour));
  }
  //console.log(this.randomNumberArry);
}
//print array hours the header
  var trEli1 = document.createElement('tr');
  table.appendChild(trEli1);
  var thEmpty = document.createElement('th');
  thEmpty.textContent = "";
  trEli1.appendChild(thEmpty);
  for (var repet = 0; repet < hours.length; repet++) {
    var hoursData = document.createElement('th');
    trEli1.appendChild(hoursData);
    hoursData.textContent = ""+ hours[repet];
  }
//show the table main
Location.prototype.render = function () {
  var rowTotal = 0;
this.randCustomerNum();

  var trEli2  = document.createElement('tr');
  table.appendChild(trEli2);
  var tdEli = document.createElement('td');
  trEli2.appendChild(tdEli);
  tdEli.textContent = this.name;

  for (var i = 0; i <= hours.length-1; i++) {
    var tdEli2 = document.createElement('td');
    if(i=== hours.length-1){
    var totalTdEl = document.createElement('td');
    trEli2.appendChild(totalTdEl);
    totalTdEl.textContent = rowTotal;
    masterTotal+=rowTotal;
   // console.log(rowTotal);
    }else{
    tdEli2.textContent = this.randomNumberArry[i];
    rowTotal +=this.randomNumberArry[i];
    
    trEli2.appendChild(tdEli2);
    data.push(this.randomNumberArry[i]);
    //console.log(this.data);
     }
  }
};
function totalOfTotal() {
  var totalOfRandom=document.createElement('th');
    table.appendChild(totalOfRandom);
    totalOfRandom.textContent="Total";

    console.log(data);
    var newData =chunkArray(data);
    console.log(newData);
 var sum1=0;
 for (var z=0;z<hours.length-1;z++){
  for (i=0;i<5;i++){
      sum1 +=newData[i][z];
      //console.log(total);
    }
    total+=sum1;
    var tdEli3 = document.createElement('td');
    table.appendChild(tdEli3);
   tdEli3.textContent=sum1;
   // console.log(total);
   
  }
  var tdEli3 = document.createElement('td');
  table.appendChild(tdEli3);
  tdEli3.textContent=masterTotal;

}
//helping function 
function chunkArray(myArray){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  for (index = 0; index < arrayLength; index += 14) {
      myChunk = myArray.slice(index, index+14);
      // Do something if you want with the group
      tempArray.push(myChunk);
  }

  return tempArray;
}
// make the objects
var seatle = new Location('seatle' , 11 , 38 ,3.7);
var tokyo = new Location('tokyo',3,24,1.2);
var dubai = new Location('dubai' , 11 , 38 ,3.7);
var paris=new Location('paris',20,38,2.3);
var lima=new Location('lima',2,16,4.6);
seatle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
totalOfTotal();