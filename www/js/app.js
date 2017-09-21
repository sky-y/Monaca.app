function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
}
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    var img_tag = "";
    if (camera_url) {
        img_tag = "<img src='" + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
    $("#todo-list").listview('refresh');
    $('#timer').yycountdown({endDateTime:'2020/07/24 00:00:00'});
};

function() {'use strict'
    
    var timer = document.getElementById('timer')
    var min = document.getElementById('min')
    var sec = document.getElementById('sec')
    var reset = document.getElementById('reset')
    var start = document.getElementById('start')

    var startTime;
    var vtimeLeft;
    var timeToCountDown = 4 *1000;
    
    function updateTimer(t) {
        var d = new Date(t);
        var m = d.getMinutes();
        var s = d.getSeconds();
        var ms = d.getMilliseconds();
        timer.textContent = m + ':' + s + '.' + ms;
    }
    
    function countdown() {
        setTimeout(function() {
        timeLeft = timeToCountDown - (Date.now() - starTime);
        }, 10);


var strDate = $("date-deadline").text();  // HTMLフォームの文字列
var date = new Date(strDate);  // 日付
var jsonDate = JSON.stringify(date); // JSON形式

