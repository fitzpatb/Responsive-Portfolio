var flumeBtn = document.getElementById('flume-modal');
var twiddlerBtn = document.getElementById('twiddler-modal');
var scratchBtn = document.getElementById('scratch-modal');
var passwordBtn = document.getElementById('password-modal');
var calanderBtn = document.getElementById('calander-modal');
var codeBtn = document.getElementById('code-modal');
var weatherBtn = document.getElementById('weather-modal');
var earwormBtn = document.getElementById('earworm-modal');
var modalTitle = document.querySelector('.modal-title');
var modalBody = document.querySelector('.modal-body');
var modalPic = document.querySelector('#modal-pic');
var modalContent = document.querySelector('#modal-content');
var modalDescription = document.querySelector("#modal-description");
var modalContributions = document.querySelector('#modal-contributions');
var modalTechnologies = document.querySelector('#modal-technologies');


var descriptionLi = document.createElement('li');

var contOne = document.createElement('li');
var contTwo = document.createElement('li');
var contThree = document.createElement('li');
var contFour = document.createElement('li');
var contFive = document.createElement('li');
var contSix = document.createElement('li');

var techOne = document.createElement('li');
techOne.textContent = "HTML";
var techTwo = document.createElement('li');
techTwo.textContent = "CSS";
var techThree = document.createElement('li');
techThree.textContent = "JavaScript";
var techFour = document.createElement('li');
techFour.textContent = "jQuery";
var techFive = document.createElement('li');
techFive.textContent = "Bootstrap";
var techSix = document.createElement('li');
techSix.textContent = "Bulma";
var techSeven = document.createElement('li');
techSeven.textContent = "Weather API";
var techEight = document.createElement('li');
techEight.textContent = "Spotify API";
var techNine = document.createElement('li');
techNine.textContent = "Genius API";
var techTen = document.createElement('li');
techTen.textContent = "Discogs API";
var techEleven = document.createElement('li');
techEleven.textContent = "Moment.js";

var projectPic = document.createElement('img');
projectPic.classList.add('project-pic');

const info = {
  title: '',
  description: ''
}
var whichProject = function(event) {
  var project = event.target.getAttribute('value');
  info.title = project;
  if (project === "Twiddler") {
    info.description = "This is fun project I did that simulates a fake twitter. It can load new twids to the timeline and even allow you to post and write your own Twids."
    projectPic.src = "assets/images/Twiddler.jpg";
    projectPic.alt = "Twitter Imitation site"
    contOne.textContent = "Used CSS to style the page.";
    contTwo.textContent = "Took a prewritten JavaScript to populate twids every second.";
    contThree.textContent = "Saved user inputs to generate new twids."
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
  } else if (project === "Flume Fanpage"){
    info.description = "A simple fanpage made for EDM artist Flume. It contains a list of top songs and even an interactive video of one of his top songs."
    projectPic.src = "assets/images/FlumePage.jpg";
    projectPic.alt = "Fanpage for Flume";
    contOne.textContent = "Used CSS to style the page.";
    contTwo.textContent = "Utilized HTML to make a basic website with working links and music.";
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
  } else if (project === "Scratch Game") {
    info.description = "A simple game made using Scratch. It includes a detailed description of how the game works and the steps in making it."
    projectPic.src = "assets/images/GetThePuff.jpg";
    projectPic.alt = "Site for online game by Scratch";
    contOne.textContent = "Used scratch to make a get the puff game";
    modalContributions.appendChild(contOne);
    var techScratch = document.createElement('li');
    techScratch.textContent = "Scratch";
    modalTechnologies.appendChild(techScratch);
  } else if (project === "Password Generator") {
    info.description = "This site allows you generate a random password of a length of 8-128 with numbers letters and special characters."
    projectPic.src = "assets/images/password-copy.gif";
    projectPic.alt = "Password Generator gif";
    contOne.textContent = "Used prompts to take in user input for password";
    contTwo.textContent = "Put an event listener on generate password button to run JavaScript functions";
    contThree.textContent = "Through elaborate if statements generates a password based on user inputs.";
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
    modalTechnologies.appendChild(techFive);
  } else if (project === "Weather Dashboard") {
    info.description = "A dashboard that allows you to search and see the weather for the next 5 days of a city of your choosing."
    projectPic.src = "assets/images/site-copy.gif";
    projectPic.alt = "Weather Dashboard gif";
    contOne.textContent = "Used Bootstrap to style the page";
    contTwo.textContent = "Saved user search query to populate API information";
    contThree.textContent = "Searches and previous favorite click save the information to local storage to that previous search is visible."
    contFour.textContent = "Used JavaScript to dynamically update dashboard and show 5 day forecast with moment.js.";
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalContributions.appendChild(contFour);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
    modalTechnologies.appendChild(techFour);
    modalTechnologies.appendChild(techFive);
    modalTechnologies.appendChild(techEleven);
  } else if (project === "Daily Calander") {
    info.description = "A dynamically generated calander that allows you to save upcoming tasks for the day and see where you are in your day."
    projectPic.src = "assets/images/calander-copy.gif";
    projectPic.alt = "Daily Calander gif";
    contOne.textContent = "Used Bootstrap and prebuilt CSS classes to style the page.";
    contTwo.textContent = "Used jQuery to dynamically update the page with CSS.";
    contThree.textContent = "Saved daily activities to local storage."
    contFour.textContent = "Utilized moment.js to and setTimeout() to ensure the right time and activity is showing.";
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalContributions.appendChild(contFour);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
    modalTechnologies.appendChild(techFour);
    modalTechnologies.appendChild(techFive);
    modalTechnologies.appendChild(techEleven);
  } else if (project === "Code Quiz") {
    info.description = "A short quiz that dynamically updates new questions and keeps your previous scores."
    projectPic.src = "assets/images/Code-Quiz-copy.gif";
    projectPic.alt = "Coding Quiz gif";
    contOne.textContent = "Used HTML, CSS, and Bootstrap to make basic page";
    contTwo.textContent = "Put click events in JavaScript to enable the quiz to progress to next questions."
    contThree.textContent = "With local storage saved previous scores";
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
    modalTechnologies.appendChild(techFive);
  } else if (project === "Earworm") {
    info.description = "An interactive website for music listeners to be able to find, purchase and listen to any song, artist or album even if you only know a few words of the song."
    projectPic.src = "assets/images/Earworm-copy.gif";
    projectPic.alt = "Earworm Music Site gif";
    contOne.textContent = "Made HTML framework and styled with Bulma.";
    contTwo.textContent = "Set up JavaScript to save all important information from APIs to local storage.";
    contThree.textContent = "Added buttons to allow user to clear previous seraches.";
    contFour.textContent = "Made it so that users can view next result if the correct result did not populate"
    modalContributions.appendChild(contOne);
    modalContributions.appendChild(contTwo);
    modalContributions.appendChild(contThree);
    modalContributions.appendChild(contFour);
    modalTechnologies.appendChild(techOne);
    modalTechnologies.appendChild(techTwo);
    modalTechnologies.appendChild(techThree);
    modalTechnologies.appendChild(techSix);
    modalTechnologies.appendChild(techEight);
    modalTechnologies.appendChild(techNine);
    modalTechnologies.appendChild(techTen);
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