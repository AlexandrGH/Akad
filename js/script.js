document.querySelector('.burger').onclick = function(){
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.burger-menu').classList.toggle('active')
    document.body.classList.toggle('lock')
}

const sideMenu = document.querySelector('.portfolio__menu')
if (sideMenu) {
    sideMenu.addEventListener('click', function (params) {
        if (params.target.nodeName == 'LI') {
            for (let index = 0; index < sideMenu.childElementCount; index++) {
                const element = sideMenu.children[index];
                element.classList.remove('active')
            }
            params.target.classList.add('active')
        }
    })
}