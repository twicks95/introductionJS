const arkFood = (price = 0, voucher = "false", distance = 0, tax = false) => {
  let discount;
  let deliveryCost;
  const deliveryCostBelow2Km = 5000

  const currencyFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  switch (voucher.toUpperCase()) {
    case "ARKAFOOD5":
      discount = discount50Percent(price)
      break
    case "DITRAKTIRDEMY":
      discount = discount60Percent(price)
      break
    default:
      discount = 0
      break
  }

  (distance > 2) ? deliveryCost = deliveryCostBelow2Km + 3000 * (distance - 2) : deliveryCost = deliveryCostBelow2Km

  tax ? tax = (5 / 100) * price : tax = 0

  return `  ------> Harga       : ${currencyFormatter.format(price)}
  ------> Potongan    : ${currencyFormatter.format(discount)}
  ------> Biaya Antar : ${currencyFormatter.format(deliveryCost)}
  ------> Pajak       : ${currencyFormatter.format(tax)}
  =====================================================================
  ------> Sub Total   : ${currencyFormatter.format((price - discount) + deliveryCost + tax)}`
}

function discount50Percent(price) {
  const maxDiscount = 50000

  if (price >= 50000) {
    discount = (50 / 100) * price
    if (discount > maxDiscount) {
      discount = maxDiscount
    }
  } else {
    discount = 0
  }
  return discount
}

function discount60Percent(price) {
  const maxDiscount = 30000;

  if (price >= 25000) {
    discount = (60 / 100) * price
    if (discount > maxDiscount) {
      discount = maxDiscount
    }
  } else {
    discount = 0
  }
  return discount
}

// RUN THE CODE BELOW:
// console.log(arkFood(25000, "ARKAFOOD5", 5, true))
console.log(arkFood(75000, "ARKAFOOD5", 5, true))
// console.log(arkFood(25000, "DITRAKTIRDEMY", 10, true))
// console.log(arkFood(15000, "DITRAKTIRDEMY", 10, false))