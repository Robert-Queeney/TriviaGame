"use strict"; 

let timeRemaining = 30; 
//  still need to calculate correct answers - format css - get timeout to trigger next stage

// how to remove the button
// $( ".startButton" ).remove();

// to hide elements name a div a class that you hide in css
// with the onclick function, change the class name and it will appear .toggleClass() and display:none (c

// countDown function



// onlcick function to unhide the trvia div and start the timer
$(`#startButton`).click(function(){
    console.log("cool button works"); 
    $(`#wrapper`).toggleClass('dontShow show'); 
    $(`#startButton`).toggleClass('show dontShow'); 
    let countDown = setInterval(function(){
        timeRemaining --; 
        document.getElementById("countDownTimer").textContent = timeRemaining
        if (timeRemaining <= 0)
            clearInterval(countDown); 
            return timeRemaining; 
    }, 1000); 

})



if (timeRemaining <= 0){
    $(`#wrapper`).toggleClass('show dontShow'); 
    $(`#wrapper2`).toggleClass('dontShow show');
}

$(`#finishButton`).click(function(){
    console.log("cool this button works"); 
    $(`#wrapper`).toggleClass('show dontShow'); 
    $(`#wrapper2`).toggleClass('dontShow show');
    
})







// var number = 30;

// setTimeout(function(){
//     clearInterval(timeOutFunction); 
// // works like a function, but waits an amount of time before running
// }, 30000); 

// const timeOutFunction = setInterval(function(){
//     number--

// }, 1000); 



// timeOutFunction(); 

// setTimeout("callback function", 1000) // runs once after designated time
// setInterval("callback function", 1000) // runs every second until you run a clearInterval() on it