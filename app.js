let hamburgerClick = document.querySelector('.header-right > a')

let xClick = document.querySelector( '.hamburger-menu')

let closeClick = document.querySelector('.hamburger-menu .close' )

hamburgerClick.addEventListener('click',
    function() {
        xClick.classList.add('active')
    })

 closeClick.addEventListener('click',
    function(){
        xClick.classList.toggle('active')
    }


)    


 
    




