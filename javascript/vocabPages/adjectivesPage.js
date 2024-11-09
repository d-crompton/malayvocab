const vocabArray = [
  ["Tasty, Delicious", "Sedap", "Bitter", "Pahit"],
  ["Sweet", "Manis", "Sour", "Masam"],
  ["Cheap", "Murah", "Expensive", "Mahal"],
  ["Tall, High", "Tinggi", "Low", "Rendah"],
  ["Short", "Pendek", "Long", "Panjang"],
  ["Thick", "Tebal", "Thin", "Nipis"],
  ["Wide, Extensive", "Luas", "Narrow", "Sempit"],
  ["Bright", "Cerah", "Dark", "Gelap"],
  ["Intelligent", "Pandai", "Stupid", "Bodoh"],
  ["Fat", "Gemuk", "Thin, Slim", "Kurus"],
  ["Young", "Muda", "Old", "Tua"],
  ["Handsome", "Tampan", "Ugly", "Hodoh"],
  ["Smelly, Rotten", "Busuk", "Fragrant", "Wangi"],
  ["Easy", "Senang", "Difficult, Hard", "Susah"],
  ["Dry", "Kering", "Wet", "Basah"],
  ["New", "Baru", "Old", "Lama"],
  ["Good, OK, Fine", "Baik", "Bad, Evil", "Jahat"],
  ["Nice, Wonderful", "Bagus", "Cruel", "Kejam"],
  ["Hungry", "Lapar", "Full (after eating)", "Kenyang"],
  ["Fun", "Seronok", "Boring", "Bosan"],
  ["Sad", "Sedih", "Happy", "Gembira"],
  ["Shy", "Malu", "Confident", "Yakin"],
];

document.addEventListener("DOMContentLoaded", function () {
  tblAdjectives = document.getElementById("tblAdjectives");
  vocabArray.forEach((elem, index, array) => {
    let newRow = tblAdjectives.insertRow(-1);
    for (let i = 0; i < elem.length; i++) {
      let newCell = newRow.insertCell(i);
      newCell.innerHTML = elem[i];
      if (i % 2 == 0) {
        newCell.className = "englishCell";
      }
    }
  });
});
