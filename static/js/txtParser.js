// namespace
var txtParser = {};
// an array of date objects
txtParser.dates = [{"date": "description"}];

txtParser.dateObject = {
    self: this,
    date: "",
    description: "",
    // constructor, takes two strings
    dateObject: function(date, description) {
            this.date = date;
            this.description = description;
    }
};

txtParser.fullText = function(text) {
    var date = new txtParser.dateObject.dateObject("4/15", "a test");
    txtParser.dates.push(date);
}

function contains(array, value) {
    stupidResult = $.inArray(value, array);

    if(stupidResult == -1) {
        return false;
    }
    else
        return true;
}

var nodeList = [];

var node = {
    edges: [],
    weight: 0,
    index: 0,
    addEdge: function(edgeWeight) { this.edges.push(edgeWeight) },
    getRelativeWeight: function(globalMax, globalMin) { return ( (globalMax-globalMin) / self.weight)); }
    }


// checks a set of parameters, a list of words we are looking for, and assigns
// a weight that represents the likelyhood that a word represents an important date
// edge weight is derermined by distance from analyzed word
function wordToWeight( word ) {

    // don't load config in a utility function
    var config = $.get("/static/js/config.json");
    var buzzWords = config.words;
    var weight = 0;
    var thisNode = new node();

    if( contains(buzzwords, word) ) {
        weight = weight + 10;
    }

    if( isDate(word) ) {

    }
}
