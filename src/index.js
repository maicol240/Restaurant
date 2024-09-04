import { loadHome } from "./Home/home";
import "./index.css";
import { loadMenu } from "./Menu/menu";
import { loadAbout } from "./About/About";

const container = document.querySelector("#content");

(function setUpNavigation() {
  const btn = document.querySelectorAll("nav button");
  btn.forEach((btn) => {
    //assign events to each nav
    //home
    if (btn.textContent == "Home") {
      btn.addEventListener("click", () => {
        container.innerHTML = " ";
        container.appendChild(loadHome());
      });
    }
    //Menu
    if (btn.textContent == "Menu") {
      btn.addEventListener("click", () => {
        container.innerHTML = " ";
        container.appendChild(loadMenu());
      });
    }

    //about
    if (btn.textContent == "About") {
      btn.addEventListener("click", () => {
        container.innerHTML = " ";
        container.appendChild(loadAbout());
      });
    }
  });
})();

function loadPage() {
  container.appendChild(loadHome());

  //nav btn functions
}

// //const home = createHome();
// //
// // container.appendChild(home);

// container.appendChild(loadMenu());

///container.appendChild(loadAbout());

loadPage();
