function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello LeBonPOC';
    return element;
}


document.body.appendChild(component());
