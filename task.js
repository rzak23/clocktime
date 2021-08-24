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
            window.open('https://github.com/rzak23');
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
})