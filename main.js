// Navbar / Menu on small screen function
  const menuToggle = document.getElementById('menuToggle');
  const navDrawer = document.getElementById('navDrawer');
  
  menuToggle.addEventListener('click', () => {
    navDrawer.classList.toggle('open'); 
  });

  // FAQs Toggle Function

  function toggleFAQ(button) {
  const allFaqs = document.querySelectorAll('.border p');
  const allIcons = document.querySelectorAll('.border button span');

  // Get the associated paragraph and icon
  const answer = button.nextElementSibling;
  const icon = button.querySelector('span');

  // Close all FAQs
  allFaqs.forEach(faq => {
      if (faq !== answer) {
          faq.classList.add('hidden');
      }
  });

  // Reset all icons
  allIcons.forEach(icon => {
      icon.classList.remove('rotate-90');
      icon.textContent = '+';
  });

  // Toggle the clicked FAQ
  const isHidden = answer.classList.contains('hidden');
  answer.classList.toggle('hidden', !isHidden);
  
  // Toggle icon rotation and change symbol
  if (isHidden) {
      icon.classList.add('rotate-90');
      icon.textContent = '−';
  } else {
      icon.classList.remove('rotate-90');
      icon.textContent = '+';
  }
}

// Back to top function
document.addEventListener("DOMContentLoaded", function () {
      const backToTop = document.getElementById("backToTop");

      // Show button when user scrolls down
      window.addEventListener("scroll", function () {
          if (window.scrollY > 300) {
              backToTop.classList.remove("hidden");
              backToTop.classList.add("flex"); // Show button
          } else {
              backToTop.classList.add("hidden");
              backToTop.classList.remove("flex");
          }
      });

      // Scroll to top when button is clicked
      backToTop.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  });


   //  AOS Initilizing
   document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 200,
delay: 0,
duration: 1000,
easing: 'ease',
once: true,
  });
});
