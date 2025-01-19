const carts = document.querySelectorAll(".cart");
const cartToggle = document.querySelector(".cartToggle");
const cartContent = document.querySelectorAll(".cartContent");
const quantityAdded = document.querySelectorAll(".quantityAdded");
const totalCost = document.querySelectorAll(".totalCost");
const deleteCart = document.querySelectorAll(".deleteCart");

deleteCart.forEach(trash => {
    trash.addEventListener("click", e => {
        currentQuantity = 0;
        updateQuantity(0);
        showCorrectCart(0);
    })
})

function updateQuantity(qt) {
    quantityAdded.forEach(el => el.textContent = currentQuantity);
    totalCost.forEach(el => el.textContent = ` ${currentQuantity * 125}.00`);
}

function showCorrectCart(qt) {
    if (qt === 0) {
        cartContent.forEach(cart => {
            Array.from(cart.children).forEach(el => {
                el.removeAttribute("data-active");
            });
            
            cart.querySelector("p").setAttribute("data-active", "");
        });
    }
    else {
        cartContent.forEach(cart => {
            Array.from(cart.children).forEach(el => {
                el.removeAttribute("data-active");
            });
            updateQuantity(currentQuantity);
            cart.querySelector("div").setAttribute("data-active", "");
            cart.querySelector("button").setAttribute("data-active", "");
        })
    }
}

cartToggle.addEventListener("click", e => {
    if (!e.target.hasAttribute("[aria-label=Cart]") && !(e.target.tagName === "IMG" && e.target.alt === "Cart" )) {
        return;
    }
    carts.forEach(cart => {
        if (cart.dataset.expanded !== undefined) {
            cart.removeAttribute("data-expanded");
        }
        else {
            cart.setAttribute("data-expanded", "");
            showCorrectCart(currentQuantity);
        }
    })
})

let currentQuantity = 0;

document.querySelector(".Minus").addEventListener("click", e=> {
    let currValue = Number(document.querySelector(".currentQuantityToAdd").textContent);
    let nextValue = Math.max(0, currValue - 1);
    document.querySelector(".currentQuantityToAdd").textContent = nextValue;
});

document.querySelector(".Plus").addEventListener("click", e=> {
    let currValue = Number(document.querySelector(".currentQuantityToAdd").textContent);
    let nextValue = currValue + 1;
    document.querySelector(".currentQuantityToAdd").textContent = nextValue;
});

document.querySelector(".addToCart").addEventListener("click", e => {
    let toAdd = Number(document.querySelector(".currentQuantityToAdd").textContent);
    currentQuantity += toAdd;
    document.querySelector(".currentQuantityToAdd").textContent = 0;
    showCorrectCart(currentQuantity);
    updateQuantity(currentQuantity);
})