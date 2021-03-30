// Reverse Word
const invertWord = (text) => {
  const arrayOfWords = text.split(" ")
  let invertedWord = ""

  for (let i = arrayOfWords.length - 1; i >= 0; i--) {
    invertedWord += arrayOfWords[i] + " "
  }

  return invertedWord;
}

console.log(invertWord("Saya Belajar Javascript"))
console.log(invertWord("Javascript Belajar Saya"))