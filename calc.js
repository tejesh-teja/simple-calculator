function displayNumber(num) {
    result.value +=num;
}
function clearBox() {
    result.value=" ";
}
function evaluateExpression() {
    expression = result.value;
    output=eval(expression);
    result.value=output;
}
function removeLastItem() {
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}