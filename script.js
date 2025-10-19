
// Simple JS for form handling and basic interactions
document.addEventListener('DOMContentLoaded', function(){
  const enquiry = document.getElementById('enquiryForm');
  if(enquiry){
    enquiry.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your enquiry has been received. We will contact you shortly.');
      enquiry.reset();
    });
  }
  const contact = document.getElementById('contactForm');
  if(contact){
    contact.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for contacting Himalayan Escapes. We will get back to you soon.');
      contact.reset();
    });
  }

  // Mobile friendly simple nav toggle
  const toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const links = document.getElementById('navLinks');
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
