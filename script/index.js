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

const menuContainer = document.createElement('div'); // Create a container to hold the menu buttons
menuContainer.classList.add('menu-container');

menuLinks.forEach(link => { // Loop through each item in the menuLinks array
  const button = document.createElement('button'); // Create a button element for each item
  button.classList.add('menu-button');
  button.textContent = link.text;
  button.href = link.href;
  menuContainer.appendChild(button); // Append the button to the menu container
});

topMenuEl.appendChild(menuContainer); // Append the menu container to the menu bar