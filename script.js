let menuVisible = false;
//FUNCION QUE OLCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto en el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}