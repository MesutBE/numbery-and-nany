function saveHandler(event){
    event.preventDefault();
    newInput = document.getElementById('user-form').textInput.value;

    // Find if new value is Number or NaN & save - update state: Numbery or NaNy

    // Create DOM elements

    // re-render the user interface with values stored in state
    
    if (Number(newInput)){
        // debugger;
        if(entries.numbery.includes(newInput)){
            alert(`Try another\n${newInput} exists in the list!`)
            return;
        }

        entries.numbery.push(newInput);

        let liEl = document.createElement('LI');
        liEl.innerText = newInput;
        
        if (document.getElementById('listNumbery') === null) {
            let ulEl = document.createElement('UL');
            ulEl.id = 'listNumbery';
            ulEl.appendChild(liEl);

            let div = document.getElementById('results-Numbers');
            div.appendChild(ulEl);
        } else {
            let ulEl = document.getElementById('listNumbery');
            ulEl.appendChild(liEl);

            let div = document.getElementById('results-Numbers');
            div.appendChild(ulEl);
        }
        
        // console.log(`${newInput}: number`);

        // console.log(log);
    } else {

        if (entries.nany.includes(newInput)) {
            alert(`Try another\n${newInput} exists in the list!`)
            return;
        }

        entries.nany.push(newInput);

        let liEl = document.createElement('LI');
        liEl.innerText = newInput;

        if (document.getElementById('listNaNy') === null) {
            let ulEl = document.createElement('UL');
            ulEl.id = 'listNaNy';
            ulEl.appendChild(liEl);

            let div = document.getElementById('results-NaNs');
            div.appendChild(ulEl);
        } else {
            let ulEl = document.getElementById('listNaNy');
            ulEl.appendChild(liEl);

            let div = document.getElementById('results-NaNs');
            div.appendChild(ulEl);
        }
    }
    // log interaction: handler name, new state
    log.push({
        handler: 'save',
        newInput,
        entries: JSON.parse(JSON.stringify(entries))
    })
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

    if (document.getElementById('listNumbery') === null) {

    } else {
        let ulEl = document.getElementById('listNumbery');
        let parentUlEl = ulEl.parentNode;
        
        parentUlEl.removeChild(ulEl);
    }

    if (document.getElementById('listNaNy') === null) {

    } else {
        let ulEl = document.getElementById('listNaNy');
        let parentUlEl = ulEl.parentNode;

        parentUlEl.removeChild(ulEl);
    }

    // log interaction: handler name, new state
    log.push({
        handler: 'reset',
        entries: JSON.parse(JSON.stringify(entries))
    })
}