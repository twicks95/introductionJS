const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error("Hari ini bukan hari kerja"))
      }
    }, 3000)
  })
}

// then...catch
cekHariKerja("sabtu")
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
/* then catch adalah method yang digunakan untuk handling hasil proses asynchronous menggunakan promise, 
dimana method then akan menangkap dan menjalankan fungsi resolve sebagai callback dari sebuah proses 
yang sudah berhasil dan jika tidak maka method catch akan otomatis menangkap dan menjalankan fungsi reject 
untuk menampilkan proses yang akan dilakukan ketika gagal. */ 


// try...catch
async function asyncAwait() {
  try {
    let result = await cekHariKerja("sabtu");
    console.log(`${result} adalah hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
}
asyncAwait();
// try catch adalah cara lain dari error handling selain then catch. Menggunakan async function yang akan menandakan bahwa fungsi tersebut akan selalu mengembalikan sebuah promise. Dan keyword await yang berarti menunggu hingga proses asynchronous selesai apakah berhasil atau gagal. Ketika proses berhasil maka kode di dalam blok try setelah await dari proses asynchronous akan dieksekusi namun jika tidak maka blok kode catch akan dieksekusi dan menerima 1 parameter berupa error.