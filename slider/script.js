const slides=document.querySelectorAll('.slide')

for(const slide of slides){
    slide.onclick=()=>{
        delActiveSlides()
        slide.classList.toggle('active')
    }
}

function delActiveSlides(){
slides.forEach((slide)=>{
    slide.classList.remove('active')

})
}