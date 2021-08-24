const timers = document.getElementById('timeWatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

$('#btnStWatch').click(function(){
    if(stoptime == true){
        stoptime = false;
        timerCyle();
    }
})

$('#btnSpWatch').click(function(){
    if(stoptime == false){
        stoptime = true;
    }
})

$('#btnSrWatch').click(function(){
    stoptime = true;
    hr = 0
    min = 0
    sec = 0
    $('#timeWatch').html('00:00:00');
})

function timerCyle(){
    if(stoptime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
           
        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10 || min == 0){
            min = '0' + min;
        }
        if(hr < 10 || sec == 0){
            hr = '0' + hr;
        }

        timers.innerHTML = hr+':'+min+':'+sec;
            
        setTimeout(timerCyle,1000);
    }
}