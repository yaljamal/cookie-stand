var hours = ['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm ', 'Total'];

function Location(minCustperHour,maxCustperHour,avgCustperHour) {
    this.minCustperHour=minCustperHour;
    this.maxCustperHour=maxCustperHour;
    this.avgCustperHour=avgCustperHour;
  }
// var contanier= document.getElementById("locaton");
//   var table= document.createElement('table');
//   contanier.appendChild(table);
  var tr1Eli=document.createElement('tr');
  table.appendChild(tr1Eli);
  var th1Eli=document.createElement('th');
  tr1Eli.appendChild(th1Eli);
  //print array hours 
  for(var repet = 0 ;repet< hours.length;repet++)
  {
      var hoursData=document.createElement('th');
      tr1Eli.appendChild(hoursData);
      hoursData.textContent=hours[repet]; 
  }

  
  var randCustomer = function (min , max){
    var rand = getRandomcustomer(min , max);
    return rand;
  }

  function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max- min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
var sum=0;
  for (var repet= 0 ; repet<hours.length ; repet++){
              }

