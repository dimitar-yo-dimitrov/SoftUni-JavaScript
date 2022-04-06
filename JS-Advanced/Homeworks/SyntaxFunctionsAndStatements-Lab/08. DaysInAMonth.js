function daysInAMonth(month, year) {
    console.log(new Date(year, month, 0).getDate());
}

daysInAMonth(2, 1900)