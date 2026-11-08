   let autoincrementId = 1;
   const countryList = document.querySelector("#countryList");
   const input = document.querySelector("#textBox");
    const countryMap = new Map();

    function updateListStyle(){
        countryList.classList.toggle("has-items", countryMap.size > 0);
    }
document.querySelector("#addButton").addEventListener("click",() =>{
    const newCountry = document.querySelector("#textBox").value.trim();
    const normalizedCountry = newCountry.toLowerCase();

    if(countryMap.has(normalizedCountry)){
        alert("Country already exists in the list!");
        return;
    }

    if(newCountry.length === 0){
        alert("Please enter a country name.");
        return;
    }
    
        countryMap.set(normalizedCountry, newCountry);
        const listItem = document.createElement("li");
        
               
        listItem.innerText = `${autoincrementId} - ${newCountry}`;
        countryList.append(listItem);
        document.querySelector("#textBox").value = "";
        autoincrementId ++;    
    updateListStyle();
})

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.querySelector("#addButton").click();
    }
})

document.querySelector("#clear").addEventListener("click", () => {
    countryList.innerHTML = "";
    countryMap.clear();
    autoincrementId = 1;
    updateListStyle();
})

