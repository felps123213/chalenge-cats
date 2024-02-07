const $catImage1 = document.querySelector('.cat-1') 
const $catImage2 = document.querySelector('.cat-2')
const $catImage3 = document.querySelector('.cat-3')

const $mainImage = document.querySelector('.main-image-box')

function setMainImage1 () {
    $mainImage.innerHTML = '<img src="images/cat1.jpg" class="main-image">'
}

function setMainImage2 () {
    $mainImage.innerHTML = '<img src="images/cat2.jpg" class="main-image">'
}

function setMainImage3 () {
    $mainImage.innerHTML = '<img src="images/cat3.jpg" class="main-image">'
}




$catImage1.addEventListener('click' , setMainImage1)
$catImage2.addEventListener('click' , setMainImage2)
$catImage3.addEventListener('click' , setMainImage3)