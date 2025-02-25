import { populateTable } from "../support.js";

const timeVocab = {
  "Do we have enough time?": "Cukup ke masa?",
  "We don't have time": "Kita tak ada masa",
  "Study time": "Waktu belajar",
  "Work time": "Waktu kerja",
  "Sleep time": "Waktu tidur",
  "What time is it now?": "Sekarang pukul berapa?",
  "It's five o'clock": "Sekarang pukul lima",
  Hour: "Jam",
  Minute: "Minit",
  Second: "Saat",
  "Half past five": "Pukul lima setengah",
  Quarter: "Suku",
  "Quarter past five": "Pukul lima suku",
  "5:45": "Pukul lima tiga suku",
};

document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblTime", timeVocab);
});
