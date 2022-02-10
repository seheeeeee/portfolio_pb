//HomeView Fetch
function fetchAbout() {
    const about = {
        title: 'publisher',
        routerLink: '/about',
        imgURL: ['home_01_02.jpg', 'home_01_03.jpg', 'home_01_01.jpg']
    }
    return about;
}
function fetchProject() {
    const project = {
        title: 'project',
        routerLink: '/project',
        imgURL: ['home_02_03.jpg', 'home_02_02.jpg', 'home_02_01.jpg']
    }
    return project;
}
function fetchContact() {
    const contact = {
        title: 'contact',
        routerLink: '/contact',
        imgURL: ['home_03_03.jpg', 'home_03_02.jpg', 'home_03_01.jpg']
    }
    return contact;
}

function pageHeight(wrap){
    var viewHeight = window.innerHeight;
    return wrap.style.height = viewHeight + 'px';
}

function Slider(pages){
    // page btn 추가시,
    // pagination = page btn, html에 ul.pagination 추가 필요
    // Slider(pages, pagination) 추가 필요

    let slides = [],
        // btns = [],
        count = 0,
        current = 0,
        touchstart = 0,
        animation_state = false;

    const init = () => {
        slides = pages.children;
        count = slides.length;
        for(let i = 0; i < count; i++) {
        slides[i].style.bottom = -(i * 100) + '%';
        // let btn = document.createElement('li');
        // btn.dataset.slide = i;
        // btn.addEventListener('click', btnClick)
        // btns.push(btn);
        // pagination.appendChild(btn);
        }
        // btns[0].classList.add('active');
    }

    const gotoNum = (index) => {
        if((index != current) && !animation_state) {
            animation_state = true;
            setTimeout(() => animation_state = false, 500);
            // btns[current].classList.remove('active');
            slides[current].classList.remove('on');
            current = index;
            // btns[current].classList.add('active');
            slides[current].classList.add('on');          
            for(let i = 0; i < count; i++) {
                slides[i].style.bottom = (current - i) * 100 + '%';
            }
        }
    }

    const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
    // const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
    pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
    pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
    pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

    init();
}

export {
    fetchAbout,
    fetchProject,
    fetchContact,
    pageHeight,
    Slider,
}