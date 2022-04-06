function dayOfWeek(input) {
    let result;
    switch (input) {
        case 'Monday': result = Number(1); break;
        case 'Tuesday': result = Number(2); break;
        case 'Wednesday': result = Number(3); break;
        case 'Thursday': result = Number(4); break;
        case 'Friday': result = Number(5); break;
        case 'Saturday': result = Number(6); break;
        case 'Sunday': result = Number(7); break;
        default: result = 'error';
    }
    console.log(result);
}

dayOfWeek('Invalid');