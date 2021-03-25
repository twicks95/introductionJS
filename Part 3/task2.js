const getMonth = (callback) => {
  setTimeout(() => {
    let error = true
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error("Sorry Data Not Found"), [])
    }
  }, 4000)
}

// Callback dengan anonymous function
getMonth((isError, month) => {
  if (isError) {
    console.log(isError.message, month)
  } else {
    month.map((el) => console.log(el))
  }
})