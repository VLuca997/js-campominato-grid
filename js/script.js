/*
    - Creo una grglia con una funzione
    - Creo un ciclo per generare le celle della griglia da 1 a 100
    - aggiungiamo l'evento click ai div per colorare la cella selezionata
    - stampiamo un messaggio in console con le celle cliccate.








*/

// seleziono il container
const containerElements = document.querySelector('.my-grid-container');

// funzione per generare la griglia
function generateGrid(){
    const numbElement = 100;   // costante per determinare quante celle devono esserci

    containerElements.innerHTML = ''; // svuoto il container della griglia

    //ciclo fot per  generare gli element
    for (let i = 1; i <= numbElement; i++){
        const newElement = document.createElement('div'); // creiamo un nuovo elemento
        newElement.classList.add('element'); //aggiungiamo la classe element al div
        newElement.textContent = i; // ci permette di dare il numero all'inteno dell'elemento
        newElement.addEventListener('click', function(){
            this.classList.toggle('active'); // tramite questa function e questa classe possiamo atribuire ".active" alle classi cliccate ('click')
            console.log(this.textContent); // stampiamo in console l'elemento cliccato
            // printAll(); 
        })
        containerElements.append(newElement); // appendiamo ai div gli element per formare la griglia
        
        if (i % 10 === 0){
            containerElements.append(document.createElement('br')); // andiamo a capo dopo 10 elementi stampati appendendo la classe  br
        }
    }
}
// stampiamo in console con la function printAll();
// function printAll(){
//     console.log(Math.random());
// }