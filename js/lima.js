var lima = {
    minCustperHour:2,
    maxCustperHour:16,
    avgCustperHour:4.6 ,
    hours :['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm '],
    randCustomer : function (min , max){
        var rand = getRandomcustomer(min , max);
        return rand;
    },
    renderlima : function () {
            var contanier= document.getElementById("lima");
            var h1=document.createElement('h1');
            contanier.appendChild(h1);
            h1.textContent=" lima : ";
           var ulistlimal= document.createElement('ul');
            contanier.appendChild(ulistlimal);
            var sumListlima2 =0;
            for (var repet= 0 ; repet<lima.hours.length ; repet++){
                var listlima1= document.createElement('li');
                var listlima2= this.randCustomer(this.minCustperHour , this.maxCustperHour);
                listlima1.textContent= this.hours[repet]+"  " + listlima2 + "  cookies ";
                ulistlimal.appendChild(listlima1);
                var liSumlist= document.createElement('li');
                ulistlimal.appendChild(liSumlist);
                sumListlima2 +=listlima2;
                console.log(sumListlima2);
            }
            liSumlist.textContent=" Total : "+ sumListlima2;
    }
  }
  function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (lima.maxCustperHour - lima.minCustperHour)) + lima.minCustperHour; //The maximum is exclusive and the minimum is inclusive
  }
  
  lima.renderlima();