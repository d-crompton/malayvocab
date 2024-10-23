import { populateTable } from "../support.js";

// Put Vocab in alphabetical order of the malay words
const trafficSignsVocab = {
  Awas: "Beware",
  "Awas Banjir": "Flood Warning (<em>lit. Beware Flood</em>)",
  Berhenti: "Stop",
  "Beri Laluan": "Give Way",
  "Bersedia Untuk Berhenti": "Prepare to Stop",
  "Km/J<br>(Kilometer Sejam)": "Kilometer per Hour",
  "Kawasan Sekolah Berakhir": "School Zone Ends",
  "Kawasan Sekolah Bermula": "School Zone Starts",
  "kecuali Bas Awam Sahaja<br><em>(May be under a No Parking sign)</em>":
    "Except Public Buses Only",
  "Ikut Kiri Kecuali Semasa Momotong":
    "Stay Left Unless When Overtaking <br>(<em>Momotong also translates as 'cutting'</em>)",
  Keluar: "Exit",
  "Kenderaan Berat Berpusing Di Hadapan": "Heavy Vehicles Turning Ahead",
  "Kurangkan Laju": "Reduce Speed",
  Masuk: "Enter",
  Perlahan: "Slow Down",
};

document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblTrafficSigns", trafficSignsVocab);
});
