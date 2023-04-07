const btn = document.querySelector(".btn");
const textArea = document.querySelector("#text-input");
const divToDo = document.querySelector("#issuesToDo");


function addingIssue (){
    if (textArea.value ===""){
        alert("Please enter any text");
    }
    else{
        let createPar = document.createElement("div");
        createPar.innerHTML = "<p>" + textArea.value+ "</p>";
        divToDo.before(createPar);
    }
}

btn.addEventListener("click",  addingIssue);



// dodanie  btn w zadania do zrealizowania z napisaem zrealizowane, ktory usuwa zadaenie
// pojawianie sie btn dopiero kiedy pojawi sie pierwsze zadanie
// usuwanie btn kiedy na liscie nie ma zadan do zrealizowania
// dodanie kratki przy kazdym zadaniu aby mozna je bylo oznaczyc i usunac