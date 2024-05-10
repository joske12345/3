  const dropdownContent = document.getElementById("myDropdownContent");
    dropdownContent.addEventListener("click", toggleDropdown(dropdownContent));
  let currentDropdown = null;

  function myFunction() {
    const x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  
  /*  const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      if (dropdown === currentDropdown) {
        // If this is the currently open dropdown, keep it open
        continue;
      }
      dropdown.style.display = "none";
    }
  
    currentDropdown = null;
  }
  
  function toggleDropdown(dropdownContent) {
    return function() {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
  
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];
        if (dropdown !== dropdownContent) {
          dropdown.style.display = "none";
        }
      }
  
      currentDropdown = dropdownContent;
    };
  }*/