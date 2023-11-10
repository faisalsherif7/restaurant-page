function pageLoad() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const heading = document.createElement('h1');
    heading.textContent = 'Healthy restaurant';
    header.appendChild(heading);

    const divContent = document.createElement('div');
    divContent.classList.add('content')
    content.appendChild(divContent);

    const text = document.createElement('div');
    text.classList.add('text');
    divContent.appendChild(text);

    const p = document.createElement('p');
    p.textContent = "Excellent healthy food!"
    text.appendChild(p);

    console.log('yeah');
}

export { pageLoad }