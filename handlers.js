function saveHandler(event){
    event.preventDefault();
    console.log('saveHandler');
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