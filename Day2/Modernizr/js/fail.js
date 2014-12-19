//Fall back or polyfill

console.log("Date picker doesnt work");


$('input[type=date]').datepicker({
	dateFormat:'mm/dd/yy'
});