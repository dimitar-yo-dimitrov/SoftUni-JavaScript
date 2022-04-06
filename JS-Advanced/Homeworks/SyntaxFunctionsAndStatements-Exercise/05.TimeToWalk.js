function timeToWalk(steps, footprint, speedKmH) {

    let distance = steps * footprint;
    let speed = speedKmH * 1000 / 3600;
    let bonusMinutes = Math.floor(distance / 500) * 60;

    let totalSeconds = Math.ceil(distance / speed) + bonusMinutes;

    let hours = Math.floor(totalSeconds / 3600).toFixed(0).padStart(2, 0);
    let minutes = Math.floor(totalSeconds / 60).toFixed(0).padStart(2, 0);
    let seconds = (totalSeconds % 60).toFixed(0).padStart(2, 0);

    console.log(`${(hours)}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)