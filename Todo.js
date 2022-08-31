
$(document).ready(function(){

  $("#date").text(currentDate());


  function currentDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
   var toDayDate= m + "/" + d + "/" + y; 
   return toDayDate;
  }

 

$("#inputs").submit(function(e){
  e.preventDefault();

var TaskName = $("#TaskName").val();
var Category=$("#Category").val();
var Priortiy=$('input[name="Priortiy"]:checked').val();

  var date = new Date($('#Deadline').val());
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var EndDate=[month, day, year].join('/');

if(Priortiy=='High')
var PriortiyColor= "#d6726f";
else if (Priortiy=='Low')
var PriortiyColor= "#e5ca97";
else
var PriortiyColor= "#f09659";



if(isBeforeToday(new Date(year, month-1, day)))
var PassOrNotImg= '<img class="TaskIcon" src="cancel.png" alt="Due date is passed">';


else if(TowDayLeft(new Date(year, month-1, day))){
  var PassOrNotImg= '<img class="TaskIcon" src="warning.png" alt="warning! 2 days or less left">';

}
else
  var PassOrNotImg= '<img class="TaskIcon" src="wall-clock.png" alt="more than 2 day remaining">';



var liInput=' <li  style="background-color:'+PriortiyColor+'">'+PassOrNotImg+'<h3>'+TaskName+'</h3> <h3>'+EndDate+'</h3><input type="checkbox" class="checkbox"></li>';
$("#TasksNotComplet").append(liInput);

 });

$("#clear").click(function(){
$("#inputs").reset();
});

function isBeforeToday(date) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
}

function  TowDayLeft(date) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  var Difference_In_Time = date.getTime() - today.getTime();
  
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return Difference_In_Days<=2;
}

$("#done").on("click", function() {

  if($("li input:checked").val()!=null){
  
    var CompletedTasks= $("li input:checked").parent();


    CompletedTasks.css("background-color", "#bcd37d");
  
    $("li input:checked").remove();
  
    $("#CompletedTasks").append(CompletedTasks);
    $("#CompletedTasks .TaskIcon").attr("src","checked.png");  
    $("#CompletedTasks .TaskIcon").attr("alt","task done");  


  }

  else{
    alert("Choose task please!");
  }

});



});

