///Select Items
let sliderImages = Array.from( document.querySelectorAll('.slider-container img'));

// get Number o fslides

let slidesCount = sliderImages.length;

// Set Current slide 

let currentSlide = 1;

//  Slide Number String Element 

let slideNumberElement = document.getElementById('slide-number');

// Slect next/  prev Btns
let nextBtn = document.getElementById('next');

let prevBtn = document.getElementById('prev');

//  Handle Click on next & prev Btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create the Main Ul Element 

let paginationElement = document.createElement('ul');

// Create List Items Based on sldes length
for(var i = 1; i <= slidesCount; i++){

    // Create The li 
    let  paginationItem = document.createElement('li');

    // Set Custom Attribute 
    paginationItem.setAttribute('data-index', i);

    // Set Item Content 
    paginationItem.appendChild(document.createTextNode(i));

    // Append items to the main Ul 
    paginationElement.appendChild(paginationItem);
}

// Add the created Ul Element to the page
document.getElementById('indicators').appendChild(paginationElement);

paginationElement.setAttribute('id', 'pagination-ul'); // ! Here I added the id attribute to the ul Element

let paginationCreatedUl = document.getElementById('pagination-ul');

// get Pagination items | Array.from as the beginning
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all Bullets items
for(var i = 0; i < paginationBullets.length; i++){

    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}

// Trigger The Checker Funtion
theChecker();

// Next Slide Func
function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false;
    } else{
        currentSlide++;

        theChecker();
    }
}

// Prev Slide Func
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false;
    } else{
        currentSlide--;

        theChecker();
    }
}
// create The Checker Func
function theChecker() {
    // Set the slide number
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`; //! The `` kind of things they can let the ${} works I dont know the driff
    
    //func that remove the active class that add some styles the element
    removeAllActive();
    //! we put it here becuase it always we reload the scripts it always delete the active class of the previous element (images || li)


    // Set Active Class On Current Slide
    sliderImages[currentSlide -1].classList.add('active');

    // Set Active Class on current pagination item
    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    //Check if current slide is the first (currentSlide = 1)
    /* if(currentSlide == 1){
        prevBtn.classList.add('disabled'); //!We can use this but the second way is easeier and fast
    } else {
        prevBtn.classList.remove('disabled');
    }*/

    currentSlide ==  1 ? prevBtn.classList.add('disabled') : prevBtn.classList.remove('disabled');

    // check if current slide is the last item
        // ? as I said we can use the first way but the second is easier and fast
        currentSlide ==  slidesCount ? nextBtn.classList.add('disabled') : nextBtn.classList.remove('disabled');
}

// Remove all active classes from images and pagination bullets
function removeAllActive(){

    //Loop through images
    sliderImages.forEach( img =>{
        img.classList.remove('active');
    });

    //Loop through bullets
    paginationBullets.forEach(bullets =>{
        bullets.classList.remove('active');
    });
}