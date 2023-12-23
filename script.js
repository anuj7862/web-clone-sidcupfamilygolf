
let quote = document.querySelector(".quote");

//-----------------------------------cursor---------------------
let cursorEle = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursorBlur");
let cards = document.querySelectorAll(".card");

let cursorRadius = 10;
const cursorBlurRadius = 175;

document.addEventListener("mousemove", function(event) {
    cursorEle.style.left = event.x - cursorRadius + 'px';
    cursorEle.style.top = event.y - cursorRadius + 'px';
    // cursorBlur.style.left = event.x - cursorBlurRadius + 'px';
    // cursorBlur.style.top = event.y - cursorBlurRadius + 'px';

    cursorBlur.style.transform = `translate(${event.x - cursorBlurRadius}px, ${event.y - cursorBlurRadius}px)`;

    let x = -2*(window.innerWidth/2 - event.x)/window.innerWidth;
    let y = 10*(window.innerHeight/2 - event.y)/window.innerHeight;
    
    cards.forEach((ele) => {
        ele.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    quote.style.transform = `translate3d(${-10*x}px, ${4*y}px, 0)`;

    
});

//-----------------------------------cursor on hover--------------
var menuHover = document.querySelectorAll(".menuHover");
menuHover.forEach((ele) => {
    console.log(ele);
    ele.addEventListener('mouseover', () => {
        // Change the CSS for the targetDiv when the menuH1 is hovered
        cursorEle.style.backgroundColor = 'transparent';
        cursorEle.style.transition =  'all .3s linear';
        cursorEle.style.width = '80px';
        cursorEle.style.height = '80px';
        cursorRadius = 40;
        cursorEle.style.border = '2px solid #fff';
        ele.style.cursor = 'pointer';
        //ele.style.color = "#95c11e";

      });
      
      // Add a mouseout event listener to reset the CSS when the mouse leaves the menuH1
      ele.addEventListener('mouseout', () => {
        cursorEle.style.backgroundColor = '#95c11e'; // Reset to the default color
        cursorEle.style.transition =  'width 1s linear, height 1s linear, background-color 1s linear';
        cursorEle.style.width = '20px';
        cursorEle.style.height = '20px';
        cursorRadius = 10;
        cursorEle.style.border = 'none';
        //  ele.style.color = "#fff";
      });
})


//-----------------------------------image slider-----------

const images = ['https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1',
                'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1', 
                'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&ssl=1'];
let count = 0;
let imageSlider = document.querySelector("#sliderImg");
let imageDots = document.querySelectorAll(".imageDot");
let overlay = document.querySelector(".overlayCircle");

const sliderFunction = () => {
    overlay.style.opacity = 0;
    imageSlider.style.opacity = .3;
    
    count = (count+1)%images.length;
    //console.log(count);

    let lastOne = (count-1+images.length)%images.length;

    imageDots[count].appendChild(overlay);
    setTimeout(() => {
        imageSlider.src = images[count];
        imageSlider.style.opacity = 1;
        imageDots[count].style.backgroundColor = "#b1d550";
        imageDots[lastOne].style.backgroundColor = "#fff";
        overlay.style.opacity = 1;
        overlay.style.display = 'block';
        //overlay.style.zIndex = 2;
    },500);
}

setInterval(sliderFunction, 5000);

//------------------------------------quotes changer---------------

const quotesAll = ["DEFINITELY ONE OF THE BEST PLACES TO HIT SOME GOLF BALLS, THE TOPTRACER IN MOST OF THE BAYS IS A FANTASTIC ADDITION FOR THE PRICE! I’M YET TO TRY THE MINI GOLF BUT EVERYONE SEEMS TO BE HAVING FUN OVER THERE!",
                   "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",
                   "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close." ];

let qcount = 0;
let quotesSvg1 = document.querySelector("#quotesSvg1");
let quotesSvg2 = document.querySelector("#quotesSvg2");

const quoteChanger = () => {
    qcount = (qcount+1)%quotesAll.length;
    quotesSvg1.style.top = "80px";
    quotesSvg1.style.left = "80px";
    quotesSvg2.style.bottom = "80px";
    quotesSvg2.style.right = "80px";
    quote.style.opacity = 0;
    setTimeout(() =>{
        quote.innerHTML = quotesAll[qcount];
        quote.style.opacity = 1;
        quotesSvg1.style.top = "60px";
        quotesSvg1.style.left = "60px";
        quotesSvg2.style.bottom = "60px";
        quotesSvg2.style.right = "60px";
    }, 500);
}

setInterval(quoteChanger, 5000);
//---------------------------------------------------------
gsap.to(".nav", {
    backgroundColor: "#000",
    height: "95px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        scrub: 1
    }
})

gsap.to(".blackbackground", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".blackbackground",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -80%",
        scrub: 2,
    }
})


gsap.to("#quotesSvg1", {
    top: '60px',
    left: '60px',
    transition: 'all .5s linear',
    scrollTrigger: {
        trigger: "#quotesSvg1",
        scroller: "body",
        //markers: true,
        start: "top 90%",
        end: "top 85%",
        scrub: 3,
    }
})

gsap.to("#quotesSvg2", {
    bottom: '60px',
    right: '60px',
    transition: 'all .5s linear',
    scrollTrigger: {
        trigger: "#quotesSvg2",
        scroller: "body",
        //markers: true,
        start: "top 135%",
        end: "top 130%",
        scrub: 3,
    }
})

gsap.to("#backText", {
    top: "-70px",
    scrollTrigger: {
        trigger: "#backText",
        scroller: "body",
        //markers: true,
        start: "top 100%",
        end: "top 85%",
        scrub: 3,
    }
})