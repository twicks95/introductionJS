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
      const dataS = src

      if (!error) {
        resolve(dataS)
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
