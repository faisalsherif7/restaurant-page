
const pageLoad =  function() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const heading = document.createElement('p');
    heading.innerHTML = '<button>Home</button>';
    header.appendChild(heading);

    const menu = document.createElement('p');
    menu.innerHTML = '<button>Menu</button>';
    menu.classList.add('menu-nav');
    header.appendChild(menu);

    const contact = document.createElement('p');
    contact.innerHTML = '<button>Contact</button>';
    contact.classList.add('contact-nav');
    header.appendChild(contact);

    const divContent = document.createElement('div');
    divContent.classList.add('content')
    divContent.classList.add('homepage-background')
    content.appendChild(divContent);

    const text = document.createElement('div');
    text.classList.add('text');
    divContent.appendChild(text);

    const p = document.createElement('p');
    p.textContent = "Welcome to Medina Bites, your gateway to Middle Eastern delights in the heart of NY. Immerse yourself in the rich flavors of our cuisine, a perfect fusion of traditional recipes and contemporary tastes. From succulent kebabs to delightful baklava, each dish at Medina Bites brings the authentic spirit of the Middle East to your table. Join us at Medina Bites, where the allure of Arabic cuisine meets the warmth of our hospitality."
    text.appendChild(p);
};

function menu() {
    
}

function contact() {
}

export { pageLoad, menu, contact }