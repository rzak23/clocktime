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