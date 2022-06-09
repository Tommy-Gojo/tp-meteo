//         #################
//         ### selection ###
//         #################      


let btn = document.querySelector('button')
let leTemps = document.getElementById('leTemps')
let nomVille = document.getElementById('nomVille')
let icon = document.getElementById('icon')
let input= document.querySelector('input')
let description = document.getElementById('desc')
let iconImg =  document.getElementById('icon')

//          ###############
//          # debut style #
//          ###############




btn.addEventListener("mouseover", function(){
    setTimeout(() => {
        btn.style.backgroundColor = "black"
        
    }, 100);
})
btn.addEventListener("mouseleave", function(){
    
    setTimeout(() => {
        btn.style.backgroundColor = "rgb(2, 13, 51)"
    }, 100);
})

//        ###############
//        ## fin style ##
//        ###############






function inte (){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&lang=fr&appid=ddeffd0fc8c5f73c0d57f09e18a361b3`;
    fetch (url).then(reponse =>{
        if(!reponse.ok){
            throw new error ('ca marche pas le frr')
        }else{
            return reponse.json()
        }
    })
    .then(data =>{
        changeName(data)
        console.log(data)
    })
}
/**
 * Fonction qui permet de changer le nom
 * de la ville 
 * @param {String} dataVille 
 */
function changeName(data){
    if(!input.value){ //si la valeur de l'input est vide,

        // tu affiches ça  |
        //                 v
        alert('veuillez entrer une valeur') 

    }else{ // sinon

        // tu affiches le nom de la ville qui est dans l'input
        nomVille.textContent = input.value; 

        // ensuite une seconde fois le nom de la vie avec la température qu'il fait
        leTemps.textContent = "A "+input.value+" il fait "+data.main.temp+"c°"

        // ainsi que la description du temps
        description.textContent = "Le ciel est "+data.weather[0].description +" avec une pression de "+data.main.pressure +" hPa."

        icon.createElement('img')
    }
}


btn.addEventListener("click", function(){
    inte ()
})
