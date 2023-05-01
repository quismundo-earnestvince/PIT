// // Get the navigation bar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navigation bar
// var sticky = navbar.offsetTop;

// // Function to add the sticky class to the navigation bar when you reach its scroll position
// function stickyNavigation() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// // When the user scrolls the page, execute the stickyNavigation function
// window.onscroll = function() {stickyNavigation()};


// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > navbar.offsetTop) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//     navbar.style.transition = 'all 0.5s ease-out';
//   }
// });





window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

