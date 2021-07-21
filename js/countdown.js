var countDownDate = new Date("May 28, 2020 15:37:25").getTime();


var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countdown").innerHTML = days + " Gün " + hours + " : " +
        minutes + " : " + seconds + " Kaldı";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
    }
}, 1000);