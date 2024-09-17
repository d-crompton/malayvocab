// Vocab Objects - Each object is used for a different table
const numbersVocab1 = {
  Zero: "Kosong",
  One: "Satu",
  Two: "Dua",
  Three: "Tiga",
  Four: "Empat",
  Five: "Lima",
  Six: "Enam",
  Seven: "Tujuh",
  Eight: "Lapan",
  Nine: "Sembilan",
  Ten: "Sepuluh",
};

const numbersVocab2 = {
  Eleven: "Sebelas",
  Twelve: "Dua Belas",
  Thirteen: "Tiga Belas",
  Fourteen: "Empat Belas",
  Fifteen: "Lima Belas",
  Sixteen: "Enam Belas",
  Seventeen: "Tujuh Belas",
  Eighteen: "Lapan Belas",
  Nineteen: "Sembilan Belas",
};

const numbersVocab3 = {
  Twenty: "Dua Puluh",
  "Twenty One": "Dua Puluh Satu",
  "Twenty Two": "Dua Puluh Dua",
  "Twenty Three": "Dua Puluh Tiga",
  "Twenty Four": "Dua Puluh Empat",
  "Twenty Five": "Dua Puluh Lima",
  "Twenty Six": "Dua Puluh Enam",
  "Twenty Seven": "Dua Puluh Tujuh",
  "Twenty Eight": "Dua Puluh Lapan",
  "Twenty Nine": "Dua Puluh Sembilan",
};

const numbersVocab4 = {
  Thirty: "Tiga Puluh",
  Forty: "Empat Puluh",
  Fifty: "Lima Puluh",
  Sixty: "Enam Puluh",
  Seventy: "Tujuh Puluh",
  Eighty: "Lapan Puluh",
  Ninety: "Sembilan Puluh",
};

const numbersVocab5 = {
  Hundreds: "Ratus",
  "One Hundred": "Seratus",
  "Two Hundred": "Dua Ratus",
  Thousands: "Ribu",
  "One Thousand": "Seribu",
  Millions: "Juta",
  "One Million": "Sejuta",
};

// Function used to populate the tables
const populateTable = function (tableId, vocabObject) {
  let table = document.getElementById(tableId);
  for (word in vocabObject) {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = word;
    cell2.innerHTML = vocabObject[word];
  }
};

// Populate tables on page load
document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblNumbers1", numbersVocab1);
  populateTable("tblNumbers2", numbersVocab2);
  populateTable("tblNumbers3", numbersVocab3);
  populateTable("tblNumbers4", numbersVocab4);
  populateTable("tblNumbers5", numbersVocab5);
});
