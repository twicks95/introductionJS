// 1
// Mengambil Objek data mahasiswa dan menampilkan namanya saja
const students = [
  {
    name: "Teguh Wicaksono",
    studentID: 250021004,
    email: "teguh.wck95@gmail.com",
    status: true
  },
  {
    name: "Bagus Rianda",
    studentID: 250020027,
    email: "bagus.rianda@gmail.com",
    status: false
  },
  {
    name: "Muhammad Abim",
    studentID: 250021013,
    email: "m.abim@gmail.com",
    status: false
  },
  {
    name: "Andi Sanjaya",
    studentID: 250019059,
    email: "andisanjayaa@gmail.com",
    status: true
  }
]

const getNameFromDataStudents = (src) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false
      const dataStudents = src

      if (!error) {
        resolve(dataStudents)
      } else {
        reject(new Error("There is no data available"))
      }
    }, 2000)
  })
}

getNameFromDataStudents(students)
  .then((data) => {
    for (let obj of data) {
      console.log(obj.name)
    }
  })
  .catch((error) => console.log(error.message))


// 2
const decreaseItemStock = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const item = {name: "Item1", stock: 14}

      let someoneHasBought = true;
      
      if(someoneHasBought) {
        resolve(item)
      } else {
        reject(new Error("We still have " + item.stock + " items in our warehouse"))
      }
    }, 3000)

  })
}

decreaseItemStock()
  .then((item) => {
    item.stock -= 1
    console.log(item);
  })
  .catch((error) => console.log(error.message))