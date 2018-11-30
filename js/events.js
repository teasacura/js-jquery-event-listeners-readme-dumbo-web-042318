function getIt() {
  alert("Hey!")
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
   alert("It was pressed!")
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){

 $('p').click(getIt);

 $('img').on('load', frameIt);

 $('#typing').on('keydown', (key) => {
   if(key.which === 71) {
     pressIt()
   }
 });

 $('form').on('submit', submitIt);

});
