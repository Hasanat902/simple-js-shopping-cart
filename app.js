function updatePhoneNumber(product, price, isPositive){
    const productInput = document.getElementById(product + "-number");
    const productNumber = productInput.value;
    if(isPositive){
        const newProductNumber = parseInt(productNumber) + 1;
        productInput.value = newProductNumber;
    }
    else if(productNumber > 0){
        const newCaseNumber = parseInt(productNumber) - 1;
        productInput.value = newCaseNumber;
    }
    const productTotal = document.getElementById(product + "-price");
    productTotal.innerText = productInput.value * price;
    
}

document.getElementById("case-plus").addEventListener("click", function(){
    
    updatePhoneNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function(){
    
   updatePhoneNumber("case", 59, false);
});

document.getElementById("phone-plus").addEventListener("click", function(){
    updatePhoneNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function(){
    updatePhoneNumber("phone", 1219, false);
});