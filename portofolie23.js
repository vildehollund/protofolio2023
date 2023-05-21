
  /* Hamburger meny */
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");
  const toggle = document.querySelector(".toggle");
  

  /* Toggle mobile menu */
  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>"; //Her lukkes menyen ved at vi fjerner active, og vi endrer ikonet til hamburger barer igjen.
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>"; //Her legges til at menyen nå er aktiv, som betyr at vi har åpnet den. Og vi legger til kryss istedet for hamburger barene.
    }
  }

  /* Funksjonskall for hamburgermeny*/
toggle.addEventListener("click", toggleMenu); //Denne funksjonen trigges ved at vi klikker på toggle (som er ikonet, enten kryss eller hamburger)


/* Nav meny som dukker opp på scroll */

var lastScroll = window.scrollY; /* Posisjonen du var på sist, etter sist funksjonskall */

window.onscroll = function() { /*Hver gang du scroller blir denne funksjonen kalt på */
  const body = document.body;
  var currentScroll = window.scrollY; /* Posisjonen du er på nå, skjer pga funksjonskall hver gang du scroller */


  if (lastScroll > currentScroll) { /* Når vi scroller oppover, lastScroll er høyere enn det tallet du er på */
    body.classList.add("scroll-up");
    body.classList.remove("scroll-down");
    body.classList.remove("scroll-top");
  } 
  
  else {
    body.classList.add("scroll-down"); /*Når vi scroller nedover, lastscroll er et mindre tall enn det du er på */
    body.classList.remove("scroll-up");
    body.classList.remove("scroll-top");
  }

  lastScroll = currentScroll /*Her synkroniseres de to verdiene, vi kan derfor sjekke om brukeren står på toppen av siden */

  if (lastScroll == 0) { /*Sjekk for å se om du står på toppen av siden*/
    body.classList.remove("scroll-up")
  }
}

  


