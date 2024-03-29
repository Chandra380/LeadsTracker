let myLeads = []
let inputBtn = document.querySelector("#input-btn")
let deleteBtn = document.querySelector("#delete-btn")
let inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")
let tabBtn = document.querySelector("#tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}    

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) //.value will give whatever is inside input element
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear()
    ulEl.innerHTML = ""
})

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        // using string template
        listItems+=
        `<li>
            <a href = '${leads[i]}' target = '_blank'>${leads[i]}</a>
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