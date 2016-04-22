var word = ""
var ans = new Array
var counter = 0

$(document).keypress(function(e) {
    if(e.which == 13) {
      word = $('#givenWord').val();
      word = word.toLowerCase();
      word = $.trim(word);
      word = word.split(" ")[0];
      if (counter == 0){
        counter++
        $.get('preceed_with_an.txt', function(data){
          ans = data.split('\n')
          console.log("loaded")
          processResults();
        });
      }else{
        processResults();
      }
    }
});

function resizeInput() {
    var content =
        $(this).val().length > 0 ? $(this).val() : $(this).prop("placeholder");
    var widthTester = $("<span>"+content+"</span>").hide();
    widthTester.insertAfter($(this));
    $(this).css("width",widthTester.width()+"px");
    widthTester.remove();
 }

$('input[type="text"]')
    .keyup(resizeInput)
    .each(resizeInput);

$('#givenWord').focus(function() {
    setTimeout((function(el) {
        var strLength = el.value.length;
        return function() {
            if(el.setSelectionRange !== undefined) {
                el.setSelectionRange(strLength, strLength);
            } else {
                $(el).val(el.value);
            }
    }}(this)), 0);
});

function processResults() {
  var answer = $("#answer");
  for (var i = 0; i < ans.length; i++){
    if (ans[i] === word && word != ""){
      $(answer).text("An");
      break;
    }else{
      $(answer).text("A");
    }
  }
}
