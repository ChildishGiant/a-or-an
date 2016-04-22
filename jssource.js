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
          if (ans[i] === word){
            $(answer).text("An");
            break;
          }else{
            $(answer).text("A");
          }
        }
      });
    }
});
