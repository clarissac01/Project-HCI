
document.querySelector('form').onsubmit=validate

function validate(e){
    e.preventDefault();
    let id = document.getElementById('id-input').value
    let color = document.getElementById('color-input').value
    let qty = document.getElementById('qty-input').value
    let name = document.getElementById('name-input').value
    let phone = document.getElementById('phone-input').value
    let address = document.getElementById('address-input').value
    let message=document.getElementById('purchase-message')


    if(id<1||id>10){
        message.innerHTML = "Id must be between 1 - 10"
    }
    else if(color.value=="Select"){
        message.innerHTML = "Color must be selected"
    }
    else if(qty<=0){
        message.innerHTML = "Quantity must be more than 0"
    }
    else if (name.length < 3 || name.length == 0){
        message.innerHTML = "Your name must be longer than 3 characters"
    }
    else if (isNaN(phone) ){
        message.innerHTML = "Phone number must be filled with numbers only"
    }
    else if(phone.length < 8){
        message.innerHTML = "Phone number length must be at least 8"
    }
    else if (address.length == 0){
        message.innerHTML = "Address must be filled"
    }
    else if(password.length < 8 || password.length == 0   ){
        message.innerHTML = "Password must be longer than 7 characters"
    }
    else{
        message.innerHTML = "Purchase Succesful"
    }

}