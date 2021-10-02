/*ramener les elements du dom */
let labelUsername = document.querySelector('[data-label-utilisateur]')
let inputUsername = document.querySelector('[data-input-utilisateur]')

let labelMdp = document.querySelector('[data-label-mdp]')
let inputMdp = document.querySelector('[data-input-mdp]')

let error1 = document.querySelector(' [data-text-error1]')
let error2 = document.querySelector(' [data-text-error2]')
let error = document.querySelector(' [data-text-error]')

let elBouton= document.querySelector(' [data-js-button]')

/*verification user name*/

inputUsername.addEventListener('keyup', function () {
    if (inputUsername.value.length === 0) {

        labelUsername.classList.add('error')
        inputUsername.classList.add('error')
        error1.classList.remove('hidden')

    } else {
        labelUsername.classList.remove('error')
        inputUsername.classList.remove('error')
        error1.classList.add('hidden')
    }
})


/*
verification du mdp
*/

inputMdp.addEventListener('keyup', function () {
    if (inputMdp.value.length === 0) {

        labelMdp.classList.add('error')
        inputMdp.classList.add('error')
        error.classList.remove('hidden')

    } else {
        labelMdp.classList.remove('error')
        inputMdp.classList.remove('error')
        error.classList.add('hidden')
    }
})

/*
fonction regex securite mdp */

let fonctionRegex = function(password) {

    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
    return regex.test(password);
/*return vrai ou fau */
}


inputMdp.addEventListener('keyup', function () {

    let mdpvalue = inputMdp.value;

    let resultat =  fonctionRegex(mdpvalue)
    console.log(resultat)

    if ( resultat=== false ){
        labelMdp.classList.add('error')
        inputMdp.classList.add('error')
        error2.classList.remove('hidden')

    } else {
        labelMdp.classList.remove('error')
        inputMdp.classList.remove('error')
        error2.classList.add('hidden')
    }



})


elBouton.addEventListener('click',function (e){

    e.preventDefault()

    let validationUsername= inputUsername.value.length > 0;

    let validationPassword= inputMdp.value.length >8
    && inputMdp.value.length<16
    &&  fonctionRegex(inputMdp.value);

    if (validationUsername && validationPassword){

        document.form.submit();
    }






    }



)
