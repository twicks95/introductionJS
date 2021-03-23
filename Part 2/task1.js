// split, reverse, join

// 1. charAt()
// Method yang digunakan untuk menangkap karakter pada string di indeks yang diinginkan
// const example = "Example";
// console.log(example.charAt(1));

// 2. slice()
// Method yang digunakan untuk memotong iterable object seperti string dan array di index ke-n sampai index ke-n, jika parameter kedua tidak diisi maka akan mencetak hingga index akhir.
// const longString = "This is an instance of long string";
const longArr = [1, 2, 3, 4, 5]
// console.log(longString.slice(11, 19));
console.log(longArr.slice(0, 3));

// 3. toLowerCase()
// Method untuk merubah string menjadi huruf kecil semua
// const string = "RandOm CAse sTRInG";
// const strLowerCase = string.toLowerCase();
// console.log(strLowerCase);

// 4. toUpperCase()
// Method untuk merubah string menjadi huruf besar semua
// const string = "lower case string";
// const strUpperCase = string.toUpperCase();
// console.log(strUpperCase);

// 5. push()
// Method object array yang digunakan untuk menambah elemen baru di akhir array dan me-return panjang array yang sudah di push
// const arrayOfNumber = [23, 78, 90, 120, 100];
// const elementLength = arrayOfNumber.push(80, 55);
// console.log(arrayOfNumber);
// console.log(elementLength);

// 6. pop()
// Method object array yang digunakan untuk menghapus elemen di akhir array dan me-return nilai elemen yang dihapus
// const arrayOfNumber = [23, 78, 90, 120, 100];
// const popElement = arrayOfNumber.pop();
// console.log(arrayOfNumber);
// console.log(`Elemen yang dihapus: ${popElement}`);

// 7. unshift()
// Method object array yang digunakan untuk menambah elemen baru di awal array dan me-return panjang array yang sudah di unshift
// const arrayOfNumber = [23, 78, 90, 120, 100];
// const elementLength = arrayOfNumber.unshift(10, 2);
// console.log(arrayOfNumber);
// console.log(elementLength);

// 8. shift()
// Method object array yang digunakan untuk menghapus elemen pertama array dan me-return nilai elemen yang dihapus
// const arrayOfNumber = [23, 78, 90, 120, 100];
// const shiftElement = arrayOfNumber.shift();
// console.log(arrayOfNumber);
// console.log(`Elemen yang dihapus: ${shiftElement}`);

// 9. splice()
// Method object array yang digunakan untuk mengubah isi array yang mana sekaligus dapat menambahkan elemen baru ketika elemen dihapus.
// const arrayOfNumber = [23, 78, 90, 120, 100];
// const spliceElement = arrayOfNumber.splice(2, 0, "New Element");
// console.log(arrayOfNumber);
// console.log(`Elemen yang dihapus: ${spliceElement}`);

// const spliceElementWithoutAddingNewElement = arrayOfNumber.splice(1, 1);
// console.log(`Elemen yang dihapus: ${spliceElementWithoutAddingNewElement}`);
// console.log(arrayOfNumber);

// 10. sort()
// Method object array yang digunakan untuk mengurutkan nilai array secara leksikografi (teknik penyusunan kamus)
// const arrayOfString = ["Avocado", "Watermelon", "Grape", "Starfruit", "Banana", "Apple"];
// const sortedArrayOfString = arrayOfString.sort();
// console.log(sortedArrayOfString);

// const arrayOfNumber = [2, 5, 20, 50, 100, 45];
// arrayOfNumber.sort((a, b) => a - b);
// console.log(arrayOfNumber);