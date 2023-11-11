
const pageLoad =  function() {
    const content = document.querySelector('#content');
    content.textContent = '';
    
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.className = 'home-nav';
    header.appendChild(home);

    const menu = document.createElement('p');
    menu.innerHTML = '<button>Menu</button>';
    menu.classList.add('menu-nav');
    header.appendChild(menu);

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact';
    contact.classList.add('contact-nav');
    header.appendChild(contact);

    const divContent = document.createElement('div');
    divContent.className = 'content';
    content.appendChild(divContent);
};

function home() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content homepage-background';
    divContent.textContent = '';

    const text = document.createElement('div');
    text.classList.add('text');
    divContent.appendChild(text);

    const p = document.createElement('p');
    p.textContent = "Welcome to Medina Bites, your gateway to Middle Eastern delights in the heart of NY. Immerse yourself in the rich flavors of our cuisine, a perfect fusion of traditional recipes and contemporary tastes. From succulent kebabs to delightful baklava, each dish at Medina Bites brings the authentic spirit of the Middle East to your table. Join us at Medina Bites, where the allure of Arabic cuisine meets the warmth of our hospitality."
    text.appendChild(p);
}

function menu() {
    const divContent = document.querySelector('.content');
}

function contact() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content contact-background';
}

export { pageLoad, menu, contact, home }