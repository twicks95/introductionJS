const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"];

let searchName = (arrayOfString, keyword, limit, limitResult) => {

  // Me-return array berisi data yang sudah di filter berdasarkan keyword ke dalam variabel filterResult
  let filterResult = arrayOfString.filter(function(el) {
    return el.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
  });

  // Me-return array yang sudah di limit
  return limitResult(filterResult, limit);
}

// Callback
function limitFilterResult(array, limit) {
  return array.slice(0, limit);
}

console.log(searchName(name, "an", 3, limitFilterResult));
