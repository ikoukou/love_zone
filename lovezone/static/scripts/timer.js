function updateTime() {
    var now = new Date();
    var startDate = new Date("2015-05-18");

    var diffTime = now.getTime() - startDate.getTime();
    var diffSeconds = Math.floor(diffTime / 1000);
    var diffMinutes = Math.floor(diffSeconds / 60);
    var diffHours = Math.floor(diffMinutes / 60);
    var diffDays = Math.floor(diffHours / 24);
    var diffYears = Math.floor(diffDays / 365);

    // var currentYear = startDate.getFullYear() + diffYears;
    var currentYear = diffYears;
    var currentDay = diffDays % 365;
    var currentHour = diffHours % 24;
    var currentMinute = diffMinutes % 60;
    var currentSecond = diffSeconds % 60;

    currentDay = (currentDay < 10) ? "0" + currentDay : currentDay;
    currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
    currentMinute = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
    currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond;

    document.getElementById("year").textContent = currentYear;
    document.getElementById("day").textContent = currentDay;
    document.getElementById("hour").textContent = currentHour;
    document.getElementById("minute").textContent = currentMinute;
    document.getElementById("second").textContent = currentSecond;
}

setInterval(updateTime, 1000);