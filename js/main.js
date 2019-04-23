function getTimeRemain(deadline) {
    let t = Date.parse(deadline) - Date.parse(new Date());
    if (t < 0) {
        return "started";
    }
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(clockid, daysSpanid, hoursSpanid, minutesSpanid, secondsSpanid, endtime) {
    let clock = document.getElementById(clockid);
    let clock_detail = document.getElementById("clock_detail");
    let dse_started = document.getElementById("dse_started");
    let dse_title = document.getElementById("dse_title");
    let daysSpan = document.getElementById(daysSpanid);
    let hoursSpan = document.getElementById(hoursSpanid);
    let minutesSpan = document.getElementById(minutesSpanid);
    let secondsSpan = document.getElementById(secondsSpanid);

    let timeinterval = setInterval(function() {
        let t = getTimeRemain(endtime);
        if (t != "started") {
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = t.hours;
            minutesSpan.innerHTML = t.minutes;
            secondsSpan.innerHTML = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        } else {
            dse_title.style.display = 'none';
            clock_detail.style.display = 'none';
            dse_started.style.display = 'block';

        }
    }, 1000);

}

initializeClock('clock', 'daysSpan', 'hoursSpan', 'minutesSpan', 'secondsSpan', '2019-04-01T08:30:00+08:00');
