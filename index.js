let myLeads = []
let inputBtn = document.querySelector("#input-btn")
let inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) //.value will give whatever is inside input element
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // using string template
        listItems+=
        `<li>
            <a href = '${myLeads[i]}' target = '_blank'>${myLeads[i]}</a>
        </li>`
        // create element
        // set text content
        // append to ul
        // alternate method
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
    inputEl.value = ""
}