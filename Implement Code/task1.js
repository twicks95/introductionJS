// Palindrom Text Detection
const isTextPalindrom = (text) => {
  let txt = text.toLowerCase()
  let reverseText = ""
  
  for(let i = txt.length - 1; i >= 0; i--) {
    reverseText += txt[i]
  }

  if(txt === reverseText) {
    return "Palindrom";
  } else {
    return "Bukan Palindrom"
  }
}

console.log(isTextPalindrom("Kasur Haji Ijah Rusak"))
console.log(isTextPalindrom("Kasur Haji Ijah Rusak Slur"))


