document.addEventListener("DOMContentLoaded", function() {
  // 1. Target your existing titles/headers
  // Replace '.your-title-class' with the actual class name in your system
  const headers = document.querySelectorAll('.accordion-header'); 

  headers.forEach(header => {
    // 2. Add the Icon span if it doesn't exist
    if (!header.querySelector('.icon')) {
      const icon = document.createElement('span');
      icon.classList.add('icon');
      header.appendChild(icon);
    }

    // 3. Click Event
    header.addEventListener('click', function() {
      const item = this.parentElement;
      
      // Toggle active class
      item.classList.toggle('active');

      // Close others (Optional)
      headers.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove('active');
        }
      });
    });
  });
});