// namespace
var sylParse = {};


sylParse.parseHandler = function (fileObj) {
    // grab the filename from the file object
    filename = fileObj.name;
    // split the name on a dot
    var parts = filename.split('.');
    // just take the last part of the split array-> this is our file extention
    var extention = parts[parts.length - 1];

    // call the appropriate parsing function
    switch(extention) {
    case "docx":
        sylParse.readDocx(fileObj);
        break;
    case "txt":
        sylParse.readTxt(fileObj);
        break;
    // we can't support everything sorry
    default:
        alert("file format not supported");
    }
}

sylParse.readTxt = function(file) {

    var reader = new FileReader();
    // when the file reader has loaded the file contents into memory
    // call readSuccess
    reader.onload = readSuccess;
    // takes the event data from onload
    // which is the text read in by the reader
    function readSuccess(evt) {
        console.log(evt.target.result);
    };
    // read the file as text, then calling readSuccess
    // when onload fires
    reader.readAsText(file);
}

sylParse.readDocx = function(file) {
    // create a new file reader object
    var reader = new FileReader();
    // set the onload function to our function that will log the text
    reader.onload = readSuccess;
    function readSuccess(evt) {
        // take the binary blob built by our reader and create a docx from it
        var doc = new Docxgen(evt.target.result);
        // grab just the text from our docx object
        text = doc.getFullText();
        // log the text
        console.log(text);
    };
    // take the file and build a blob
    reader.readAsBinaryString(file);
}
