function tickets(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let sorted = {
        'destination': (x) => x.sort((a, b) => a.destination.localeCompare(b.destination)),
        'price': (x) => x.sort((a, b) => a.price - (b.price)),
        'status': (x) => x.sort((a, b) => a.status.localeCompare(b.status)),
    }

    let tickets = [];

    for (const element of array) {
        let [destination, price, status] = element.split('|');

        let ticket = new Ticket(destination, Number(price), status);

        tickets.push(ticket);
    }

    return sorted[criterion](tickets)
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));