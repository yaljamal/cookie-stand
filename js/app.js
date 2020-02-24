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


seattle.renderseattle();

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
  return Math.floor(Math.random() * (max- min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Tokyo.renderTokyo();
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
  return Math.floor(Math.random() * (max- min)) + max; //The maximum is exclusive and the minimum is inclusive
}

lima.renderlima();


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
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

dubai.renderdubai();




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
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

paris.renderparis();