// getting all the elements
let sum = 0;
const totalPrice = document.getElementById('totalPrice');
const total = document.getElementById('total');
const discount = document.getElementById('discount');
const makePurchase = document.getElementById('makePurchase');
const applyBtn = document.getElementById('applyBtn');
const couponField = document.getElementById('couponField');
const itemList = document.getElementById('itemList');
const itemOneName = document.getElementById('itemOneName');
const itemTwoName = document.getElementById('itemTwoName');
const itemThreeName = document.getElementById('itemThreeName');
const itemFourName = document.getElementById('itemFourName');
const itemFiveName = document.getElementById('itemFiveName');
const itemSixName = document.getElementById('itemSixName');


// reuseable function for getting price
function getProductPrice(priceId,item) {
    const newLi = document.createElement('li');
    newLi.innerText = item.innerText;
    itemList.appendChild(newLi);
    makePurchase.removeAttribute('disabled'); 
    const itemName = document.getElementById(priceId);
    const itemPrice = parseFloat(itemName.innerText);    
    return itemPrice;
}

// when item One is clicked
document.getElementById('itemOne').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemOnePrice',itemOneName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        console.log(typeof discount.innerText);
        total.innerText = (sum - parseFloat(discount.innerText)).toFixed(2);
    }
    return;
    })
    total.innerText = sum.toFixed(2);   
})

// when item Two is clicked
document.getElementById('itemTwo').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemTwoPrice',itemTwoName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = (sum - parseFloat(discount.innerText)).toFixed(2);       
    }
    return;
    })
    total.innerText = sum.toFixed(2);
})

// when item Three is clicked
document.getElementById('itemThree').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemThreePrice',itemThreeName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = (sum - parseFloat(discount.innerText)).toFixed(2);       
    }
    return;
    })
    total.innerText = sum.toFixed(2);
})

// when item Four is clicked
document.getElementById('itemFour').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemFourPrice',itemFourName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = (sum - parseFloat(discount.innerText)).toFixed(2);       
    }
    return;
    })
    total.innerText = sum.toFixed(2);
})

// when item Five is clicked
document.getElementById('itemFive').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemFivePrice',itemFiveName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = (sum - parseFloat(discount.innerText)).toFixed(2);       
    }
    return;
    })
    total.innerText = sum.toFixed(2);
})

// when item Six is clicked
document.getElementById('itemSix').addEventListener('click',function(){     
    const productPrice = getProductPrice('itemSixPrice',itemSixName);
    sum += productPrice;
    totalPrice.innerText = sum.toFixed(2);
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText).toFixed(2);       
    }
    return;
    })
    total.innerText = sum.toFixed(2);
})

// when modal opened
function goBack() {
    location.reload();
}