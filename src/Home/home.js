import { createContent } from "../helper";
import pizza from "../Assets/mainpizza.jpg";
import "./home.css";

export const CreateHome = () => {
  //home Container
  const homeContainer = createContent("div");
  homeContainer.id = "home";

  //heading
  const heading = createContent("h1", "Welcome to Italian Pizeria");

  //img
  const img = document.createElement("img");
  img.src = pizza;

  //first Text
  const firstText = createContent("p", "This is our signature Margarita Pizza");

  //second Text
  const secondText = createContent("p", "Try it out Today");

  //Appending contents to home container
  homeContainer.appendChild(heading);
  homeContainer.appendChild(img);
  homeContainer.appendChild(firstText);
  homeContainer.appendChild(secondText);

  return homeContainer;
};
