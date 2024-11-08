// test chat-GPT

// Déclaration de la fonction principale qui accepte des fonctions de callback en paramètres
const maFonction = (callback) => {
  console.log("Appel de maFonction");
  callback("Ceci est un message pour le callback");
};

// Appel de maFonction avec une fonction de callback comme argument
maFonction((message) => {
  console.log("Callback exécuté avec message :", message);
});






// test henrique
const myFunc0 = (fonctionRecue)=>{
  console.log("hello");
  fonctionRecue("there")
}

const autreFonction0 = (mot)=> {
  console.log(mot)
}

myFunc(autreFonction)






// exemple Henrique
const autreFonction = (mot)=> {
  console.log(mot)
}

const myFunc = ()=>{
  console.log("salut");
  autreFonction("hello")
}

myFunc()