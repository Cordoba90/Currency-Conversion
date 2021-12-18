let money = prompt("How much money do you want to convert")

function convertToUSD(money) {
    return money * 1.4 + " USD";
}
console.log(convertToUSD(money))

function convertToBRL(money) {
    return money * 5.7 * 0.99  + " BRL";
}
console.log(convertToBRL(money))
//a === currency(USD) b === value
function convertMoney (a , b) {
  if (a === "USD" && b === 1.4 ) {
   return money * 1.4 + " USD";
  } else if (a === "BRL" && b === 5.7){
  return money * 5.7 * 0.99  + " BRL";
  } else {
    return ("HATALI GIRIS YAPTINIZ")
  }
}
console.log(convertMoney("BRL" , 5.7))