var events = {};
 
var currentDate = function() {
    var NowDate = new Date();
    var displayDate = document.getElementById('currentDate');
    displayDate.innerHTML = NowDate;
};

// edit event list
$("#event-list").click(function() {
    var createEvent = function(eventText, eventList) {
        var eventLi = $("<li>");
        // create elements to make up events list
        var eventP = $("<p>").text(eventText);
        // append p element
        eventLi.append(eventP);
        // append to list on page
    }

});

$(".card").on("click", "p", function() {
    var textInput = $(".textarea")
        .addClass("form-control")
        .val(text);
    
    $(this).replaceWith(textInput);
});

// clicking the save button in calendar
$(".saveBtn").click(function() {

    saveEvent();
});

var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
};