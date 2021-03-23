// 12345
// 1234
// 123
// 12
// 1

const printSegitiga = 5;

if(typeof printSegitiga !== "number") {

    console.log("Data harus number");
    
} else {

    // String kosong untuk menampung hasil di setiap perulangan
    let segitiga = "";

    // Mulai perulangan untuk baris
    for(let i = printSegitiga; i > 0; i--) {
        
        // Mulai perulangan untuk kolom 
        for(let j = 1; j <= i; j++) {
            segitiga += j;
        }
        segitiga += "\n";
    }

    console.log(segitiga);

}