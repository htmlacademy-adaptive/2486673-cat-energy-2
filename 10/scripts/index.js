var a=document.querySelector(".main-navigation"),e=document.querySelector(".main-header__toggle");a.classList.remove("main-navigation--nojs");e.classList.remove("main-header__toggle--nojs");e.addEventListener("click",()=>{a.classList.contains("main-navigation--is-close")?(a.classList.remove("main-navigation--is-close"),a.classList.add("main-navigation--is-open"),e.classList.remove("main-header__toggle--open"),e.classList.add("main-header__toggle--close")):(a.classList.add("main-navigation--is-close"),a.classList.remove("main-navigation--is-open"),e.classList.add("main-header__toggle--open"),e.classList.remove("main-header__toggle--close"))});
