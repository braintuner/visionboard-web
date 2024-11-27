// removeLicense.js

function hideLicense() {
    const licenseElement = document.querySelector('dx-license');
    if (licenseElement) {
      licenseElement.style.display = 'none';
    }
  
    // Optionally, observe changes to dynamically added elements
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const licenseElement = document.querySelector('dx-license');
          if (licenseElement) {
            licenseElement.style.display = 'none';
          }
        }
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    // Cleanup observer when not needed anymore
    return () => {
      observer.disconnect();
    };
  }
  
  // Execute function immediately after loading the script
  document.addEventListener('DOMContentLoaded', hideLicense);
  