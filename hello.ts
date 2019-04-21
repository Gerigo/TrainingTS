let message : string = "Hello World";

if(false){
    message = "never happen"
}
console.log(message);


class Contact{

    nom : string; 
    prenom : string; 
    age : number; 
}

var tableau : Contact[] = [];

var Gui : Contact = {nom: 'Rigaux', prenom:'Guillaume', age:26};
var Lo : Contact = {nom: 'Rossi', prenom:'Loris', age:22};
var Vic : Contact = {nom: 'Pastorani', prenom:'Victor', age:23};

tableau.push(Gui,Lo,Vic); 
console.log(tableau);