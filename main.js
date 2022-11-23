let $form = document.querySelector("#form");
let $list = document.querySelector('#list')
let $select=document.querySelector('#menu');
let $box=document.querySelector('.box');
let $container=document.querySelector('.container')
let userArray = [
   
]
$form.addEventListener("submit", (evt)=> {
    evt.preventDefault()
    let value;
    $select.onchange=(e)=>{
        value=$select.options[$select.selectedIndex].text;
    }
    let radio;
    let $radio=document.querySelector('.size input:checked');
        let item=$radio.value;
    let { user_name, user_phone, user_email } = evt.target.elements 
    let output= []
    let checkboxes= document.querySelectorAll('input.check__input:checked');
            checkboxes.forEach((checkbox) => {
                output.push(checkbox.value);
            });
    let another= [];
        let down= document.querySelectorAll('input.check__input__add:checked');
                down.forEach((indown) => {
                    another.push(indown.value);
    });
    let totalPrice=0;
    if($select.value==='thin'||$select.value==='None'){
        totalPrice+=10;
    }else if($select.value==='Medium'){
        totalPrice+=12;
    }else if($select.value==='Thick'){
        totalPrice+=15;
    }
    
        if(item==='25sm'){
            totalPrice+=10;
        }else if(item==='30sm'){
            totalPrice+=12;
        }else if(item==='35sm'){
            totalPrice+=15;
        }
        totalPrice+=output.length*5;
        totalPrice+=another.length*3;
    const newObj = {
            id: userArray.length + 1,
            name: user_name.value.trim(),
            phone: user_phone.value.trim(),
            email: user_email.value.trim(),
            type:$select.value,
            product:output,
            other:another,
            radio:item,
            all:totalPrice,
    }
    userArray.push(newObj)
    console.log(userArray);
    renderFunction(userArray, $list)
    $box.style.display='none';
    $container.classList.add('center');
    $list.style.display='block';
})



var renderFunction = (array , element)=>{
    element.innerHTML = '';
    for(let i =0; i <array.length; i++ ){
        element.innerHTML += `
            ${element.innerHTML=''}
            <li>
            <p class='order'>Order:${array[i].id}</p>
            <p class='text'><span class='bold'>Name: </span>${array[i].name}</p>
            <p class='text'><span class='bold'>Phone: </span>] ${array[i].phone}</p>
            <p class='text end'><span class='bold'>Email: </span> ${array[i].email}</p>
            <p class='text'><span class='bold'>Dough thickness:</span>${array[i].type}</p>
            <p class='text'><span class='bold'>Size: </span>${array[i].radio}</p>
            <span class='text'><span class='bold'>On Pizza: </span>${array[i].product}</span>
            <br>
            <span class='text'><span class='bold'>Add:</span>${array[i].other}</span>
            <p class="total">Total:${array[i].all}</p>
            </li>
            
        `
    }
}

renderFunction(userArray, $list)