function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    // let timeUnits = {
    //     days: 1,
    //     hours: 24,
    //     minutes: 1440,
    //     seconds: 86400,
    // }

    document.getElementById('daysBtn').addEventListener('click', convertToDays);
    document.getElementById('hoursBtn').addEventListener('click', convertToHours);
    document.getElementById('minutesBtn').addEventListener('click', convertToMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertToSecond);

    // function convertUnits(value, unit) {
    //     let days = value / timeUnits[unit];

    //     return {
    //         days: days,
    //         hours: days * timeUnits.hours,
    //         minutes: days * timeUnits.minutes,
    //         seconds: days * timeUnits.seconds,
    //     };
    // }

    // function convert(event) {
    //     let input = event.target.parentElement.querySelector('input[type="text"]');

    //     let time = convertUnits(Number(input.value), input.id);

    //     days.value = time.days;
    //     hours.value = time.hours;
    //     minutes.value = time.minutes;
    //     seconds.value = time.seconds;

    function convertToDays() {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    }

    function convertToHours() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    }

    function convertToMinutes() {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }

    function convertToSecond() {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    }
}