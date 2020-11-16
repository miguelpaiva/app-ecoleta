function populateUFs() {
    const ufSelect = document.querySelector('select[name=uf]');
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then( res => res.json() ) // arrow function pra valores minimos (res) => { return res.json() }
        .then( states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`;
            }             
        } )
}   

populateUFs();

function getCities(event) {
     const citySelect = document.querySelector('select[name=city]');
     const ufValue = event.target.value;

     const stateInput = document.querySelector('input[name=state]');     
     const indexOfSelectedState = event.target.selectedIndex;
     stateInput.value = event.target.options[indexOfSelectedState].text;

     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` ;

     citySelect.innerHTML = "";
     citySelect.disabled = true;

     fetch(url)
     .then(res => res.json())
     .then( cities => {
         citySelect.innerHTML = '<option value="">Selecione a Cidade</option>';
         
         for (const city of cities) {
             citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`;
         }
         citySelect.disabled = false;
     })   
}

document
    .querySelector("select[name=uf]")
    .addEventListener( "change", getCities );



// Itens de coleta, pega todos os li's

const collectedItems = document.querySelector("input[name=items]"); 

let selectedItems = [];

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItems);
}

function handleSelectedItems(event) {
    const itemLi = event.target;
    // add ou remove uma classe usando JS
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    //ver se existem items selecionados, se sim, pegar os itens selecionados
    
    const alreadySelected = selectedItems.findIndex( item => item == itemId );  

    //se estiver selecionado
    if (alreadySelected >= 0) {
        //tirar da selecao
        const filteredItems = selectedItems.filter( item => item != itemId )
        selectedItems = filteredItems;

    } else { //se nao estiver selecionado, adicionar a selecao
         selectedItems.push(itemId);
    }
    
    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems;
}