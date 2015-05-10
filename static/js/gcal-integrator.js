
// name space
var integrator = { clientKey: "979462133776-61qr4p9g2v2cao5en7t3hkvfn2sg5gmo.apps.googleusercontent.com" }

// get template for new event form
$.get('/static/assets/templates/event.html', function(data) {
  integrator.eventForm = data;
  createEventField();
});

//TODO
// add a method to event form that adds proper id's to event fields
// add a sublit method to each event form

function createEventField() {
    $("#events").append(integrator.eventForm);
}

$( document ).ready(function() {

                        // set onclick listener
                        $('#add').click(submitEvent);
                        $('#slider').change(function() { $("duration").val($("#slider").val()); });
                        initFileHandling();
                        $("#viewContents").click( function() { if(sylParse.contentReady){
                                                                            console.log(sylParse.fileContents);
                                                                        }
                                                                    });
                        }
                    );
// init file handling
function initFileHandling() {
    var fileInput = $("<input></input>");
    fileInput.attr("type", "file");
    fileInput.attr("id", "buffer");
    $("#uploader").append(fileInput);
    $("#buffer").change( function() { sylParse.parseHandler( $('#buffer').get(0).files[0] ) });
}


// should be submit event
// need to make this a method on the event form object
// modularize the parameter settings?
function submitEvent() {
    var start = $("#start").val();
    var end = $("#end").val();
    var reminderType = $("#reminder").val();
    var description = $("#description").val();
    var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'key': integrator.clientKey,
    'method': reminderType,
    'start': {"dateTime": start+":00",
              "timeZone": "America/Chicago"},
    'end':   {"dateTime": end+":00",
              "timeZone": "America/Chicago"},
    'summary': description
  });
  console.log(request);
  request.execute(function(resp) {
      console.log(resp);
  });
}
