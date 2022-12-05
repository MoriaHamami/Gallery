'use strict'

function submitForm(){
    const $elMail = $('.email')
    const $elSubj = $('.subject')
    const $elMsg = $('.msg')
    const body = $elMsg.val() + '. Contact me at: ' + $elMail.val() 

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=moriahamami@gmail.com&su=${$elSubj.val()}&body=${body}`)

    $elMail.val('')
    $elMsg.val('')
    $elSubj.val('')
}