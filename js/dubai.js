var dubai = {
    minCustperHour:11,
    maxCustperHour:38,
    avgCustperHour:3.7 ,
    hours :['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm '],
    randCustomer : function (min , max){
        var rand = getRandomcustomer(min , max);
        return rand;
    },
    renderdubai : function () {
            var contanier= document.getElementById("dubai");
            var h1=document.createElement('h1');
            contanier.appendChild(h1);
            h1.textContent=" dubai : ";
           var ulistdubail= document.createElement('ul');
            contanier.appendChild(ulistdubail);
            var sumListdubai2 =0;
            for (var repet= 0 ; repet<dubai.hours.length ; repet++){
                var listdubai1= document.createElement('li');
                var listdubai2= this.randCustomer(this.minCustperHour , this.maxCustperHour);
                listdubai1.textContent= this.hours[repet]+"  " + listdubai2 + "  cookies ";
                ulistdubail.appendChild(listdubai1);
                var liSumlist= document.createElement('li');
                ulistdubail.appendChild(liSumlist);
                sumListdubai2 +=listdubai2;
                console.log(sumListdubai2);
            }
            liSumlist.textContent=" Total : "+ sumListdubai2;
    }
  }
  function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (dubai.maxCustperHour - dubai.minCustperHour)) + dubai.minCustperHour; //The maximum is exclusive and the minimum is inclusive
  }
  
  dubai.renderdubai();