// const imgs = document.querySelectorAll('.header-slider ul img')
// const prev_btn = document.querySelector('.control_prev');
// const next_btn = document.querySelector('.control_next'); 

// let n = 1;

// function changeSlide(){
//     for(let i=0;i<imgs.length;i++){
//         imgs[i].style.display = 'none';

//     }
//     imgs[n].style.display = 'block';
// }
// changeSlide();
// prev_btn.addEventListener('click',(e)=>{
//     if(n>0){
//         n--;
//     }
//     else{
//         n= imgs.length -1;
//     }
// })

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next'); 

let n = 0; // Current slide index

function changeSlide() {
    // Hide all images
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // Show the current image
    imgs[n].style.display = 'block';
}

// Initialize the slider by displaying the first slide
changeSlide();

// Event listener for the previous button
prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1; // Loop back to the last image
    }
    changeSlide(); // Update slide display
});

// Event listener for the next button
next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0; // Loop back to the first image
    }
    changeSlide(); // Update slide display
});
