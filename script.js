(function(){
    'use strict';
var convertType="miles";
var heading = document.querySelector('h1');
var intro = document.querySelector('p');
var answerDiv = document.getElementById('answer');
var form = document.getElementById('convert');

document.addEventListener('keydown',function(event){
  
    var key = event.code; 
   
    if( key === 'KeyK' ){
       //change in header 
       //change the intro 
       //change the value by converttype

       convertType = 'kilometers';
       heading.innerHTML = "Kilometers to Miles Converter";
       intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        
    }else if( key === 'KeyM'){
       convertType = 'Miles';
       heading.innerHTML = " Miles to Kilometers  Converter";
       intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        
    }

});

form.addEventListener('submit',function(event){
   
   event.preventDefault();

   var distance = parseFloat(document.getElementById('distance').value);

   if( distance){
         //convert M to K 1.609344
         //convert K to M 0.621371192
         if( convertType == 'miles'){
            var converted =(distance*1.609344).toFixed(3);
            answerDiv.innerHTML = `${distance} miles converted to ${converted} kilometers` ;
         }
         else{
            var converted =(distance*0.621371192).toFixed(3);
            answerDiv.innerHTML = `${distance} kilometers converted to ${converted} miles` ;

         }
   }else{
     answerDiv.innerHTML = "<h2>Please provide a number!</h2>";
   }

})
})();