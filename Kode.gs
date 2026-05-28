function doGet(e) {
  var page = (e.parameter.page === 'admin') ? 'Admin' : 'Index';
  var template = HtmlService.createTemplateFromFile(page);
  
  var ss = SpreadsheetApp.openById("1J6QTdrQzy9HwbzGMW8L1TCUN02D-1_ucT7v8Vgh8KzI");
  var settings = ss.getSheetByName("Settings").getDataRange().getValues();
  
  // Inject variabel ke HTML
  template.namaSekolah = settings[3][1];
  template.footerTeks = settings[4][1];
  
  return template.evaluate()
    .setTitle(settings[4][1])
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSettings() {
  var ss = SpreadsheetApp.openById("1J6QTdrQzy9HwbzGMW8L1TCUN02D-1_ucT7v8Vgh8KzI");
  var data = ss.getSheetByName("Settings").getDataRange().getValues();
  return {
    tanggalMulai: data[0][1],
    kuotaHarian: data[1][1],
    jumlahOperator: data[2][1],
    namaSekolah: data[3][1],
    footerTeks: data[4][1]
  };
}

function saveSettings(newSettings) {
  var ss = SpreadsheetApp.openById("1J6QTdrQzy9HwbzGMW8L1TCUN02D-1_ucT7v8Vgh8KzI");
  var sheet = ss.getSheetByName("Settings");
  sheet.getRange("B1:B5").setValues([
    [newSettings.tanggalMulai],
    [newSettings.kuotaHarian],
    [newSettings.jumlahOperator],
    [newSettings.namaSekolah],
    [newSettings.footerTeks]
  ]);
  return "Konfigurasi Berhasil Disimpan!";
}

function daftarAntrian(formData) {
  var ss = SpreadsheetApp.openById("1J6QTdrQzy9HwbzGMW8L1TCUN02D-1_ucT7v8Vgh8KzI");
  var settings = ss.getSheetByName("Settings").getDataRange().getValues();
  
  var tglSetting = new Date(settings[0][1]);
  var kuotaMaks = settings[1][1];
  var jmlOperator = settings[2][1];
  
  var sheet = ss.getSheetByName("DataAntrian") || ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  
  var targetDate = (new Date() > tglSetting) ? new Date() : new Date(tglSetting);
  var nomorUrut = 1;
  
  // Logika Cari Tanggal & Kuota
  while (true) {
    if (targetDate.getDay() === 0) { targetDate.setDate(targetDate.getDate() + 1); continue; }
    
    var tglString = targetDate.toDateString();
    var pendaftarHariIni = 0;
    
    for (var i = 1; i < data.length; i++) {
      if (data[i][7] === tglString) pendaftarHariIni++;
    }
    
    if (pendaftarHariIni < kuotaMaks) {
      nomorUrut = pendaftarHariIni + 1;
      break;
    } else {
      targetDate.setDate(targetDate.getDate() + 1);
    }
  }
  
  // Pembagian Operator (Loket) secara otomatis (Round Robin)
  var indexOperator = (nomorUrut - 1) % jmlOperator + 1;
  var namaLoket = "OPERATOR " + indexOperator;
  
  var hariIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var bulanIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  var tglCetak = hariIndo[targetDate.getDay()] + ", " + targetDate.getDate() + " " + bulanIndo[targetDate.getMonth()] + " " + targetDate.getFullYear();
  
  var noAntrianFinal = String(nomorUrut).padStart(3, '0');
  
  // ... di dalam fungsi daftarAntrian ...
sheet.appendRow([
  new Date(),                           
  "'" + formData.nisn,                  
  "'" + formData.no_hp, // Mengubah NIK menjadi No HP pada kolom database
  formData.nama.toUpperCase(),          
  formData.asal_sekolah.toUpperCase(),  
  tglCetak, noAntrianFinal, tglString, namaLoket
]);

return {
  nama: formData.nama.toUpperCase(),
  nisn: formData.nisn,
  no_hp: formData.no_hp, // Dikirim ke HTML
  asal: formData.asal_sekolah.toUpperCase(),
  hari: tglCetak,
  nomor: noAntrianFinal,
  loket: namaLoket
  };
}
