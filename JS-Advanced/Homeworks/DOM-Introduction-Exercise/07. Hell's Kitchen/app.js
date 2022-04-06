function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let totalSalary = 0;
      let averageSalary = 0;
      let currAvgMaxSalary = 0;
      let bestRestaurant = '';
      let result = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!result.hasOwnProperty(restaurantName)) {
               result[restaurantName] = {};
            } if (result.hasOwnProperty(restaurantName)) {
               result[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(result);

      for (const entry of entries) {
         let keyNameOfRestaurant = entry[0];
         let values = Object.values(entry[1]);

         for (const salary of values) {
            totalSalary += salary;
         }

         averageSalary = totalSalary / values.length;

         if (averageSalary > currAvgMaxSalary) {
            currAvgMaxSalary = averageSalary;
            bestRestaurant = keyNameOfRestaurant;
            totalSalary = 0;
         }
      }

      let output = Object.entries(result[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      let print = '';

      output.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurant} Average Salary: ${currAvgMaxSalary.toFixed(2)} Best Salary: ${(output[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}