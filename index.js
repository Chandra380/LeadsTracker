let myLeads = []
let inputBtn = document.querySelector("#input-btn")
let inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) //.value will give whatever is inside input element
})

for(let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"
}