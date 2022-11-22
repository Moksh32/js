var a = parseInt(prompt("Enter any Value"))
var op = prompt("Enter any operator")
var b = parseInt(prompt("Enter any Value"))

if (op == "+") {
    var result = a + b;
    document.write(a +"+"+ b +"="+ result)
} else if (op == "-") {
    var result = a - b;
    document.write(a +"-"+ b +"="+ result)
}else if (op == "*") {
    var result = a * b;
    document.write(a +"*"+ b +"="+ result)
}else if (op == "/") {
    var result = a / b;
    document.write(a +"/"+ b +"="+ result)
}else {
    alert("enter valid operator")
}