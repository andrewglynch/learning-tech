const prompt = require('prompt-sync')()

const billAmount = Number(prompt('How much was your bill before tip?    '))
if (isNaN(billAmount)) {

    console.log(`That's not a valid number. I'm exiting here.`)

}

else {
const tipPercentage = Number(prompt('What percentage of the bill do you want to tip? Enter as a whole number (e.g. for 10%, just type "10".    '))

if (isNaN(tipPercentage)) {

    console.log(`That's not a valid number. I'm exiting here.`)

}

else {
const tipAmount = billAmount * (tipPercentage/100)
console.log(`OK, that means that on your bill of $${billAmount.toFixed(2)}, a tip of ${tipPercentage}% is $${tipAmount.toFixed(2)}.`)
const    totalPayable = billAmount + tipAmount
console.log(`Which means, the total amount payable is $${totalPayable.toFixed(2)}.`)
console.log(`_______________`)
console.log()
const totalPayees = Number(prompt('How many people do you want to split the bill by? Enter a whole number.   '))

if (isNaN(totalPayees) || totalPayees === 0) {

    console.log(`That's not a valid number. I'm exiting here.`)

}

    else {
console.log()
const perPerson = totalPayable / totalPayees
console.log()
console.log(`Got it -- in that case, the total amount for each person is $${perPerson.toFixed(2)}.`)
console.log()
console.log()
console.log(`Cash or card?`)
console.log()
console.log()

}
}
}