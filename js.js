/*menu icone*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*scrol heder */
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});


/*slider 1*/
var counter= 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked =true;
    counter++;
    if(counter > 4){
        counter =1;
    }
},5000);

/* star rat*/
document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll("i");

        stars.forEach((star, index) => {
            star.addEventListener("click", function () {
                const value = parseInt(this.getAttribute("data-value"));

                // نزيل الكلاس من كل النجوم
                stars.forEach(s => s.classList.remove("active"));

                // نضيف الكلاس للنجوم حسب التقييم
                for (let i = 0; i < value; i++) {
                    stars[i].classList.add("active");
                }
            });
        });
    });
});

/*timer*/
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// نحدد التاريخ بعد 25 يوم من الآن
const now = new Date();
const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 70,
    0, 0, 0
).getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    // لو الوقت خلص، نوقف العداد
    if (distance <= 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / (1000 )) %60);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

setInterval(timer, 1000);


/* slider user*/
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

/* search*/
const searchInput = document.querySelector('.search input');
const searchContainer = document.querySelector('.search');

searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('active');
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchContainer.classList.remove('active');
    }
});


const wrapper = document.querySelector(".wrapper");
const loginForm = document.querySelector(".from-box.login");
const registerForm = document.querySelector(".from-box.register");
const selectTypeForm = document.querySelector(".from-box.select-type");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const iconClose = document.querySelector(".icon-close");
const btnPopup = document.querySelector(".btnLogin-popup");
const buyerBtn = document.getElementById("buyer-btn");
const sellerBtn = document.getElementById("seller-btn");

// فتح النافذة المنبثقة عند الضغط على Login
btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
    selectTypeForm.style.display = "block";
    loginForm.style.display = "none";
    registerForm.style.display = "none";
});

// زر إغلاق النافذة
iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    selectTypeForm.style.display = "block"; // يرجع تاني لاختيار المستخدم
    loginForm.style.display = "none";
    registerForm.style.display = "none";
});

// لما أضغط مشتري
buyerBtn.addEventListener("click", () => {
    selectTypeForm.style.display = "none";
    loginForm.style.display = "block";
});

// لما أضغط بائع
sellerBtn.addEventListener("click", () => {
    selectTypeForm.style.display = "none";
    alert("سيتم إضافة نموذج تسجيل الدخول للبائع لاحقًا.");
});

// من login لـ register
registerLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// من register لـ login
loginLink.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    wrapper.classList.remove("active");
});











