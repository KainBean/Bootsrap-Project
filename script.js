// JavaScript code for dropdown functionality
function toggleDropdown(event) {
  event.preventDefault();
  var dropdown = event.target.parentNode.querySelector(".dropdown-content");
  dropdown.classList.toggle("show");
}

function closeDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(function(dropdown) {
    dropdown.classList.remove("show");
  });
}

window.addEventListener("DOMContentLoaded", function() {
  var moreLink = document.querySelector(".dropdown-toggle");
  var dropdown = document.querySelector(".dropdown-content");

  moreLink.addEventListener("click", toggleDropdown);
  document.addEventListener("click", function(event) {
    if (!event.target.matches(".dropdown-toggle") && !event.target.closest(".dropdown-content")) {
      closeDropdowns();
    }
  });
});
// Get current date and format it
var today = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = today.toLocaleDateString(undefined, options);
document.getElementById('current_date').textContent = formattedDate;

// Function to create the delete button element
function createDeleteButton(eventItem) {
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete_button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    eventItem.remove();
  });
  return deleteButton;
}

// Function to add a new event
function addEvent() {
  var title = prompt("Enter the event title:");
  if (title) {
    var time = prompt("Enter the event time:");
    var copy = prompt("Enter the event description:");

    // Create HTML elements for the new event
    var eventItem = document.createElement("div");
    eventItem.classList.add("event_item");

    var dot = document.createElement("div");
    dot.classList.add("ei_Dot");
    eventItem.appendChild(dot);

    var eventContent = document.createElement("div");
    eventContent.classList.add("ei_Content");
    eventItem.appendChild(eventContent);

    var eventTitle = document.createElement("div");
    eventTitle.classList.add("ei_Title");
    eventTitle.textContent = title;
    eventContent.appendChild(eventTitle);

    var eventTime = document.createElement("div");
    eventTime.classList.add("ei_Time");
    eventTime.innerHTML = "<span>" + time + "</span>";
    eventContent.appendChild(eventTime);

    var eventCopy = document.createElement("div");
    eventCopy.classList.add("ei_Copy");
    eventCopy.textContent = copy;
    eventContent.appendChild(eventCopy);

    var deleteButton = createDeleteButton(eventItem);
    eventItem.appendChild(deleteButton);

    // Append the event to the event list
    var eventList = document.getElementById("event_list");
    eventList.appendChild(eventItem);
  }
}

// Add event listener to the "Add Event" button
var addEventButton = document.getElementById("add_event");
addEventButton.addEventListener("click", addEvent);

// Update clocks every second
function updateClocks() {
  var newYorkClock = document.getElementById("new_york_clock");
  var londonClock = document.getElementById("london_clock");
  var tokyoClock = document.getElementById("tokyo_clock");

  var now = new Date();

  // Update New York clock
  var newYorkTime = now.toLocaleTimeString("en-US", { timeZone: "America/New_York" });
  newYorkClock.textContent = newYorkTime;

  // Update London clock
  var londonTime = now.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
  londonClock.textContent = londonTime;

  // Update Tokyo clock
  var tokyoTime = now.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
  tokyoClock.textContent = tokyoTime;

  // Update analog clocks
  var hourHand = document.querySelectorAll(".hour-hand");
  var minuteHand = document.querySelectorAll(".minute-hand");
  var secondHand = document.querySelectorAll(".second-hand");

  var secondsRatio = now.getSeconds() / 60;
  var minutesRatio = (secondsRatio + now.getMinutes()) / 60;
  var hoursRatio = (minutesRatio + now.getHours()) / 12;

  hourHand.forEach(function (hand) {
    hand.style.transform = `translate(-50%, -100%) rotate(${hoursRatio * 360}deg)`;
  });

  minuteHand.forEach(function (hand) {
    hand.style.transform = `translate(-50%, -100%) rotate(${minutesRatio * 360}deg)`;
  });

  secondHand.forEach(function (hand) {
    hand.style.transform = `translate(-50%, -100%) rotate(${secondsRatio * 360}deg)`;
  });
}

setInterval(updateClocks, 1000);

