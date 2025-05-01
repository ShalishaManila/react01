
import cssgrid from '../assets/images/css-grid.jpg';
import flexboxes from '../assets/images/flex-boxes.jpg';
import responsiveform from '../assets/images/responsive-form.jpg';
import responsivesite from '../assets/images/responsive-website.jpg';
import bootstrapproject from '../assets/images/bootstrap-project.jpg';
import atmapp from '../assets/images/js-atm.jpg';
import typinggame from '../assets/images/js-typing-game.jpg';
import sassgrid from '../assets/images/sass-grid.jpg';
import svgproject from '../assets/images/svg-project.jpg';
import groupproject from '../assets/images/group-project.jpg';

export const myProjects = [
  {
    id: 1,
    name: "Color Palette",
    techs: ["css", "html"],
    screenshot: cssgrid,
    shortdesc: "Color Palette using CSS Grids",
    desc: "This assignment helped in understanding the css grid layout, how to manage rows and columns. It was challenging to get to right layout as a beginer in programming. Creating the palette as responsive was additional challenge to overcome.",
    giturl: "https://github.com/ShalishaManila/ITTFW7",
  },
  {
    id: 2,
    name: "Flex Boxes",
    techs: ["css", "html"],
    screenshot: flexboxes,
    shortdesc:"Flex boxes using cards, positioning and responsive.",
    desc:"This assignment is to create multiple flex boxes in different orders, sizes and position them using css at the required places. Learned about flex, flex-direction, aligning, justifying content as per the requirements. Creating different types of cards and positioning them was a challenge untill it was clear on justify and align.",
    giturl: "https://github.com/ShalishaManila/ITTFW3",
  },
  {
    id: 3,
    name: "Group Project",
    techs: ["css", "saas", "html"],
    screenshot: groupproject,
    shortdesc:"Create a Spa website in collaboration with team.",
    desc:"This was a group project, to create a full Spa website that is responsive and provides all required information to end users on a Spa. My part of this group was to create a responsive gallery that shows some of the services provided by Spa. We had to use all the knowldge learnt until the project.  It was fun collaborating with the team and had a great team who supported all through the project.",
    giturl: "https://github.com/berriestrawberrie/Group-Project-Spa-Website",
  },
  {
    id: 4,
    name: "Bootstrap",
    techs: ["saas", "html", "bootstrap"],
    screenshot: bootstrapproject,
    shortdesc:"Using bootstrap, create a responsive website using cards and buttons.",
    desc:"It was fun learning Bootstrap as it simplified css coding. It was fun creating navbar, buttons and cards with ease and also responsive. Bootstrap capabilities are very good which saves lot of time in creating similar things with native css.",
    giturl: "https://github.com/ShalishaManila/ITTFW11",
  },
  {
    id: 5,
    name: "ATM",
    techs: ["javascript"],
    screenshot: atmapp,
    shortdesc:"Build ATM functionality using Javascript.",
    desc:"Using Javascript build ATM functionality.  Learnt about javascript objects and how to use functions for better re-useability.",
    giturl: "https://github.com/berriestrawberrie/javascript5",
  },
];
export let testvar = "Test Variable";
