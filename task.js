$(document).ready(function(){ // startTimer();

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