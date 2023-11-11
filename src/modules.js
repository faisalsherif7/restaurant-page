const content = document.querySelector('#content');

function pageLoad() {
    
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const heading = document.createElement('h1');
    heading.textContent = 'Healthy restaurant';
    header.appendChild(heading);

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    header.appendChild(tabs);

    const menu = document.createElement('p');
    menu.innerHTML = 'Menu';
    menu.classList.add('menu-nav');
    tabs.appendChild(menu);

    const contact = document.createElement('p');
    contact.textContent = 'Contact';
    contact.classList.add('contact-nav');
    tabs.appendChild(contact);

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

function menu() {
    content.textContent = 'THIS IS THE MENU'
}

function contact() {
    content.textContent = 'contacts !'
}

export { pageLoad, menu, contact }