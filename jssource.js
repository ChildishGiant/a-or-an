var word = ""
$(document).keypress(function(e) {
    if(e.which == 13) {
      word = $('#givenWord').val();
      word = word.toLowerCase()
      console.log(word)
      var ans = new Array;
      $.get('/preceed_with_an.txt', function(data){
        var ans = data.split('\n');
        var answer = $("#answer");
        for (var i = 0; i < ans.length; i++){
          if (ans[i] === word){
            $(answer).text("An");
            console.log("An")
            break;
          }else{
            $(answer).text("A");
          }
        }
      });
    }
});
