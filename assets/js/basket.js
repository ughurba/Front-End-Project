
//----------------------BASKET----------------------//

let goodsList = JSON.parse(localStorage.getItem('basket'))
const tBody = document.querySelector('.tbody')

createElement();




function createElement(){
    goodsList.forEach(element => {
           
    
     let tr = document.createElement('tr');
     let img = document.createElement('img');
     let p = document.createElement('p');
     let spanPrice = document.createElement('span');
     let spanCount = document.createElement('span');
     let spanTotal = document.createElement('span');
     let tdImg = document.createElement('td');
     let tdTitle = document.createElement('td');
     let tdPrice = document.createElement('td');
     let tdQuantity = document.createElement('td');
     let tdSubTotal = document.createElement('td');
     let minus = document.createElement('i');
     let plus = document.createElement('i');

     minus.classList.add('bi','bi-dash');
     plus.classList.add('fa-solid','fa-plus');

   
    styleCalc(minus);
    styleCalc(plus);

    plus.style.marginLeft ='10px'
    minus.style.marginRight ='10px'
        
    img.src = element.img;
    img.style.width='70px'
    p.textContent = element.title;
    spanPrice.textContent = element.price;   
    spanCount.textContent = element.count;
    spanCount.insertAdjacentElement('beforeend', plus)
    spanCount.insertAdjacentElement('afterbegin', minus)
      
    spanTotal.textContent ='$'+sum();

    tdImg.append(img);
    tdTitle.append(p);
    tdPrice.append(spanPrice);
    tdPrice.style.paddingLeft = '30px'
    tdQuantity.append(spanCount);
    tdQuantity.style.paddingLeft='18px'
    tdSubTotal.append(spanTotal)
    tdSubTotal.style.paddingLeft = '30px'
    tr.style.paddingTop = '150px' ;
    tr.append(tdImg,tdTitle,tdPrice,tdQuantity,tdSubTotal)
    tr.style.borderBottom = '1px solid #dee2e6'
    
    tBody.append(tr)

    minus.addEventListener('click',)

    });
}

function sum(){
    let sum = 0;

    goodsList.forEach(product =>{
       sum += Number(product.price);
      })
    
     return sum; 
}

function styleCalc(item){
    item.style.marginRight ='10px'
    item.style.cursor='pointer'
    item.style.background = '#edeef5'
    item.style.display='inline-flex'
    item.style.width='30px'
    item.style.height='30px'
    item.style.alignItems='center'
    item.style.justifyContent = 'center'
    item.style.borderRadius = '20px'
    item.style.fontSize ='13px'
}