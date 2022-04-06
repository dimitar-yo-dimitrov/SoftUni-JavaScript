class SummerCamp {
    constructor(organizer, location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    };
    
    registerParticipant(name, condition, money) {
        money = Number(money);

        if (!this.priceForTheCamp[condition]) {

            throw new Error(`Unsuccessful registration at the camp.`);
        }
        if (this.priceForTheCamp[condition] > money) {

            return `The money is not enough to pay the stay at the camp.`;
        }
        if (this.listOfParticipants.some(x => x.name == name)) {

            return `The ${name} is already registered at the camp.`;
        }
     
        let participant = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {

        let currentParticipant = this.listOfParticipants.find(x => x.name == name);
        if (!currentParticipant) {

            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.indexOf(currentParticipant)
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {

        let firstPerson = this.listOfParticipants.find(x => x.name == participant1)

        if (!firstPerson) {

            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === 'WaterBalloonFights') {

            let secondPerson = this.listOfParticipants.find(x => x.name == participant2)

            if (!secondPerson) {

                throw new Error(`Invalid entered name/s.`);
            }

            if (firstPerson.condition !== secondPerson.condition) {

                throw new Error(`Choose players with equal condition.`);
            }

            if (firstPerson.power > secondPerson.power) {

                firstPerson.wins++;
                return `The ${firstPerson.name} is winner in the game ${typeOfGame}.`;

            } else if (firstPerson.power < secondPerson.power) {

                secondPerson.wins++;
                return `The ${secondPerson.name} is winner in the game ${typeOfGame}.`;

            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame === 'Battleship') {

            if (!firstPerson.name) {
                throw new Error(`Invalid entered name/s.`);
            }

            firstPerson.power += 20;

            return `The ${firstPerson.name} successfully completed the game ${typeOfGame}.`;
        }
    }
    toString() {

        let firstMassages = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        let sortedParticipant = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        let allParticipant = sortedParticipant.map(x => `${x.name} - ${x.condition} - ${x.power} - ${x.wins}`).join('\n');

        return firstMassages += allParticipant;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




