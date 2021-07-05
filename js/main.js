const API_KEY = 'yHJtjID6pjld0jHQ7sMG44dWQixOOLmS';


// ETAPE 2 : créer un array qui stockera toute les URL des mêmes afin d'avoir un historique

init();

function init() {
    // ETAPE 2 Faire un appelle à retrieve Historique
}


function getRandomGif() {
    // ETAPE 1 :
    // Faire une méthode ici, qui appelle une requête de type GET sur "https://api.giphy.com/v1/gifs/random?api_key="+API_KEY+"&tag=&rating=g"
    // Astuce : utilise XMLHttpRequest.

    // Cette route API de Giphy (un site de GIF animé), renvoie un même, tu peux la tester dans postman (bien sur modifie la concaténation "+API_KEY+" par l'api key en ligne 1
}

function reqListener() {
    // ETAPE 1

    // cette méthode est le listener de ton XMLHttpRequest du deçu, c'est à dire qu'a la réponse de la requête, cette méthode doit être exécutée. (c'est un paramètre de XMLHttpRequest)

    const response = JSON.parse(this.responseText); // Par convention, la réponse est dans this.responseText. Il faut le parser en un objet, c'est à dire changer son typage de text à un object JS (du json)

    // Il faut maintenant afficher l'image qu'on a reçu de la requête. Utilise document.getElement pour récupérer la balise image, est modifie l'attribut SRC pour lui mettre l'URL adéquate
    // On pourra prendre par exemple celle ci : response.data.images.preview_webp.url


    // ETAPE 2
    // Push l'url de l'image dans notre tableau créé précédemment
    // Ajouter ce tableau dans localStorage (informe toi du local Storage) à la clé de ton choix. Attention, le localstorage accepte que des chaines de caractères, or un tableau est un objet JS / JSON (il faudra donc utiliser un stringify (ça marche comme le parse, mais dans l'autre sens)

    // Il faut ajouter le même reçu a la liste de l'historique !
    // il faut donc récupérer l'objet de la liste "historique" (c-a-d notre <UL>).
    // Il faut donc créer un nouveau <LI> (regarde createElement)
    // Il faut donc créer une nouvelle <img>  qui a un src égale à l'url de l'image reçu
    // il faut ajouter notre img donc notre <li> créé (regarde appendChild)
    // Il faut ajouter notre <lI> à notre <ul> récupéré
}

function retrieveHistorique() {
    //ETAPE 2

    // Cette méthode est appelé à chaque  chargement de page. (donc dans le init)
    // Et récupère la list des images en mémoire dans le localStorage

    // Récupére du localStorage, avec la clé que t'avais choisi, la valeur.
    // Malheureusement, cette valeur est un string (c'est le localStorage...) il faut donc le retransformer en un objet exploitable (ici une liste de string). Utilise JSON.parse !

    // Récup notre <ul> "historique"

    // Puis on va afficher tout les même de cette liste:
    // Pour tout les même de la liste (astuce: regarde le for (let --- of -----) qui est pas mal ! )
    // ----> On créer une balise <img> avec le src qui équivaut du coup au même que l'on parcours dans la boucle
    // ----> on créer un li
    // ---> On attache notre img en enfant de notre <li>
    // ----> Puis notre li en enfant de notre <ul>


}
