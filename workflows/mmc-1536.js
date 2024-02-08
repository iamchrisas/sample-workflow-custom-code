/* Function to check if the current date is 
  between the 16th of month M and the 15th of month M+1, 
  enter M + 1 */

function getMonthM(date_prop) {
  let date = new Date(date_prop);
  let day = date.getDate();
  let month = date.getMonth(); // 0-based index
  let year = date.getFullYear();

  console.log(`Jour: ${day}, Mois: ${month + 1}, Annee: ${year}`);

  if (day >= 16) {
    month += 1;
  }

  // Adjust for year wrap-around
  if (month > 11) {
    month = 0; // Reset to January (0)
    year += 1;
  }

  month += 1; // Adjust for 1-based indexing

  return { annee_prod: year, mois_prod: month };
}
/*
exports.main = (event, callback) => {
  console.log(`Received event: ${JSON.stringify(event)}`);
 
  const date_prop = parseInt(event.inputFields['date_pret_envoi_assureur']);
console.log(`Date en input: ${date_prop}`);
  
  const { annee_prod, mois_prod } = getMonthM(date_prop);
  
  console.log(`Annee de prod: ${annee_prod}, Mois de prod: ${mois_prod}`); 
  
  callback({
    outputFields: {
      annee_prod: annee_prod,
      mois_prod: mois_prod,
    },
  });
};*/

console.log(getMonthM("2023-12-14"));
console.log(getMonthM("2023-12-15"));
console.log(getMonthM("2023-12-16"));
console.log(getMonthM("2023-12-24"));

console.log(getMonthM("2024-01-14"));
console.log(getMonthM("2024-01-15"));
console.log(getMonthM("2024-01-16"));
console.log(getMonthM("2024-01-24"));

console.log(getMonthM("2024-02-14"));
console.log(getMonthM("2024-02-15"));
console.log(getMonthM("2024-02-16"));
console.log(getMonthM("2024-02-24"));
