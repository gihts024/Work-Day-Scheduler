
// Moments for the dates
var day = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(day);


// Global variables for the entry of logs and time
var newEntry = $(`#textEntry`);

var currentTime = moment().hour();

var now = new Date().getHours();

$(document).ready(function () {
// On clicking save we want an event to start


  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".addText").val();
      var time = $(this).parent().attr("id");

      // we now save text and time 
      localStorage.setItem(time, text);
  })
 



// Retrieve the text and time from storage
$("#nine .addText").val(localStorage.getItem("nine"));
$("#ten .addText").val(localStorage.getItem("ten"));
$("#eleven .addText").val(localStorage.getItem("eleven"));
$("#twelve .addText").val(localStorage.getItem("twelve"));
$("#thirteen .addText").val(localStorage.getItem("thirteen"));
$("#fourteen .addText").val(localStorage.getItem("fourteen"));
$("#fifteen .addText").val(localStorage.getItem("fifteen"));
$("#sixteen .addText").val(localStorage.getItem("sixteen"));
$("#seventeen .addText").val(localStorage.getItem("seventeen"));



// Append the color based on the time frame Nine O'Oclock. 

if (currentTime  >= 9 && now < 10){
  $(`#nine`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >9){
  $(`#nine`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#nine`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Ten O'Oclock. 

if (currentTime  >= 10 && now < 11){
  $(`#ten`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >10){
  $(`#ten`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#ten`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Eleven O'Oclock. 

if (currentTime  >= 11 && now < 12){
  $(`#eleven`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >11){
  $(`#eleven`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#eleven`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Twelve O'Oclock. 

if (currentTime  >= 12 && now < 13){
  $(`#twelve`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >12){
  $(`#twelve`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#twelve`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Thirteen O'Oclock. 

if (currentTime  >= 13 && now < 14){
  $(`#thirteen`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >13){
  $(`#thirteen`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#thirteen`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Fourteen O'Oclock. 

if (currentTime  >= 14 && now < 15){
  $(`#fourteen`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >15){
  $(`#fourteen`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#fourteen`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};


// Append the color based on the time frame Fifteen O'Oclock. 

if (currentTime  >= 15 && now < 16){
  $(`#fifteen`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >15){
  $(`#fifteen`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#fifteen`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

// Append the color based on the time frame Sixteen O'Oclock. 

if (currentTime  >= 16 && now < 17){
  $(`#sixteen`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >16){
  $(`#sixteen`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#sixteen`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

//Append the color based on the time frame Seventeen O'Oclock. 

if (currentTime  >= 17 && now < 18){
  $(`#seventeen`).addClass("alert alert-success alert-dismissible fade show");
  console.log(currentTime);
} else if (currentTime >17){
  $(`#seventeen`).addClass("alert alert-danger alert-dismissible fade show");
  console.log('pastTime');
} else 
{
  $(`#seventeen`).addClass("alert alert-warning alert-dismissible fade show");
  console.log('future');
};

})




