$(document).ready(function(){
    jam_now();

    $('.nav-link').click(function(){
        var menu = $(this).attr('data');

        if(menu == "clock"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#timer').hide(500);
            $('#clock').show(500);
            $('#alarm').hide(500);
        }else if(menu == "timer"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#clock').hide(500);
            $('#timer').show(500);
            $('#alarm').hide(500);
        }else if(menu == "alarm"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#clock').hide(500);
            $('#timer').hide(500);
            $('#alarm').show(500);
        }else if(menu == "update"){
            openUpdate();
        }
    })


    setInterval(jam_now,1000);
    $('#timer').hide();
    $('#alarm').hide();

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

        var watch = hour+":"+minute+":"+sec;
        var calendar = day+"/"+month+"/"+year+"<br>"+mday;

        $('#show_watch').html(watch);
        $('#show_cal').html(calendar);
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
            body: psn
        })
    }

    function openUpdate(){
        window.open('https://github.com/rzak23/clocktime/releases');
    }
})