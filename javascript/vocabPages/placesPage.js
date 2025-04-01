// English, Malay, Category Num (Used for background colour)
const placesVocab = [
  ["Place", "Tempat", 0],
  ["Parking", "Parkir / Tempat Meletak Kereta", 1],
  ["Entrance", "Pintu Masuk", 1],
  ["Exit", "Pintu Keluar", 1],
  ["Street", "Jalan", 1],
  ["Roadside", "Tepi Jalan", 1],
  ["Market", "Pasar", 2],
  ["Supermarket", "Pasar Raya", 2],
  ["Farmer's Market", "Pasar Tani", 2],
  ["Night Market", "Pasar Malam", 2],
  ["Shop, Store", "Kedai", 2],
  ["Grocery Store", "Kedai Runcit", 2],
  ["Bakery", "Kedai Roti", 2],
  ["Shopping Mall/Centre", "Pusat Membeli-Belah", 2],
  ["Town Centre", "Pusat Bandar", 2],
  ["Restaurant", "Restoran", 3],
  ["Cafe", "Kafe", 3],
  ["Bank", "Bank", 4],
  ["ATM", "ATM", 4],
  ["Post Office", "Pejabat Pos", 4],
  ["Pharmacy", "Farmasi", 5],
  ["Hospital", "Hospital", 5],
  ["Clinic", "Klinik", 5],
  ["Museum", "Muzium", 6],
  ["National Museum", "Muzium Negara", 6],
  ["Toilet", "Tandas", 7],
  ["Men's Toilet", "Tandas Lelaki", 7],
  ["Prayer Room", "Surau", 8],
  ["Mosque", "Masjid", 8],
  ["Internet Cafe", "Kafe Internet", 9],
  ["Beach", "Pantai", 10],
  ["Seaside", "Tepi Pantai", 10],
  ["Park", "Taman", 10],
  ["Pool", "Kolam Renang", 10],
  ["Bus Station", "Stesen Bas", 10],
  ["Train Station", "Stesen Keretapi", 10],
  ["Airport", "Lapangan Terbang", 10],
  ["Petrol Station", "Stesen Minyak", 10],
  ["Hotel", "Hotel", 11],
];

document.addEventListener("DOMContentLoaded", function () {
  let table = document.getElementById("tblPlaces");
  for (const wordArr of placesVocab) {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = wordArr[0];
    cell2.innerHTML = wordArr[1];
    if (wordArr[2] % 2 == 0) {
      newRow.classList.add("filled");
    }
  }
});
