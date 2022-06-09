const selectLocation = document.querySelector(".select-location-text");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal-window");
const btnCategories = document.querySelector(".all-categories");
const subCategories = document.querySelector(".dropdown-categories");

function modalWindowClassAddHandler() {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function modalWindowClassRemoveHandler() {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
}

function categoriesWindowRemoveHandler() {
  if (subCategories.classList.contains("categories-hidden")) {
    subCategories.classList.remove("categories-hidden");
  } else {
    subCategories.classList.add("categories-hidden");
  }
}

closeBtn.addEventListener("click", modalWindowClassRemoveHandler);
selectLocation.addEventListener("click", modalWindowClassAddHandler);
btnCategories.addEventListener("click", categoriesWindowRemoveHandler);

//categories

const plusBtn = document.querySelectorAll(".fa-plus");
const subMenu = document.querySelectorAll(".sub-menu");
const minusBtn = document.querySelectorAll(".bi-dash");
plusBtn.forEach((plus) => {
  function showProductCategoriesHandler() {
    const plusId = plus.getAttribute("data-id");

    subMenu.forEach((menu) => {
      const menuId = menu.getAttribute("data-id");

      if (menuId == plusId) {
        styleAndClasslist(menu, "hidden-categories", "remove", plus, "none");

        minusBtn.forEach((minus) => {
          const minusId = minus.getAttribute("data-id");
          if (minusId == plusId) {
            styleAndClasslist(minus, "hidden", "remove");
          }

          function minusHiddenHandler() {
            if (minusId == menuId) {
              styleAndClasslist(minus, "hidden", "add", plus, "block");
              styleAndClasslist(menu, "hidden-categories", "add");
            }
          }

          minus.addEventListener("click", minusHiddenHandler);
        });
      }
    });
  }

  plus.addEventListener("click", showProductCategoriesHandler);
});

const styleAndClasslist = (
  item,
  className,
  propClasslist,
  displayItem,
  display
) => {
  if (displayItem !== undefined || display !== undefined) {
    displayItem.style.display = display;
  }

  if (propClasslist === "add") {
    item.classList.add(className);
  } else if (propClasslist === "remove") {
    item.classList.remove(className);
  }
};


//goods number ////////////////////



const goods = document.querySelectorAll('.goods-product')
const numbers = document.querySelectorAll('.numbers')
const leftArrow = document.querySelector('.bi-arrow-left')

goods.forEach(product =>{

 const productId =  product.getAttribute('data-id');
 

 numbers.forEach(number =>{
   const numberId = number.getAttribute('data-id')

 


   function jumpByNumbers(){

    numberId == 1 ?  leftArrow.style.display='none' : leftArrow.style.display='block'
    
 

    if(!product.classList.contains('hidden-goods')){
     
      styleAndClasslist(product,'hidden-goods','add');

    }

numbers.forEach(num=>{
  if(num.classList.contains('number-background')){
   
    styleAndClasslist(num,'number-background','remove');
  }
})

 

    if(productId == numberId){
    
      styleAndClasslist(product,'hidden-goods','remove');
    }
   
   
   
    styleAndClasslist(number,'number-background','add');
   


  }

  



   number.addEventListener('click',jumpByNumbers);
 })


})


//-------------------FILTER-------------------------------------//

// const filterInput = document.querySelector('.form-range')
// console.log(filterInput.value);