import { populateTable } from "../support.js";

const questionsVocab = {
  What: "Apa?",
  Where: "Mana?",
  When: "Bila?",
  Why: "Mengapa? (Formal) <br>Kenapa? (Informal)",
  Who: "Siapa?",
  How: "Bagaimana? (Formal) <br>Macam Mana? (Informal)",
};

document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblQuestions", questionsVocab);
});
