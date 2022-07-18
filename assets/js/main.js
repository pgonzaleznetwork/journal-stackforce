let burger = document.querySelector('.gh-burger');
burger.addEventListener('click',() => {

    if(document.body.classList.contains("is-head-open")){
        console.log('removing class')
        document.body.classList.remove("is-head-open")
    }
    else{
        console.log('adding class')
        document.body.classList.add("is-head-open");
    }     
})