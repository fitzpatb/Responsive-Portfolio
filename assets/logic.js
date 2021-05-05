const petA = document.getElementById('pet-modal');
const techA = document.getElementById('blog-modal');
const teamA = document.getElementById('team-modal');
const commerceA = document.getElementById('commerce-modal');
const employeeA = document.getElementById('employee-modal');
const noteA = document.getElementById('note-modal');
var flumeA = document.getElementById('flume-modal');
var passwordA = document.getElementById('password-modal');
var calanderA = document.getElementById('calander-modal');
var codeA = document.getElementById('code-modal');
var weatherA = document.getElementById('weather-modal');
var earwormA = document.getElementById('earworm-modal');
var websiteBtn = document.getElementById('website-btn');
var websiteA = document.getElementById('website-a');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var modalTitle = document.querySelector('.modal-title');
var modalBody = document.querySelector('.modal-body');
var modalPic = document.querySelector('#modal-pic');
var modalContent = document.querySelector('#modal-content');
var modalDescription = document.querySelector("#modal-description");
var modalContributions = document.querySelector('#modal-contributions');
var modalTechnologies = document.querySelector('#modal-technologies');


var descriptionLi = document.createElement('li');

var projectPic = document.createElement('img');
projectPic.classList.add('project-pic');

const info = {
  title: '',
  description: ''
}
var whichProject = function(event) {
  websiteBtn.style.display = "block";

  one.style.display = "list-item";
  two.style.display = "list-item";
  three.style.display = "list-item";
  four.style.display = "list-item";

  uno.style.display = "list-item";
  dos.style.display = "list-item";
  tres.style.display = "list-item";
  cuatro.style.display = "list-item";
  cinco.style.display = "list-item";
  seis.style.display = "list-item";
  siete.style.display = "list-item";

  var project = event.target.getAttribute('value');
  info.title = project;
  if (project === "Note Taker") {
    info.description = "With this project I was tasked with making a simple app that allows using to track and take notes using express."
    projectPic.src = "assets/images/notes.gif";
    projectPic.alt = "Simple note taking site";
    websiteA.href = "https://still-waters-76808.herokuapp.com/";
    one.textContent = "Created routes to link to express and keep track of notes";
    two.textContent = "Used basic CSS template to style";
    three.textContent = "Saved user inputs to keep track of notes, make new ones and delete old ones."
    four.style.display = "none";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = "Express";
    cinco.textContent = "Bootstrap";
    seis.style.display = "none";
    siete.style.display = "none";

  } else if (project === "Flume Fanpage"){
    info.description = "A simple fanpage made for EDM artist Flume. It contains a list of top songs and even an interactive video of one of his top songs."
    projectPic.src = "assets/images/FlumePage.jpg";
    projectPic.alt = "Fanpage for Flume";
    one.textContent = "Used CSS to style the page.";
    two.textContent = "Utilized HTML to make a basic website with working links and music.";
    three.style.display = "none";
    four.style.display = "none";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.style.display = "none";
    cuatro.style.display = "none";
    cinco.style.display = "none";
    seis.style.display = "none";
    siete.style.display = "none";

  } else if (project === "Scratch Game") {
    info.description = "A simple game made using Scratch. It includes a detailed description of how the game works and the steps in making it."
    projectPic.src = "assets/images/GetThePuff.jpg";
    projectPic.alt = "Site for online game by Scratch";
    websiteA.href = "https://scratch.mit.edu/projects/460104486";
    one.textContent = "Used scratch to make a get the puff game";

    uno.textContent = "Scratch";

  } else if (project === "Password Generator") {
    info.description = "This site allows you generate a random password of a length of 8-128 with numbers letters and special characters."
    projectPic.src = "assets/images/password-copy.gif";
    projectPic.alt = "Password Generator gif";
    websiteA.href = "https://fitzpatb.github.io/Password-Generator/";
    one.textContent = "Used prompts to take in user input for password";
    two.textContent = "Put an event listener on generate password button to run JavaScript functions";
    three.textContent = "Through elaborate if statements generates a password based on user inputs.";
    four.style.display = "none";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent ="Bootsrap";
    cinco.style.display = "none";
    seis.style.display = "none";
    siete.style.display = "none";
  } else if (project === "Weather Dashboard") {
    info.description = "A dashboard that allows you to search and see the weather for the next 5 days of a city of your choosing."
    projectPic.src = "assets/images/site-copy.gif";
    projectPic.alt = "Weather Dashboard gif";
    websiteA.href = "https://fitzpatb.github.io/Weather-Planner/";
    one.textContent = "Used Bootstrap to style the page";
    two.textContent = "Saved user search query to populate API information";
    three.textContent = "Searches and previous favorite click save the information to local storage to that previous search is visible."
    four.textContent = "Used JavaScript to dynamically update dashboard and show 5 day forecast with moment.js.";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = "jQuery";
    cinco.textContent = "Bootstrap";
    seis.textContent = "Moment.js";
    siete.style.display = "none";

  } else if (project === "Daily Calander") {
    info.description = "A dynamically generated calander that allows you to save upcoming tasks for the day and see where you are in your day."
    projectPic.src = "assets/images/calander-copy.gif";
    projectPic.alt = "Daily Calander gif";
    websiteA.href = "https://fitzpatb.github.io/Calander-Scheduler/";
    one.textContent = "Used Bootstrap and prebuilt CSS classes to style the page.";
    two.textContent = "Used jQuery to dynamically update the page with CSS.";
    three.textContent = "Saved daily activities to local storage."
    four.textContent = "Utilized moment.js to and setTimeout() to ensure the right time and activity is showing.";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = "jQuery";
    cinco.textContent = "Bootstrap";
    seis.textContent = "Moment.js";
    siete.style.display = "none";
  } else if (project === "Code Quiz") {
    info.description = "A short quiz that dynamically updates new questions and keeps your previous scores."
    projectPic.src = "assets/images/Code-Quiz-copy.gif";
    projectPic.alt = "Coding Quiz gif";
    websiteA.href = "https://fitzpatb.github.io/Code-Quiz/";
    one.textContent = "Used HTML, CSS, and Bootstrap to make basic page";
    two.textContent = "Put click events in JavaScript to enable the quiz to progress to next questions."
    three.textContent = "With local storage saved previous scores";
    four.style.display = "none";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = "Bootstrap";
    cinco.style.display = "none";
    seis.style.display = "none";
    siete.style.display = "none";
  } else if (project === "Earworm") {
    info.description = "An interactive website for music listeners to be able to find, purchase and listen to any song, artist or album even if you only know a few words of the song."
    projectPic.src = "assets/images/Earworm-copy.gif";
    projectPic.alt = "Earworm Music Site gif";
    websiteA.href = "https://bahuisken.github.io/earwom/";
    one.textContent = "Made HTML framework and styled with Bulma.";
    two.textContent = "Set up JavaScript to save all important information from APIs to local storage.";
    three.textContent = "Added buttons to allow user to clear previous seraches.";
    four.textContent = "Made it so that users can view next result if the correct result did not populate"
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = 'Bulma';
    cinco.textContent = "Spotify API";
    seis.textContent = "Genius API";
    siete.textContent = "Dicogs API";
  }
  modalPic.appendChild(projectPic);
  modalTitle.textContent = info.title;
  descriptionLi.textContent = info.description;
  modalDescription.appendChild(descriptionLi);

}

flumeA.addEventListener('click', whichProject);
twiddlerA.addEventListener('click', whichProject);
scratchA.addEventListener('click', whichProject);
passwordA.addEventListener('click', whichProject);
weatherA.addEventListener('click', whichProject);
calanderA.addEventListener('click', whichProject);
codeA.addEventListener('click', whichProject);
earwormA.addEventListener('click', whichProject);