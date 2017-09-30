/**
* Created by sonu on 21/9/17.
*/


function displayAskQuestion() {
    var gattingStarted = document.getElementsByClassName('gattingStatrted');
    var askQuestion = document.getElementsByClassName('askquestion');
    gattingStarted[0].style.display = 'none';
    gattingStarted[1].style.display = 'none';
    askQuestion[0].style.display = 'inline';
}
$(document).ready(function() {
    var chipPlaceholder = $('.chips-placeholder');
    var inputTags = $('.tags');
    chipPlaceholder.material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });

    $('.chips').material_chip();

    function getTags() {
        var data = chipPlaceholder.material_chip('data');
        var str = "";
        for (i = 0; i < data.length; i++) {
            str += data[i].tag + " ";
        }
        inputTags.val(str);
        console.log(str);
    }

    var decrement = $('.decrement');

    decrement.click(function () {
        var data =  {
            "qid" : this.name
        };
        $.post("/downvote", data, function (response) {
            if(response.result === "ok") {
                location.reload();
            }else {
                alert("Someting went wrong");
            }
        });
    });
    var increment = $('.increment');
    increment.click(function () {
        var data =  {
            "qid" : this.name
        };
        $.post("/upvote", data, function (response) {
            if(response.result === "ok") {
                location.reload();
            }else {
                alert("Someting went wrong");
            }
        });
    });
});
