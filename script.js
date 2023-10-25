//SCRIPT

var content = document.querySelector('#content')
var search = document.querySelector('#search')
var search_input = document.querySelector('textarea')
//search bar
search.addEventListener('click',function(event){
    if (search_input.style.width != '100px'){
        search.style.transitionDuration = '0.5s'
        search.style.transform = 'rotate(315deg)'
        search_input.style.visibility = 'initial'
        search_input.style.width = '100px'
    }else{
        search.style.transitionDuration = '0.5s'
        search.style.transform = 'rotate(-405deg)'
        search_input.style.visibility = 'hidden'
        search_input.style.width = '0px'
    }
})