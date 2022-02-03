function NumberFormatter(num) {
  if (num > 9999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num < 9999) {
    return num;
  }
}

let test_1 = NumberFormatter(9999);
let test_2 = NumberFormatter(10000);
let test_3 = NumberFormatter(125426);
let test_4 = NumberFormatter(9999000000);

console.log(test_1, test_2, test_3, test_4);
