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
  ["Scared", "Takut", "Brave", "Berani"],
  ["Hard, Stiff", "Keras", "Soft, Gentle", "Lembut"],
  ["Rich", "Kaya", "Poor", "Miskin"],
  ["Empty", "Kosong", "Full (of things)", "Penuh"],
  ["Cold", "Sejuk", "Hot", "Panas"],
  ["Hardworking", "Rajin", "Lazy", "Malas"],
  ["Big", "Besar", "Small", "Kecil"],
  ["Noisy", "Bising", "Quiet", "Senyap"],
  ["Perfect", "Sempurna", "Flawed, Imperfect", "Cacat"],
  ["Different", "Berbeza, Lain", "Equal, Same", "Sama"],
  ["Right (Correct)", "Betul, Benar", "Wrong, Incorrect", "Salah"],
  ["Fast", "Cepat", "Slow, Late", "Lambat"],
  ["Serious", "Sungguh-sungguh", "Not serious", "Main-main"],
  ["Shallow", "Cetek", "Deep", "Dalam"],
  ["Clean", "Bersih", "Dirty", "Kotor"],
  ["Near", "Dekat", "Far", "Jauh"],
  ["Light (weight)", "Ringan", "Heavy", "Berat"],
  ["A lot, Many", "Banyak", "A little", "Sedikit, Sikit"],
  ["Strong", "Kuat", "Weak", "Lemah"],
  ["Healthy", "Sihat", "Sick", "Sakit"],
];

document.addEventListener("DOMContentLoaded", function () {
  const tblAdjectives = document.getElementById("tblAdjectives");
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
