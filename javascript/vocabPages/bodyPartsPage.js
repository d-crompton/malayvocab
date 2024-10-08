import { populateTable } from "../support.js";

// Vocab Objects - One per table
const bodyPartsVocab = {
  Head: "Kepala",
  Neck: "Leher",
  "Back of the Neck": "Tengkuk",
  Bone: "Tulang",
  Collarbone: "Tulang Selangka",
  Shoulder: "Bahu",
  "Shoulder Blade": "Tulang Belikat",
  Chest: "Dada",
  Stomach: "Perut",
  "Belly Button": "Pusat <i>(Also means centre)</i>",
  Arm: "Lengan",
  Elbow: "Siku",
  Wrist: "Pergelangan Tangan",
  Hand: "Tangan",
  Waist: "Pinggang",
  Hips: "Pinggul",
  Butt: "Punggung",
  "Private Parts": "Kemaluan",
  Thigh: "Peha",
  Knee: "Lutut",
  Calves: "Betis",
  Shinbone: "Tulang Kering <i>(lit. 'Dry Bone')</i>",
  Ankle: "Pergelangan Kaki",
  Foot: "Kaki",
  Heel: "Tumit Kaki",
  Toes: "Jari Kaki",
};

const facialFeaturesVocab = {
  Face: "Muka",
  Forehead: "Dahi",
  Eyebrows: "Kening",
  Eye: "Mata",
  Eyelids: "Kelopak Mata",
  "Eye Lashes": "Bulu Mata",
  "Small Body Hairs": "Bulu",
  "Hair (on your head)": "Rambut",
  Nose: "Hidung",
  Mouth: "Mulut",
  Lips: "Bibir",
  Teeth: "Gigi",
  Gums: "Gusi",
  Tongue: "Lidah",
  Chin: "Dagu",
  Cheeks: "Pipi",
  Ears: "Telinga",
};

const fingersVocab = {
  Finger: "Jari",
  Thumb: "Ibu Jari",
  "Index Finger": "Jari Telunjuk",
  "Middle Finger": "Jari Tengah / Jari Hantu <i>(lit. 'Ghost Finger')</i>",
  "Ring Finger": "Jari Manis <i>(lit. 'Sweet Finger')</i>",
  "Little Finger": "Jari Kelingking",
};

// Populate tables on page load
document.addEventListener("DOMContentLoaded", function () {
  populateTable("tblBodyParts", bodyPartsVocab);
  populateTable("tblFacialFeatures", facialFeaturesVocab);
  populateTable("tblFingers", fingersVocab);
});
