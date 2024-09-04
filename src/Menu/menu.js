import { createContent } from "../helper";
import menu from "../Assets/menu.jpg";
import "./menu.css";

export const loadMenu = () => {
  const menuContainer = createContent("div");
  menuContainer.className = "menu";
  const img = createContent("img");
  img.src = menu;
  menuContainer.appendChild(img);
  return menuContainer;
};
