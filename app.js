const header = document.querySelector(".header");
const slide = document.querySelectorAll(".main__content--slider__slide");
const main = document.querySelector(".main");
const slider = document.querySelectorAll(".main__content--slider");
const control = document.querySelectorAll(".main__content--slider__control--item");
header.addEventListener("click", ()=>{
	header.classList.toggle("active");
})
let hero_bgs = [
    './images/goi-cuon-bg.jpg',
    './images/pho-ga-bg.jpg',
    './images/bun-bo-bg.jpg'
]
function removeAct(){
	slide.forEach((e)=>{
		e.classList.remove("active");
	
	})
}
control.forEach((e)=>{
	
	e.addEventListener("click", (a)=>{
		
		let current = a.currentTarget.dataset.id;
		for(let i = 0; i< slide.length;i++){
			if(current === slide[i].getAttribute("data-id") ){
				main.style.backgroundImage = `url(${hero_bgs[i]})`
				slide[i].classList.add("open");
			}
			else{
				slide[i].classList.remove("open");
			}
		}
	})

})