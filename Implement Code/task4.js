const divideAndSort = (sequenceOfNumbers) => {

  const sequenceNumbers = sequenceOfNumbers.toString()
  const arrayOfStringsNumber = sequenceNumbers.split("0")

  const arrayWithSortedNumberAtEachElement = arrayOfStringsNumber.map((element) => {  // Akan berisi array dengan setiap elemen yang sudah di sorting nilainya

    const eachElement = element                                                       // Variabel untuk menyimpan setiap elemen yang sedang di loop

    /* Mulai proses sorting elemen */
    const splitElement = []                                                           // Akan berisi ['7', '8', '2', '5']
    for (const element of eachElement) {
      splitElement.push(element)
    }

    const sortSplittedElement = splitElement.sort((a, b) => a - b)                    // Elemen yang sudah di split akan di sorting, akan berisi ['2', '5', '7', '8']

    let sortedNumber = ""                                                             // Menggabungkan isi array yang sudah di sorting menjadi string, akan berisi '2578'
    for (const element of sortSplittedElement) {
      sortedNumber += element
    }
    /* Akhir proses sorting elemen */

    return sortedNumber                                                               // Mengembalikan string dengan angka yang sudah di sorting, sehingga array map akan berisi ['2578']
  })

  /* Tiap elemen array hasil method map akan dimasukan ke variabel */
  let printSortedNumber = ""
  for (const element of arrayWithSortedNumberAtEachElement) {
    printSortedNumber += element
  }

  return parseInt(printSortedNumber)

}

console.log(divideAndSort(5956560159466056))
// console.log(divideAndSort(782505460826))
