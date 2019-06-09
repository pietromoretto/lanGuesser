let code;
let buttonPredict;
let buttonRetry;
let result;
let langContainer;
let language;

$(document).ready(function () {
    code = $("#code");
    buttonPredict = $("#button-predict");
    buttonRetry = $("#button-retry");
    result = $("#result");
    langContainer = $("#lang-container");

    code.val("");
});

$(document).on('click', '#button-predict', function () {
    
    var codeVal = code.val();

    if (codeVal == "") {
        alert("Write something");
    }
    else {
        var requestURL = "predict?code=" + codeVal;

        buttonPredict.addClass("disable");
        $.getJSON(requestURL, function (data) {

            language = data["language"];
            var pred = data["pred"];

            buttonPredict.addClass("hide");
            buttonPredict.removeClass("disable");
            buttonRetry.removeClass("hide");

            langContainer.removeClass("hide");
            $("#" + language).removeClass("hide");
            result.html("<p><b>Language: </b>" + language + "</p><p><b>Accuracy: </b>" + pred+"</p>");
        });
    }
});

$(document).on('click', '#button-retry', function () {
    buttonRetry.addClass("hide");
    buttonPredict.removeClass("hide");
    result.html("");
    langContainer.addClass("hide");
    $("#" + language).addClass("hide");
});

// TAB support for textarea
$(document).delegate('#code', 'keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start)
            + "\t"
            + $(this).val().substring(end));

        // put caret at right position again
        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});
