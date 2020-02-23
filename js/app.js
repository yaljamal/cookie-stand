'use strict';
var seattle = {
    minCustperHour:23,
    maxCustperHour:65,
    avgCustperHour:6.3 ,
    hours :['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm '],
    randCustomer : function (min , max){
        var rand = getRandomcustomer(min , max);
        return rand;
    },
    renderseattle : function () {
            var contanier= document.getElementById("seattle");
            var h1=document.createElement('h1');
            contanier.appendChild(h1);
            h1.textContent=" Seattle : ";
           var ulistSeattel= document.createElement('ul');
            contanier.appendChild(ulistSeattel);
            var sumListSeatel2 =0;
            for (var repet= 0 ; repet<seattle.hours.length ; repet++){
                var listSeatel1= document.createElement('li');
                var listSeatel2= this.randCustomer(this.minCustperHour , this.maxCustperHour);
                listSeatel1.textContent= this.hours[repet]+"  " + listSeatel2 + "  cookies ";
              //   listSeatel1.textContent= [this.hours[repet] , this.randCustomer(this.minCustperHour , this.maxCustperHour) ] ;
               //  console.log(listSeatel1[1]);
              //  listSeatel1.textContent= [this.hours[repet] , 'this the outpu ] ;
                ulistSeattel.appendChild(listSeatel1);
                var liSumlist= document.createElement('li');
                ulistSeattel.appendChild(liSumlist);
                sumListSeatel2 +=listSeatel2;
                console.log(sumListSeatel2);
            }
            liSumlist.textContent=" Total : "+ sumListSeatel2;
    }
}
function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (seattle.maxCustperHour - seattle.minCustperHour)) + seattle.minCustperHour; //The maximum is exclusive and the minimum is inclusive
  }

seattle.renderseattle();

