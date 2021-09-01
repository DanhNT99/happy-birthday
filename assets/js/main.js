const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const heartNode = $('.person-heart')
heartNode.onclick = () => {
    const creamCake = $('.letters-img')
    $('.help').style.display = "none"
    creamCake.classList.add('letters-img-show')
    creamCake.addEventListener('transitionend', () => {
        $('.letters-content').classList.add("letters-content-show")
    });
}
