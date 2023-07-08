/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    ////////////////////////////////////////////////////////////////////////////////
    // Trigged
    ///////////////////////////////////////////////////////////////////////////////

    var animateOnScrollElementsExp = document.querySelectorAll(".img-exp");

    function isElementInView(element) {
      var elementTop = element.getBoundingClientRect().top;
      var elementBottom = element.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
  
      return (elementTop < windowHeight && elementBottom >= 0);
    }
  
    function animateOnScrollExp() {
      animateOnScrollElementsExp.forEach(function(element) {
        if (isElementInView(element)) {
          element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
          }
      });
    }
  
    window.addEventListener("scroll", animateOnScrollExp);



    /// Icon

    var animateOnScrollElementsIcon = document.querySelectorAll(".img-icon");

    function isElementInView(element) {
      var elementTop = element.getBoundingClientRect().top;
      var elementBottom = element.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
  
      return (elementTop < windowHeight && elementBottom >= 0);
    }
  
    function animateOnScrollIcon() {
      animateOnScrollElementsIcon.forEach(function(element) {
        if (isElementInView(element)) {
          element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
          }
      });
    }
  
    window.addEventListener("scroll", animateOnScrollIcon);


    /// Content

    var animateOnScrollElementsContent = document.querySelectorAll(".flex-grow-1");

    function isElementInView(element) {
      var elementTop = element.getBoundingClientRect().top;
      var elementBottom = element.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
  
      return (elementTop < windowHeight && elementBottom >= 0);
    }
  
    function animateOnScrollContent() {
        animateOnScrollElementsContent.forEach(function(element) {
        if (isElementInView(element)) {
          element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
          }
      });
    }
  
    window.addEventListener("scroll", animateOnScrollContent);

        /// Certificate

        var animateOnScrollElementslistContent = document.querySelectorAll(".list-content");

        function isElementInView(element) {
          var elementTop = element.getBoundingClientRect().top;
          var elementBottom = element.getBoundingClientRect().bottom;
          var windowHeight = window.innerHeight;
      
          return (elementTop < windowHeight && elementBottom >= 0);
        }
      
        function animateOnScrolllistContent() {
            animateOnScrollElementslistContent.forEach(function(element) {
            if (isElementInView(element)) {
              element.classList.add("animate");
            }
            else {
                element.classList.remove("animate");
              }
          });
        }
      
        window.addEventListener("scroll", animateOnScrolllistContent);

});

