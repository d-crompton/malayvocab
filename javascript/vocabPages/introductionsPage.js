import { populateTable } from "../support.js";

// Vocab Objects
const greetingsVocab = {
  "Good Morning": "Selamat Pagi",
  "Good Afternoon": "Selamat Tengah Hari",
  "Good Evening": "Selamat Petang",
  "Good Night": "Selamat Malam",
  Welcome: "Selamat Datang",
  "Goodbye <br>(when you are the one leaving)": "Selamat Tinggal",
  "Goodbye <br>(when the other person is leaving)": "Selamat Jalan",
};

const introVocab = {
  "How are you?": "Apa khabar?",
  "I'm well, thank you": "Khabar baik, terima kasih",
  "What is your name?": "Apa nama awak? <br>Nama awak siapa?",
  "My name is...": "Nama saya...",
  "What is your full name?": "Apa nama penuh awak?",
  "My full name is...": "Nama penuh saya...",
  "You can call me...": "Awak boleh panggil saya...",
  "How old are you?": "Berapa umur kamu",
  "I am X years old": "Umur saya X tahun",
  "Where are you from?": "Kamu dari mana?",
  "I am from Kuala Lumpur": "Saya dari Kuala Lumpur",
  "I come from Kuala Lumpur": "Saya datang dari Kuala Lumpur",
  "I live in Kuala Lumpur": "Saya tinggal di Kuala Lumpur",
  "Where do you work?": "Kerja kat mana?",
  "I work at...": "Saya bekerja di...",
};

document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblGreetings", greetingsVocab);
  populateTable("tblIntroductions", introVocab);
});
