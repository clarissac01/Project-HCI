
document.querySelector('form').onsubmit=validate


function validateNumber(string){
    var i;
    for(i=0;i<string.length;i++){
        if(string.charCodeAt(i)<48||string.charCodeAt(i)>57)return false;
    }
    return true;
}
function validate(e){
    e.preventDefault();
    let id = document.getElementById('id-input').value
    let color = document.getElementById('color-input').value
    let qty = document.getElementById('qty-input').value
    let name = document.getElementById('name-input').value
    let phone = document.getElementById('phone-input').value
    let address = document.getElementById('address-input').value
    let message=document.getElementById('purchase-message')


    if(id=="Select"){
        message.innerHTML = "You must select a product"
    }
    else if(color=="Select"){
        message.innerHTML = "Color must be selected"
    }
    else if(qty<=0){
        message.innerHTML = "Quantity must be more than 0"
    }
    else if (name.length < 3 || name.length == 0){
        message.innerHTML = "Your name must be longer than 3 characters"
    }
    else if (!validateNumber(phone)){
        message.innerHTML = "Phone number must be filled with numbers only"
    }
    else if(phone.length < 8){
        message.innerHTML = "Phone number length must be at least 8"
    }
    else if (address.length <= 0){
        message.innerHTML = "Address must be filled"
    }
    else{
        message.innerHTML = "Purchase Succesful"
    }

}