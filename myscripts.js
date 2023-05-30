//Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click(); 

//Timeline 
  (function () {
    const items = document.querySelectorAll(".timeline-section li");
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function slideIn() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("slide-in");
        } else {
          items[i].classList.remove("slide-in");
        }
      }
    }
  
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
  })();

  //Dots 
  function activateNavigation() {
    const sections = document.querySelectorAll(".section");
    const navContainer = document.createElement("nav");
    const navItems = Array.from(sections).map((section) => {
      return `
                      <div class="nav-item" data-for-section="${section.id}">
                          <a href="#${section.id}" class="nav-link"></a>
                          <span class="nav-label">${section.dataset.label}</span>
                      </div>
                  `;
    });
  
    navContainer.classList.add("nav");
    navContainer.innerHTML = navItems.join("");
  
    const observer = new IntersectionObserver(
      (entries) => {
        document.querySelectorAll(".nav-link").forEach((navLink) => {
          navLink.classList.remove("nav-link-selected");
        });
  
        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
  
        document
          .querySelector(
            `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
          )
          .classList.add("nav-link-selected");
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    document.body.appendChild(navContainer);
  }
  
  activateNavigation();

