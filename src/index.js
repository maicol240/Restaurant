import { loadHome } from "./Home/home";
import "./index.css";
import { loadMenu } from "./Menu/menu";
import { loadAbout } from "./About/About";

const container = document.querySelector("#content");

// //const home = createHome();
// //
// // container.appendChild(home);

// container.appendChild(loadMenu());

container.appendChild(loadAbout());
