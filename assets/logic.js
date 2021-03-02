var flumeBtn = document.getElementById('flume-modal');
var twiddlerBtn = document.getElementById('twiddler-modal');
var scratchBtn = document.getElementById('scratch-modal');
var passwordBtn = document.getElementById('password-modal');
var calanderBtn = document.getElementById('calander-modal');
var codeBtn = document.getElementById('code-modal');
var weatherBtn = document.getElementById('weather-modal');
var earwormBtn = document.getElementById('earworm-modal');
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
  one.style.display = "compact";
  two.style.display = "compact";
  three.style.display = "compact";
  four.style.display = "compact";

  uno.style.display = "compact";
  dos.style.display = "compact";
  tres.style.display = "compact";
  cuatro.style.display = "compact";
  cinco.style.display = "compact";
  seis.style.display = "compact";
  siete.style.display = "compact";

  var project = event.target.getAttribute('value');
  info.title = project;
  if (project === "Twiddler") {
    info.description = "This is fun project I did that simulates a fake twitter. It can load new twids to the timeline and even allow you to post and write your own Twids."
    projectPic.src = "assets/images/Twiddler.jpg";
    projectPic.alt = "Twitter Imitation site"
    one.textContent = "Used CSS to style the page.";
    two.textContent = "Took a prewritten JavaScript to populate twids every second.";
    three.textContent = "Saved user inputs to generate new twids."
    four.style.display = "none";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.style.display = "none";
    cinco.style.display = "none";
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
    one.textContent = "Used scratch to make a get the puff game";

    uno.textContent = "Scratch";

  } else if (project === "Password Generator") {
    info.description = "This site allows you generate a random password of a length of 8-128 with numbers letters and special characters."
    projectPic.src = "assets/images/password-copy.gif";
    projectPic.alt = "Password Generator gif";
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
    one.textContent = "Used HTML, CSS, and Bootstrap to make basic page";
    two.textContent = "Put click events in JavaScript to enable the quiz to progress to next questions."
    three.textContent = "With local storage saved previous scores";
    uno.textContent = "HTML";
    dos.textContent = "CSS";
    tres.textContent = "JavaScript";
    cuatro.textContent = "Bootstrap";
  } else if (project === "Earworm") {
    info.description = "An interactive website for music listeners to be able to find, purchase and listen to any song, artist or album even if you only know a few words of the song."
    projectPic.src = "assets/images/Earworm-copy.gif";
    projectPic.alt = "Earworm Music Site gif";
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

flumeBtn.addEventListener('click', whichProject);
twiddlerBtn.addEventListener('click', whichProject);
scratchBtn.addEventListener('click', whichProject);
passwordBtn.addEventListener('click', whichProject);
weatherBtn.addEventListener('click', whichProject);
calanderBtn.addEventListener('click', whichProject);
codeBtn.addEventListener('click', whichProject);
earwormBtn.addEventListener('click', whichProject);