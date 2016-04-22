var word = ""
var arr = []
$(document).keypress(function(e) {
    if(e.which == 13) {

      word = $('#givenWord').val();
      word = word.toLowerCase();
      word = $.trim(word);
      console.log(word.split(" "));
      word = word.split(" ")[0];
      console.log(word);

      var ans = new Array;
      $.get('preceed_with_an.txt', function(data){
        var ans = data.split('\n');
        var answer = $("#answer");
        for (var i = 0; i < ans.length; i++){
          if (ans[i] === word and word != ""){
            $(answer).text("An");
            break;
          }else{
            $(answer).text("A");
          }
        }
      });
    }
});

function resizeInput() {

    //Firstly take the content or placeholder if content is missing.
    var content =
        $(this).val().length > 0 ? $(this).val() : $(this).prop("placeholder");

    //Create testing element with same content as input.
    var widthTester = $("<span>"+content+"</span>").hide();

    //Place testing element into DOM after input (so it inherits same formatting as input does).
    widthTester.insertAfter($(this));

    //Set inputs width; you may want to use outerWidth() or innerWidth()
    //depending whether you want to count padding and border or not.
    $(this).css("width",widthTester.width()+"px");

    //Remove the element from the DOM
    widthTester.remove();
 }

$('input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);
