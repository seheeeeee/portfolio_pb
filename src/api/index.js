//HomeView Fetch
function fetchAbout() {
    const about = {
        title: 'publisher',
        routerLink: '/about',
        imgURL: ['titleImageExample01.png', 'titleImageExample02.png', 'titleImageExample03.png']
    }
    return about;
}
function fetchProject() {
    const project = {
        title: 'project',
        routerLink: '/project',
        imgURL: ['titleImageExample01.png', 'titleImageExample02.png', 'titleImageExample03.png']
    }
    return project;
}
function fetchContact() {
    const contact = {
        title: 'contact',
        routerLink: '/contact',
        imgURL: ['titleImageExample01.png', 'titleImageExample02.png', 'titleImageExample03.png']
    }
    return contact;
}

function pageHeight(wrap){
    var viewHeight = window.innerHeight;
    return wrap.style.height = viewHeight + 'px';
}

export {
    fetchAbout,
    fetchProject,
    fetchContact,
    pageHeight
}