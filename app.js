function updateNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if(isIncreasing == true){
        productNumber = parseFloat(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate update 
    calculatTotal();
}

 

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculatTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the Html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone increase decrease handeling
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', 1219, false);
})


// handle case increase decrease 
document.getElementById('case-plus').addEventListener('click', function(){
    updateNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59, false);
});