$(document).ready(function(){
    jam_now();

    $('.nav-link').click(function(){
        var menu = $(this).attr('data');

        if(menu == "clock"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#timer').hide(500);
            $('#clock').show(500);
        }else if (menu == "timer"){
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('#clock').hide(500);
            $('#timer').show(500);
        }
        $('#clock').show();
    })


    setInterval(jam_now,1000);
    $('#timer').hide();

    function jam_now(){
        var d = new Date();

        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var sec = d.getSeconds();

        var watch = hour+":"+minute+":"+sec;
        var calendar = day+"/"+month+"/"+year;

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
        var time = min * 60;

        // setInterval(updateCount,1000);
        startWaktu(time);
        $('#form').trigger('reset');
    })

    function startWaktu(time){
        var t = setInterval(function(){
            var minute = Math.floor(time/60);
            var second = time % 60;

            var page = minute+":"+second;
            $('#show_time').html(page);
            time--;
            if(page == "0:0"){
                stopWaktu(t);
            }
        },1000);
    }

    function stopWaktu(t){
        // var cache = startWaktu(0);
        clearInterval(t);
        $('#show_time').html('time\'s up');
        const notificationTimes = new Notification('Waktu Habis',{
            body: "Batas Waktu yang tersedia sudah habis"
        })
    }
})