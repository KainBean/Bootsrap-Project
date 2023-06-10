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

    var eventTitle = document.createElement("div");
    eventTitle.classList.add("ei_Title");
    eventTitle.textContent = time;
    eventItem.appendChild(eventTitle);

    var eventCopy = document.createElement("div");
    eventCopy.classList.add("ei_Copy");
    eventCopy.textContent = copy;
    eventItem.appendChild(eventCopy);

    // Create delete button and append it to the event item
    var deleteButton = createDeleteButton(eventItem);
    eventItem.appendChild(deleteButton);

    // Append the new event to the event list
    document.getElementById("event_list").appendChild(eventItem);
  }
}

// Add event listener to the "Add" button
document.getElementById("add_event").addEventListener("click", addEvent);
