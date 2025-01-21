import "./cart.js";

const forms = document.querySelectorAll("form");
forms.forEach(form => {
    if (form.method === "dialog") return;
    form.addEventListener("submit",e => e.preventDefault())
});

document.querySelector(".lightboxToggle").addEventListener("click",e=>{
    document.querySelector("dialog").showModal();
});


const indexes = {"first": 1, "second": 2, "third": 3, "fourth": 4,};
const images = [document.querySelector(".lightbox"), document.querySelector(".lightboxToggle"), document.querySelector(".productImage")];
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");

function switchChecked(number) {
    document.querySelectorAll("input:checked").forEach(el => el.checked = false);
    let indexInWord = Object.entries(indexes).filter((itm) => itm[1] === number)[0][0];
    let parents = document.querySelectorAll(`[data-position=${indexInWord}]`);
    parents.forEach(parent => parent.querySelector("input").checked = true);
}

prevButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        let selected = images[0].src[Array.from(images[0].src).findLastIndex(ch => !!Number(ch))];
        let newIndex = (Number(selected) - 1) % 4 || 4;
        let newUrl = `./images/image-product-${newIndex}.jpg`;
        images.forEach(img => img.src = newUrl);
        switchChecked(newIndex);
    });
})

nextButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        let selected = images[0].src[Array.from(images[0].src).findLastIndex(ch => !!Number(ch))];
        let newIndex = (Number(selected) + 1) % 4 || 4;
        let newUrl = `./images/image-product-${newIndex}.jpg`;
        images.forEach(img => img.src = newUrl);
        switchChecked(newIndex);
    })
})

document.addEventListener("click", e => {
    if (e.target.tagName === "INPUT") {
        let selected = indexes[e.target.closest("div").dataset.position];
        let newUrl = `./images/image-product-${selected}.jpg`;
        images.forEach(img => img.src = newUrl);
        switchChecked(selected);
    }
})