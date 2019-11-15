'use strict'
import './Footer.less'
import './Menu.less'
import $ from 'jquery'
import htmlMenu from './Menu.html'
import htmlFooter from './Footer.html'

(function(){

    $('body').prepend(htmlMenu)
    $('script').before(htmlFooter)

})()

// The menu action on clicking it

const change = (changed, class1, class2) => {
    let toChange = document.querySelector(changed)

    if (toChange.classList.contains(class1)) {
        toChange.classList.remove(class1)
        toChange.classList.add(class2)
    }
    else {
        toChange.classList.remove(class2)
        toChange.classList.add(class1)
    }
}

let toggler = document.querySelector('.toggler')

toggler.addEventListener('click', () => change('#main-menu', 'toggled', 'toggled-change'))