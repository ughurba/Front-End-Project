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

const goods = document.querySelectorAll(".goods-product");
const numbers = document.querySelectorAll(".numbers");
const leftArrow = document.querySelector(".bi-arrow-left");

goods.forEach((product) => {
  const productId = product.getAttribute("data-id");

  numbers.forEach((number) => {
    const numberId = number.getAttribute("data-id");

    function jumpByNumbers() {
      numberId == 1
        ? (leftArrow.style.display = "none")
        : (leftArrow.style.display = "block");

      if (!product.classList.contains("hidden-goods")) {
        styleAndClasslist(product, "hidden-goods", "add");
      }

      numbers.forEach((num) => {
        if (num.classList.contains("number-background")) {
          styleAndClasslist(num, "number-background", "remove");
        }
      });

      if (productId == numberId) {
        styleAndClasslist(product, "hidden-goods", "remove");
      }

      styleAndClasslist(number, "number-background", "add");
    }

    number.addEventListener("click", jumpByNumbers);
  });
});

//-------------------basket-------------------------------------//



const btnAddtoCard = document.querySelectorAll(".button-goods");
const totalBasket = document.querySelector('.price-count-basket');
const countBasket = document.querySelector('.count-basket')


if (localStorage.getItem("basket") !== null) {
  sizeBasket();
  totalGoods();
}




function addingItemToCartHandler(ev) {
  ev.preventDefault();

  if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }



  let productId = this.parentElement.parentElement.getAttribute("data-id");
  let goodsList = JSON.parse(localStorage.getItem("basket"));

 
  if (!renderBasketCount(productId)) {

    goodsList.push({
      id: productId,
      img: this.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.getAttribute(
        "src"
      ),
      title:
        this.parentElement.parentElement.firstElementChild.nextElementSibling
          .firstElementChild.textContent,
      price:
        this.parentElement.parentElement.lastElementChild.previousElementSibling
          .lastElementChild.firstElementChild.textContent,
      count: 1,
    });

     localStorage.setItem("basket", JSON.stringify(goodsList));
     sizeBasket();
     totalGoods();

  }


}



function renderBasketCount(productId) {

  let goodsList = JSON.parse(localStorage.getItem("basket"));

  let existProduct = goodsList.find((p) => p.id == productId);

  
  if(existProduct !== undefined){

    existProduct.count++;
     localStorage.setItem("basket", JSON.stringify(goodsList));
     totalGoods();
    return true;

  }


}

function sizeBasket() {
  let goodsList = JSON.parse(localStorage.getItem("basket"));
  countBasket.textContent = goodsList.length
}


function totalGoods(){
  let sum = 0;
  let goodsList = JSON.parse(localStorage.getItem("basket"));
  goodsList.forEach(product =>{
    
    sum += product.price * product.count;
  })

  totalBasket.textContent ='$'+ sum
  
}




btnAddtoCard.forEach((btn) => {
  btn.addEventListener("click", addingItemToCartHandler);
});








// 6. removeFromBasket(id) - localestaregeden arrayi goturur parse eliyir, gelen id-ni silir. yeniden local stargeye qoyur (addin icinde islenen funksiyalar burda da isleyir)

// 7. renderBasketGoods(goods from localStorage) - localstoragedeki arrayi goturur parse edir. ordaki id-lere uygun goods arrayinden mallari alir render edir
