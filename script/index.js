// menuLinks
  //{ href: '#', text: 'Home' },
  //{ href: '#', text: 'About' },
  //{ href: '#', text: 'Services' },
  //{ href: '#', text: 'Contact' }


//Part 1: Setting up main element
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Part 2: Creating Menu Bar
const topMenuEl = document.createElement('nav');
topMenuEl.id = 'top-menu';
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
document.body.appendChild(topMenuEl); // Append the menu bar to the body element

// Part 3: Adding Menu Buttons
const menuLinks = [
  { text: 'Home', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Services', href: '#', subLinks: [
    { text: 'SubService1', href: '#' },
    { text: 'SubService2', href: '#' },
    { text: 'SubService3', href: '#' }
  ]},
  { text: 'Contact', href: '#' }
];

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const topMenuLinks = []; // Array to store top menu links

menuLinks.forEach(link => {
  const button = document.createElement('button');
  button.classList.add('menu-button');
  button.textContent = link.text;
  button.dataset.href = link.href; // Using dataset to store href
  menuContainer.appendChild(button);
  topMenuLinks.push(button); // Push each button into topMenuLinks array

  // If the link has subLinks, add a dataset attribute to store them
  if (link.subLinks) {
    button.dataset.subLinks = JSON.stringify(link.subLinks); // Store subLinks as JSON string
  }
});

topMenuEl.appendChild(menuContainer);

//Part 4: Adding Menu Interaction
// Event listener for top menu clicks
topMenuEl.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    // Remove 'active' class from all menu items
    topMenuLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Toggle 'active' class for the clicked menu item
    target.classList.toggle('active');
// Toggle submenu display
if (!target.classList.contains('active')) {
  if (target.dataset.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(JSON.parse(target.dataset.subLinks)); // Parse JSON string to get subLinks
  } else {
    subMenuEl.style.top = '0';
  }
}
}
});
