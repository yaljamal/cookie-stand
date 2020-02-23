var Tokyo = {
    minCustperHour:3,
    maxCustperHour:24,
    avgCustperHour:1.2 ,
    hours :['6 am ','7 am ','8 am ','9 am ','10 am ' , '11 am ','12 am ', '1 pm ' , '2 pm ' , '3 pm ', '4 pm ' , '5 pm ' , '6 pm ' , '7 pm '],
    randCustomer : function (min , max){
        var rand = getRandomcustomer(min , max);
        return rand;
    },
    renderTokyo : function () {
            var contanier= document.getElementById("Tokyo");
            var h1=document.createElement('h1');
            contanier.appendChild(h1);
            h1.textContent=" Tokyo : ";
           var ulistTokyol= document.createElement('ul');
            contanier.appendChild(ulistTokyol);
            var sumListTokyo2 =0;
            for (var repet= 0 ; repet<Tokyo.hours.length ; repet++){
                var listTokyo1= document.createElement('li');
                var listTokyo2= this.randCustomer(this.minCustperHour , this.maxCustperHour);
                listTokyo1.textContent= this.hours[repet]+"  " + listTokyo2 + "  cookies ";
                ulistTokyol.appendChild(listTokyo1);
                var liSumlist= document.createElement('li');
                ulistTokyol.appendChild(liSumlist);
                sumListTokyo2 +=listTokyo2;
                console.log(sumListTokyo2);
            }
            liSumlist.textContent=" Total : "+ sumListTokyo2;
    }
  }
  function getRandomcustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (Tokyo.maxCustperHour - Tokyo.minCustperHour)) + Tokyo.minCustperHour; //The maximum is exclusive and the minimum is inclusive
  }
  
  Tokyo.renderTokyo();