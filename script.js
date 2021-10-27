/* Funções do script */
function mudarModo(){
    mudaClass();
    mudaTextos();
}

function mudaClass(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function mudaTextos(){
    const buttonDark = "Ativar Modo Light";
    const buttonLight = "Ativar Modo Dark";
    const h1Dark = "Página em Modo Dark";
    const h1Light = "Página em Modo Light"; 

    if (body.classList.contains('dark-mode')){
        button.innerHTML = buttonDark;
        h1.innerHTML = h1Dark;  
    }
    else{
        button.innerHTML = buttonLight;
        h1.innerHTML = h1Light  ;
    }    

}

/* identificando elementos da página*/
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

/*adicionar um evento para o botão */
button.addEventListener('click', mudarModo);

