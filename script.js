const formValues = document.querySelector(".percent_calculate_btns");
const billAmount = document.querySelector(".amount");
const billAmountInput = billAmount.querySelector(".bill")
const Number_of_people = document.querySelector(".Number_of_people_input");
const errorMSG = document.querySelector(".errorMSG_label .error_MSG");
const tipAmount = document.querySelector(".results_box .tip_text");
const totalTip = document.querySelector(".results_box .total_text");
const resetBtn = document.querySelector(".results_box .reset_btn")
const customInput = document.querySelector(".percent_calculate_btns #custom")


let inputPercent = 0;
let peopleNumber = 0;
let billAmountValue = 0;
let tipAmountVar = 0;
let totalTipVar = 0;

function getBillAmountValue (e) {
	billAmountValue = Number(e.target.value);
	return billAmountValue
}


function getInputValue(e) {
	e.preventDefault()
	if(!e.target.name) 	return;
	inputPercent = Number(e.target.name)
	return inputPercent
}


function getNumberOfPeople(e){
	if(!Number(e.target.value)){
		errorMSG.innerHTML = `Can't be empthy`
		errorMSG.style.color = "red"
	}
	else {
		peopleNumber = Number(e.target.value);
		errorMSG.innerHTML = ``
	}

}


function asignValueToName(e) {
  e.target.name = e.target.value
}

function calculateEachTip() {
	tipAmountVar = `$${((billAmountValue * inputPercent) / 100).toFixed(2)}`
	tipAmount.innerHTML = tipAmountVar
}

function calculateTotalTip() {
	totalTipVar = `$${(((billAmountValue * peopleNumber) * inputPercent) / 100).toFixed(2)}`
	totalTip.innerHTML = totalTipVar
}

function ResetPreResults() {
	tipAmountVar = `$${(0).toFixed(2)}`;
	totalTipVar =  `$${(0).toFixed(2)}`;
	tipAmount.innerHTML = tipAmountVar;
	totalTip.innerHTML = totalTipVar;
	billAmountInput.value = ""
	Number_of_people.value = ""
}

customInput.addEventListener("input", asignValueToName);
resetBtn.addEventListener("click", ResetPreResults);
billAmount.addEventListener("keyup", calculateEachTip);
billAmount.addEventListener("keyup", calculateTotalTip);
document.addEventListener("keypress", (e) => {
	console.log(e.key)
	if(e.key === "Enter") {
		calculateEachTip();
		calculateTotalTip()
	}
})
Number_of_people.addEventListener("change", (e) => {
	getNumberOfPeople(e)
});
formValues.addEventListener('click', (e) => {
	getInputValue(e)
});
formValues.addEventListener('input', (e) => {
	getInputValue(e)
});
billAmount.addEventListener("input", (e) => {
	getBillAmountValue (e)
});

