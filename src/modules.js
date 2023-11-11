
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

    const menu = document.createElement('button');
    menu.innerHTML = 'Menu';
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
    text.className = 'text homepage-text';
    divContent.appendChild(text);

    const p = document.createElement('p');
    p.innerHTML = `
    <p>Welcome to Medina Bites, an exquisite haven in the heart of Cityville where Middle Eastern flavors come alive on your plate. Immerse yourself in the tantalizing fusion of traditional recipes and contemporary tastes that define our culinary journey. From the savory delight of our Shawarma Platter to the sweet perfection of our Baklava Delight, each dish at Medina Bites is crafted to bring the authentic spirit of the Middle East to your table.</p>

    <p>Indulge in our famed Hummus Platter, a creamy blend of chickpeas, tahini, and garlic served with warm pita bread, or savor the crispiness of our Falafel Wrap, a handheld treat bursting with falafel goodness. Explore the refreshing notes of our Moroccan Couscous Salad or dive into the heartiness of the Chicken Shawarma Bowl—a perfect marriage of marinated chicken, seasoned rice, and grilled vegetables.</p>
    
    <p>Journey through our menu, where the Vegetarian Moussaka takes center stage, a layered casserole of eggplant, zucchini, and potatoes, topped with a rich tomato and lentil filling. And don't forget to complement your Middle Eastern feast with our refreshing Mint Lemonade, a delightful drink to accompany the vibrant flavors on your plate.</p>
    
    <p>At Medina Bites, we invite you to experience the allure of Arabic cuisine in every bite, where each dish is a celebration of warmth, tradition, and culinary excellence. Join us, and let the warmth of our hospitality elevate your Middle Eastern dining adventure.</p>
    `
    text.appendChild(p);
}

function menu() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content menu-background';
    divContent.textContent = '';

    divContent.innerHTML = `
    <div class="text menu-text">

        <div class="card">
            <h1>Shawarma Platter</h1>
            <p class="price">$12.99</p>
            <p class="description">Savor the taste of thinly sliced, marinated meat (chicken or beef) grilled to perfection. Served with fragrant rice, fresh vegetables, and tahini sauce.</p>
        </div>

        <div class="card">
            <h1>Mezze Sampler</h1>
            <p class="price">$14.99</p>
            <p class="description">Indulge in a delightful assortment of Middle Eastern appetizers, including hummus, baba ganoush, falafel, and stuffed grape leaves. Perfect for sharing!</p>
        </div>

        <div class="card">
            <h1>Lamb Kofta Skewers</h1>
            <p class="price">$15.99</p>
            <p class="description">Juicy minced lamb, seasoned with aromatic spices, skewered and grilled to perfection. Served with couscous and a zesty mint yogurt sauce.</p>
        </div>

        <div class="card">
            <h1>Hummus Platter</h1>
            <p class="price">$9.99</p>
            <p class="description">Dive into our creamy and flavorful hummus, made from chickpeas, tahini, and a touch of garlic. Served with a drizzle of olive oil, a sprinkle of paprika, and warm pita bread for dipping.</p>
        </div>

        <div class="card">
            <h1>Baklava Delight</h1>
            <p class="price">$7.99</p>
            <p class="description">A sweet finale to your meal! Layers of flaky phyllo dough, chopped nuts, and sweet honey, baked to golden perfection. A classic Middle Eastern dessert.</p>
        </div>

        <div class="card">
            <h1>Falafel Wrap</h1>
            <p class="price">$10.99</p>
            <p class="description">Crispy falafel balls wrapped in warm pita bread, accompanied by fresh veggies and tahini sauce. A delightful handheld treat!</p>
        </div>

        <div class="card">
            <h1>Moroccan Couscous Salad</h1>
            <p class="price">$11.99</p>
            <p class="description">A refreshing salad featuring fluffy couscous, mixed with colorful bell peppers, cherry tomatoes, cucumbers, and a zesty lemon vinaigrette.</p>
        </div>

        <div class="card">
            <h1>Chicken Shawarma Bowl</h1>
            <p class="price">$13.99</p>
            <p class="description">Tender slices of marinated chicken, served over a bed of seasoned rice, accompanied by grilled vegetables and topped with garlic sauce.</p>
        </div>

        <div class="card">
            <h1>Vegetarian Moussaka</h1>
            <p class="price">$12.99</p>
            <p class="description">A layered casserole of eggplant, zucchini, and potatoes, topped with a rich tomato and lentil filling. Baked to perfection and served with a side of tzatziki.</p>
        </div>

    </div>
    `
}

function contact() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content contact-background';
    divContent.textContent = '';
    
    const contactText = document.createElement('div');
    contactText.className = 'text contact-text';
    divContent.appendChild(contactText);

    const contactHeader = document.createElement('h1');
    contactHeader.className = 'contact-header';
    contactHeader.textContent = 'Contact Us';
    contactText.appendChild(contactHeader);

    const contactContent = document.createElement('div');
    contactContent.innerHTML = `
    <div class="contact-div address">
        <h1 class="contact-bold">Address</h1>
        <p>123 Main Street, Cityville, Country</p>
    </div>

    <div class="contact-div phone">
        <h1 class="contact-bold">Phone</h1>
        <p>(+123) 456-7890</p>
    </div>

    <div class="contact-div email">
        <h1 class="contact-bold">Email</h1>
        <p><a href="">info@medinabites.com</a></p>
    </div>

    <div class="contact-div opening-hours">
        <h1 class="contact-bold">Opening Hours</h1>
        <p>Monday to Saturday: 10:00 AM - 10:00 PM</p>
        <p>Sunday: 12:00 PM - 8:00 PM</p>
    </div>
    `;

    contactText.appendChild(contactContent);

}

export { pageLoad, menu, contact, home }