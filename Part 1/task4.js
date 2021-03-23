let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// A
// Mengubah nilai pada properti name dan email kemudian menambah properti hobby menggunakan spread operator
// Buat objek baru yang memiliki nama properti yang sama dengan properti yang ingin diubahnya, lalu isi dengan nilai yang baru. Juga buat properti baru yang ingin ditambahkan
const obj = {
    name: "Teguh Wicaksono",
    email: "teguh.wck95@gmail.com",
    hobby: ["Designing Logo", "Listening Music", "Learning Programming Language", "Swimming"]
};

// Gabungkan objek data dengan objek obj ke dalam variabel newData yang akan berisi properti dari penggabungan dua objek
const newData = { ...data, ...obj };
console.log(newData);


// B
// Mengambil data street dan city dari objek data dan menjadikannya variabel terpisah dengan destructuring
const {street, city} = data.address;
console.log(street);
console.log(city);