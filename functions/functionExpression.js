const dobroInFunctionExpression = function (x) {
  return x * 2;
};

const dobroInFunctionExpressionWithArrowFunction = (x) => {
  return x * 2;
};

console.log(dobroInFunctionExpression(5));
console.log(dobroInFunctionExpressionWithArrowFunction(10));
