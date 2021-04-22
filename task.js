$(document).ready(function(){
    jam_now();
    date_holiday();

    $('.nav-link').click(function(){
        var menu = $(this).attr('data');

        if(menu == "clock"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#timer').hide(500);
            $('#clock').show(500);
            $('#stopwatch').hide(500);
        }else if(menu == "timer"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#clock').hide(500);
            $('#timer').show(500);
            $('#stopwatch').hide(500);
        }else if(menu == "stopwatch"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#clock').hide(500);
            $('#timer').hide(500);
            $('#stopwatch').show(500);
        }else if(menu == "update"){
            openUpdate();
        }
    })


    setInterval(jam_now,1000);
    $('#timer').hide();
    $('#stopwatch').hide();

    function jam_now(){
        var weekday = new Array(7);
        weekday[0] = "Minggu";
        weekday[1] = "Senin";
        weekday[2] = "Selasa";
        weekday[3] = "Rabu";
        weekday[4] = "Kamis";
        weekday[5] = "Jum\'at";
        weekday[6] = "Sabtu";
        var d = new Date();

        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var sec = d.getSeconds();
        var mday = weekday[d.getDay()];
        var montf = month+1;

        var watch = hour+":"+minute+":"+sec;
        var calendar = day+"/"+montf+"/"+year+"<br>"+mday;

        $('#show_watch').html(watch);
        $('#show_cal').html(calendar);
    }

    function date_holiday(){
        var d = new Date();

        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var montf = month+1;

        $.getJSON("https://holidays.abstractapi.com/v1/?api_key=19a2a9034e1f41f1a7831e65fdfa9c8f&country=ID&year="+year+"&month="+montf+"&day="+day+"", function(data) {
            if(data == null || data == ""){
                var libur = "<br>(Tidak ada libur nasional)"
            }else{
                var libur = "<br>("+data[0]['name']+")";
            }
            $('#holiday').html(libur);
        })
    }

    function openTimer(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('#clock').hide(500);
        $('#timer').show(500);
    }

    $('#btnStart').click(function(){
        var min = $('#minute').val();
        var msg = $('#cnotif').val();
        var time = min * 60;

        // setInterval(updateCount,1000);
        startWaktu(time, msg);
        $('#form').trigger('reset');
    })

    function startWaktu(time, psn){
        var t = setInterval(function(){
            var minute = Math.floor(time/60);
            var second = time % 60;

            var page = minute+":"+second;
            $('#show_time').html(page);
            time--;
            if(page == "0:0"){
                stopWaktu(t, psn);
            }
        },1000);
    }

    function stopWaktu(t, psn){
        clearInterval(t);
        $('#show_time').html('time\'s up');
        var audio = new Audio('sound/tekotok.mp3');
        audio.play();
        const notificationTimes = new Notification('Waktu Habis',{
            title: 'Time\'s Up',
            body: psn,
            icon: 'build/icon.png'
        })
    }

    // StopWatch
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
    
})