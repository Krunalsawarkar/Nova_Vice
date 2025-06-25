import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import { projectsData } from "./projects";

gsap.registerPlugin(CustomEase);

CustomEase.create("hop", "0.9,0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.querySelector(".projects");
  const locationContainer = document.querySelector(".locations");
  const gridImages = gsap.utils.toArray(".img");
  const heroImage = document.querySelector(".img.hero-img");

  const images = gridImages.filter((img) => img !== heroImage);

  const introCopy = new SplitType(".intro-copy h3", {
    types: "words",
    absolute: false,
  });

  const titleHeading = new SplitType(".title h1", {
    types: "words",
    absolute: false,
  });

  const allImagesSources = Array.from(
    { length: 35 },
    (_, i) => `/img${i + 1}.jpeg`
  );

  const getRandomImageSet = () => {
    const shuffled = [...allImagesSources].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  };

  function initializeDynamicContent() {
    projectsData.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";
      
    });
  }
});
