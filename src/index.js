module.exports = function zeros(expression) {
  const arrArg = expression.split("*");
  const arr1 = [];
  const arr2 = [];
  arrArg.map(el => {
    if (el.includes("!!")) {
      arr2.push(el.slice(0, -2));
    } else if (el.includes("!")) {
      arr1.push(el.slice(0, -1));
    }
  });
  const arrRes = [];
  // console.log('---- ' + expression);
  // arr1.map(el => console.log("arr1 " + el));
  // arr2.map(el => console.log("arr2 " + el));
  arr1.map(el => arrRes.push(BigInt(fact1(el))));
  arr2.map(el => arrRes.push(BigInt(fact2(el))));
  console.log("arr factorials >" + arrRes);
  const resNumber = arrRes.reduce((m1, m2) => {
    return BigInt(m1) * BigInt(m2);
  }, 1);
  // console.log(">>>>> " + resNumber);
  const resArrString = resNumber.toString().split("");
  let res = 0;
  for (let i = resArrString.length - 1; i >= 0; i--) {
    if (resArrString[i] === "0") {
      res++;
    } else {
      break;
    }
  }
  return res;
};

const fact1 = n => {
  if (n <= 1) return BigInt(1);
  // if (n === 1) return BigInt(1);
  return BigInt(n) * fact1(n - 1);
};
const fact2 = n => {
  if (n <= 1) return BigInt(1);
  if (n === 2) return BigInt(2);
  return BigInt(n) * fact2(n - 2);
};
