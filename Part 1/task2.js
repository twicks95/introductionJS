let mtk = 80;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

// Membuat validasi input pada setiap variabel mata pelajaran
if (typeof mtk === "undefined" || typeof bahasaIndonesia === "undefined" || typeof bahasaInggris === "undefined" || typeof ipa === "undefined") {

    console.log("Nilai mata pelajaran tidak boleh kosong!");

} else if (typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {

    console.log("Nilai mata pelajaran harus angka!");

} else {
    // Menghitung rata" nilai
    const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4; // Output 82
    console.log(`Rata-rata = ${average}`);

    // Buat variabel kosong untuk menampung string grade apakah A / B / C / D / E
    let grade = "";
    if (average >= 90 && average <= 100) {          // Jika average dikisaran 90 - 100 maka grade A
        grade += "A";
    } else if (average >= 80 && average < 90) {    // Jika average dikisaran 80 - 89 maka grade B
        grade += "B";
    } else if (average >= 70 && average < 80) {    // Jika average dikisaran 70 - 79 maka grade C
        grade += "C";
    } else if (average >= 60 && average < 70) {    // Jika average dikisaran 60 - 69 maka grade D
        grade += "D"
    } else {                                        // Jika average dibawah 60 maka grade E
        grade += "E";
    }

    console.log(`Grade = ${grade}`);
}