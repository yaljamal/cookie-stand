var paris = {
    minCustperHour:20,
    maxCustperHour:38,
    avgCustperHour:2.3 ,
    hours :['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm '],
    randCustomer : function (min , max){
        var rand = getRandomcustomer(min , max);
        return rand;
    },
    renderparis : function () {
            var contanier= document.getElementById("paris");
            var h1=document.createElement('h1');
            contanier.appendChild(h1);
            h1.textContent=" paris : ";
           var ulistparisl= document.createElement('ul');
            contanier.appendChild(ulistparisl);
            var sumListparis2 =0;
            for (var repet= 0 ; repet<paris.hours.length ; repet++){
                var listparis1= document.createElement('li');
                var listparis2= this.randCustomer(this.minCustperHour , this.maxCustperHour);
                listparis1.textContent= this.hours[repet]+"  " + listparis2 + "  cookies ";
                ulistparisl.appendChild(listparis1);
                var liSumlist= document.createElement('li');
                ulistparisl.appendChild(liSumlist);
                sumListparis2 +=listparis2;
                console.log(sumListparis2);
            }
            liSumlist.textContent=" Total : "+ sumListparis2;
    }
  }
  function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (paris.maxCustperHour - paris.minCustperHour)) + paris.minCustperHour; //The maximum is exclusive and the minimum is inclusive
  }
  
  paris.renderparis();