function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    menuToggle.style.display = 'none';
    menuToggle.style.padding = '10px';
    menuToggle.style.backgroundColor = '#004080';
    menuToggle.style.color = 'white';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.textAlign = 'center';
    
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(menuToggle, nav);
    
    function toggleMenu() {
        const ul = nav.querySelector('ul');
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'flex';
        } else {
            ul.style.display = 'none';
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            nav.querySelector('ul').style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            nav.querySelector('ul').style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});