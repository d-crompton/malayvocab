// Function used to populate the tables
export const populateTable = function (tableId, vocabObject) {
  let table = document.getElementById(tableId);
  for (var word in vocabObject) {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = word;
    cell2.innerHTML = vocabObject[word];
  }
};
