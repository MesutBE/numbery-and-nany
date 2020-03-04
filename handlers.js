function saveHandler(event){
    event.preventDefault();
    newInput = document.getElementById('user-form').textInput.value;


    // Find if new value is Number or NaN & save - update state: Numbery or NaNy

    // Create DOM elements

    // re-render the user interface with values stored in state

    // debugger;
    if (Number(newInput)){
        entries.numbery = newInput;

        let liEl = document.createElement('LI');
        liEl.innerText = newInput;

        let ulEl = document.createElement('UL');
        ulEl.id = 'listNumbery';
        ulEl.appendChild(liEl);

        let div = document.getElementById('results-Numbers');
        div.appendChild(ulEl);

        console.log(`${newInput}: number`);

        console.log(log);
    } else {
        entries.nany = newInput;

        let liEl = document.createElement('LI');
        liEl.innerText = newInput;

        let ulEl = document.createElement('UL');
        ulEl.id = 'listNaNy';
        ulEl.appendChild(liEl);

        let div = document.getElementById('results-NaNs');
        div.appendChild(ulEl);

        console.log(`${newInput}: NaN`);

        console.log(log);
    }
    

    // log interaction: handler name, new state
    log.push({
        handler: 'save',
        newInput,
        entries: JSON.parse(JSON.stringify(entries))
    })
    console.log(event.target);
}

function removeHandler(event) {
    event.preventDefault();
    console.log('removeHandler');
}

function resetHandler(event) {
    event.preventDefault();
    // reset state to initial values
    entries.numbery = initValues.numbery;
    entries.nany = initValues.nany;

    // log interaction: handler name, new state
    log.push({
        handler: 'reset',
        entries: JSON.parse(JSON.stringify(entries))
    })
}