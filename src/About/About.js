import { createContent } from "../helper";
import "./about.css";

export const loadAbout = () => {
  const hours = {
    Mon: "9:00 AM - 9:00 PM",
    Tues: "9:00 AM - 9:00 PM",
    Wed: "9:00 AM - 9:00 PM",
    Thur: "9:00 AM - 9:00 PM",
    Fri: "9:00 AM - 11:00 PM",
    Sat: "10:00 AM - 11:00 PM",
    Sun: "10:00 AM - 8:00 PM",
  };

  //about container creation
  const aboutContent = createContent("div");
  aboutContent.className = "about";

  const aboutTittle = createContent("p", "Bussines Hours");
  aboutTittle.className = "about_title";

  aboutContent.appendChild(aboutTittle);

  Object.keys(hours).forEach((day) => {
    let time = createContent("div", `${day} : ${hours[day]}`);
    time.className = "hours";

    aboutContent.appendChild(time);
  });

  return aboutContent;
};
