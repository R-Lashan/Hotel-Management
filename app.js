const buyNoodleBtn = document.querySelector('.btn-buy-noodle');
const buyStakeBtn = document.querySelector('.btn-buy-stake');
const cartNoodleBtn = document.querySelector('.btn-noodle');
const cartStakeBtn = document.querySelector('.btn-cart-stake');
const purchaseBtn = document.querySelector('.btn-purchase');
const cart = document.querySelector('.cart');
const deleteBtn = document.querySelector('.btn-delete')
const SelectedItem = document.querySelector('.Selected-item');
const number = document.querySelector('.number');
const text5 = document.querySelector('.head');
const total = document.querySelector('.number4');
const btn_total = document.querySelector('.btn-add');
const noodle_text = document.querySelector('.food-noodle');
const stake_text = document.querySelector('.food-stake');
const item_selected = document.querySelector('.h4');

purchaseBtn.addEventListener('click', function(){
    if(total.innerHTML == 0){
        alert("You have not purchased items");
    } else {
        alert("You have purchased " + number_div + " items");
    }
})

let number_div2 = 0;
let number_div = 0;
let num1 = 300.00;
let num2 = 340.00;

cartNoodleBtn.addEventListener('click', AddCart)
cartStakeBtn.addEventListener('click', AddCart2)

buyNoodleBtn.addEventListener('click', function(){
    alert("You Purchased Noodles");
})

buyStakeBtn.addEventListener('click', function(){
    alert("You Purchased Stake");
})

function AddCart(){

    var element = document.createElement('button');
    element.innerHTML= "Noodles" + " Rs.300.00 ";
    
    element.classList.toggle('cart-item');
    cart.appendChild(element);

    number_div++;
    number.innerHTML = number_div;

    const quantity = document.createElement('i');
    quantity.innerHTML = '<i class="icon1"><</i> <span class="number2">0</span> <i class="icon2">></i>'
    element.appendChild(quantity)

    var  icon1 = document.querySelector('.icon1');
    var  icon2 = document.querySelector('.icon2');

    btn_total.addEventListener('click', function(){
        let find_price = num1 * number_div2;
        total.innerHTML = find_price;
    })

    
 icon1.addEventListener('click', function(){
        number_div2--;
        document.querySelector('.number2').innerHTML = number_div2;
    })

    icon2.addEventListener('click', function(){
        number_div2++;
        document.querySelector('.number2').innerHTML = number_div2;
    })

 

    deleteBtn.addEventListener('click', function(){
        element.remove();
        number_div = 0;
        number.innerHTML = number_div;
    })
}
      
function AddCart2(){

    function french(){
        element.innerHTML= "Pieu" + " Rs.300.00 "; 
    }

    var element = document.createElement('div');
    element.innerHTML= "Stake" + " Rs.343.00 ";
    
    element.classList.toggle('cart-item');
    cart.appendChild(element);

    number_div++;
    number.innerHTML = number_div;


    const quantity = document.createElement('i');
    quantity.innerHTML = '<i class="icon1"><</i> <span class="number2">0</span> <i class="icon2">></i>'
    element.appendChild(quantity)

    var  icon1 = document.querySelector('.icon1');
    var  icon2 = document.querySelector('.icon2');

    btn_total.addEventListener('click', function(){
        let find_price = num1 * number_div2 + num2 * number_div;
        total.innerHTML = find_price;
    })
    
    icon1.addEventListener('click', function(){
        number_div2--;
        document.querySelector('.number2').innerHTML = number_div2;
    })

    icon2.addEventListener('click', function(){
        number_div2++;
        document.querySelector('.number2').innerHTML = number_div2;
    })
    deleteBtn.addEventListener('click', function(){
        element.remove();
        number_div = 0;
        number.innerHTML = number_div;
    })

}