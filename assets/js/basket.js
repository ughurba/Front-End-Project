
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
     let closeBtn = document.createElement('i');
            
     minus.classList.add('bi','bi-dash');
     plus.classList.add('fa-solid','fa-plus');

    
    

     closeBtn.style.position = 'absolute'
     closeBtn.style.right = '0px'
     closeBtn.style.top = '24px'
     closeBtn.style.cursor = 'pointer'
     closeBtn.setAttribute('data-id', `${element.id}`)
     
     closeBtn.classList.add('fa-solid','fa-xmark')

    styleCalc(minus);
    styleCalc(plus);

    plus.style.marginLeft ='10px'
    minus.style.marginRight ='10px'
    
    
    



    img.src = element.img;
    img.style.width='70px'
    p.textContent = element.title;
    spanPrice.textContent = element.price;   
    spanCount.textContent = element.count;
    spanCount.style.padding='5px'
    tdQuantity.insertAdjacentElement('afterbegin', spanCount)
    tdQuantity.insertAdjacentElement('beforeend', plus)
    element.total = sum(element.price,element.count);
    spanTotal.textContent ='$'+ element.total;
        
    tdImg.append(img);
    tdTitle.append(p);
    tdPrice.append(spanPrice);
    tdPrice.style.paddingLeft = '30px'
    tdQuantity.insertAdjacentElement('afterbegin',minus);
    tdQuantity.style.paddingLeft='18px'
    tdSubTotal.append(spanTotal)
    tdSubTotal.style.paddingLeft = '30px'
    tr.style.paddingTop = '150px' ;
    tr.append(tdImg,tdTitle,tdPrice,tdQuantity,tdSubTotal,closeBtn)
    tr.style.borderBottom = '1px solid #dee2e6'
    tr.style.position = 'relative'
    tBody.append(tr)

    

    minus.addEventListener('click',function(){
            let num =0;
            element.count--;
            num = element.count

            spanCount.textContent = num
           
          
            element.total = descendingTotal(element.price , element.total).toFixed(2)
            
            localStorage.setItem('basket', JSON.stringify(goodsList))
            totalGoods();
            spanTotal.textContent ='$' + element.total

    
            if(element.count === 0){
              
                removeElementInBasket(element.id)
                this.parentElement.parentElement.remove();
                location.reload();
             }

    });



    plus.addEventListener('click',function(){
        let num =0;
            element.count++;
            num = element.count
            spanCount.textContent = num
            element.total = increasingNumber(element.price , element.total).toFixed(2)
            localStorage.setItem('basket', JSON.stringify(goodsList))
            totalGoods();
            spanTotal.textContent ='$' + element.total

    }) 


    
    localStorage.setItem('basket', JSON.stringify(goodsList))
     
    

   
                                             
          
    closeBtn.addEventListener('click',removeElementHandler)
 


    });
    
}




function removeElementInBasket(id){

    let newArr = goodsList.filter(product => product.id !== id)
    
    localStorage.setItem('basket', JSON.stringify(newArr))
    goodsList =  JSON.parse(localStorage.getItem('basket'))
}


function removeElementHandler() {

    let idBtn = this.getAttribute('data-id')
    let newArr = goodsList.filter(product => product.id !== idBtn)
    
    localStorage.setItem('basket', JSON.stringify(newArr))
    goodsList =  JSON.parse(localStorage.getItem('basket'))
    this.parentElement.remove()
    location.reload();
}



function sum(price,count){
    let result = 0;
       result += price * count
     return result; 
}

const descendingTotal = (price,total) => total - price;
    



const increasingNumber = (price,total) => Number(total) + Number(price);



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