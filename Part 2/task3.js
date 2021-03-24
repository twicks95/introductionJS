const seleksiNilai = (initialValue, endValue, arrayData) => {

  // Menyiapkan variabel untuk menampung array yang sudah di sorting dimana nilai tersebut adalah nilai diantara initialValue dan endValue
  const sortedArrayData = [];

  // Cek terlebih dahulu jika parameter nilai awal lebih besar daripada parameter nilai akhir
  if (initialValue > endValue) {
    return "Nilai akhir harus lebih besar dari nilai awal!.";

  // Cek jika jumlah data di dalam array yang ingin dicari kurang dari 6
  } else if (arrayData.length < 6) {
    return "Jumlah data dalam array harus lebih dari 5!";

  } else {

    for (const el of arrayData) {
      // Cek apakah angka yang di looping ada di antara nilai awal dan nilai akhir
      if (el > initialValue && el < endValue) {
        sortedArrayData.push(el);
      } 
    }
    
    // Jika tidak ditemukan angka di dalam array yang memiliki nilai diantara nilai awal dan akhir
    if (sortedArrayData.length < 0) {
      return "Jumlah angka dalam arrayData tidak ada!";
    }

    return sortedArrayData.sort((a, b) => a - b);;

  }
}

// console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(15, 2, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(5, 17, [2, 25, 4]));
// console.log(seleksiNilai(5, 17, [2, 25, 4, 17, 30, 18]));