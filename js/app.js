let mainLi = document.querySelectorAll('.nav > ul > li');

// console.log(mainLi);

mainLi.forEach(function(li) {
    li.addEventListener('mouseover',function(e){
        let subMenu = this.querySelector('ul');
        subMenu != null&& (subMenu.style.display = 'block');
    })
})

mainLi.forEach(function(li) {
    li.addEventListener('mouseout',function(e){
        let subMenu = this.querySelector('ul');
        subMenu != null&& (subMenu.style.display = 'none');
    })
})