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
