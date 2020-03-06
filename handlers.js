function saveHandler(event){
    event.preventDefault();
    newInput = document.getElementById('user-form').textInput.value;
    // debugger;

    // Find if new value is Number or NaN & save - update state: Numbery or NaNy

    // Create DOM elements

    // re-render the user interface with values stored in state
    
    if (!isNaN(newInput)){
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
    let removed = [];
    newInput = document.getElementById('user-form').textInput.value;
    console.log(newInput);
    console.log(typeof newInput);
    debugger;

    if (!isNaN(newInput)) {
        let indexOfnewInput = '';
        if (entries.numbery.includes(newInput)) {
            indexOfnewInput = entries.numbery.indexOf(newInput);
            removed = entries.numbery.splice(indexOfnewInput,1);
        }
        let ulEl = document.getElementById('listNumbery');
        ulEl.removeChild(ulEl.childNodes[indexOfnewInput]);

    } else {
        let indexOfnewInput = '';
        if (entries.nany.includes(newInput)) {
            indexOfnewInput = entries.nany.indexOf(newInput);
            removed = entries.nany.splice(indexOfnewInput, 1);
        }
        let ulEl = document.getElementById('listNaNy');
        ulEl.removeChild(ulEl.childNodes[indexOfnewInput]);
    }

    // log interaction: handler name, new state
    log.push({
        handler: 'reset',
        entries: JSON.parse(JSON.stringify(entries)),
        removed: JSON.parse(JSON.stringify(removed))
    })
    console.log('removeHandler');
}

function resetHandler(event) {
    event.preventDefault();
    // reset state to initial values
    entries.numbery = initValues.numbery;
    entries.nany = initValues.nany;

    if (document.getElementById('listNumbery') === null) {
        // it is already empty nothing to do...
    } else {
        let ulEl = document.getElementById('listNumbery');
        let parentUlEl = ulEl.parentNode;
        
        parentUlEl.removeChild(ulEl);
    }

    if (document.getElementById('listNaNy') === null) {
        // it is already empty nothing to do...
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