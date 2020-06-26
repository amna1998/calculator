function getnumber(num){
    console.log(num)
    var inputnum = document.getElementById("inputnum");
    inputnum.value += num;
}
function clearresult(){
    var inputnum = document.getElementById("inputnum");
    inputnum.value = ""
}
function getresult(){
    var inputnum = document.getElementById("inputnum");
    inputnum.value = eval(inputnum.value)
}
function square() {
	inputnum.value = eval(inputnum.value) * eval(inputnum.value)
}
function cube() {
	inputnum.value = eval(inputnum.value) * eval(inputnum.value) * eval(inputnum.value)
}
function sqrt() {
	inputnum.value = Math.sqrt(inputnum.value);
}
function tan() {
	inputnum.value = Math.tan(inputnum.value);
}
function sin() {
	inputnum.value = Math.sin(inputnum.value);
}
function cos() {
	inputnum.value = Math.cos(inputnum.value);
}
function ln() {
    inputnum.value = Math.log(inputnum.value);
}
function addChar(inputnum, character) {
	if(inputnum.value == null || inputnum.value == "0")
		inputnum.value = character
	else
		inputnum.value += character
}
function percent(inputnum) {
    val = inputnum.value;
    inputnum.value = val / 100;
}
function pi(inputnum){
    val = inputnum.value;
    inputnum.value = val * 3.14159265359;
}
function exp(inputnum) {
	val = inputnum.value;
    inputnum.value = val * 2.71828182845;
}
function deleteChar(inputnum) {
	inputnum.value = inputnum.value.substring(0, inputnum.value.length - 1)
}
  