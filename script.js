// navbar
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').on("click touchend",function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        return false;
    });
});


// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
}


//------------javaScript--------------------------------
//подключение к текстовому полю
document.querySelector('#phone').onkeydown = function(e){
    inputphone(e,document.querySelector('#phone'))
    }
    document.querySelector('#phone2').onkeydown = function(e){
    inputphone(e,document.querySelector('#phone2'))
    }
    //-- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --
    
    
    //Функция маски формат +7 (
    function inputphone(e, phone){
    function stop(evt) {
        evt.preventDefault();
    }
    let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
    
    if(not == 1 || 'Backspace' === not){
    if('Backspace' != not){ 
        if(v.length < 3 || v ===''){phone.value= '+7('}
        if(v.length === 6){phone.value= v +')'}
        if(v.length === 10){phone.value= v +'-'}
        if(v.length === 13){phone.value= v +'-'}
    }
    } else{stop(e)}  }