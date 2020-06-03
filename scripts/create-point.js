
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

     fetch(url)
     .then(res => res.json())
     .then( cities => {
         citySelect.innerHTML = '<option value="">Selecione a Cidade</option>';
         
         for (const city of cities) {
             citySelect.innerHTML += `<option value="${city.id}"> ${city.nome} </option>`;
         }
         citySelect.disabled = false;
     })   
}

function zerarCities() {
    const citySelect = document.querySelector('select[name=city]');
    citySelect.options.length = 0;
}

document
    .querySelector("select[name=uf]")
    .addEventListener( "change", getCities );

document
    .querySelector("select[name=uf]")
    .addEventListener( "change", zerarCities );




