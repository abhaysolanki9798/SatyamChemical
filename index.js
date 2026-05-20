// JavaScript for toggling the sidebar menu

    function toggleSidebar() {
      const navContainer = document.querySelector('.nav-container');
      const menuIcon = document.querySelector('.material-icons');
      const overlay = document.querySelector('.sidebar-overlay');
      
      // Toggles open state classes
      navContainer.classList.toggle('active');
      overlay.classList.toggle('active');
      
      // Swaps the visual icon type cleanly
      if (navContainer.classList.contains('active')) {
        menuIcon.textContent = 'close';
      } else {
        menuIcon.textContent = 'menu';
      }
    }
//javascript for toggling the sidebar menu end  