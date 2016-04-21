
$(document).ready(function(){

});

$(document).on('input',$('#givenWord'),function () {
  if (typeof ans == 'undefined'){
    var ans = new Array;
      $.get('preceed_with_an.txt', function(data){
              var array = data.split('\n');
              console.log(ans);
          });
  }
  else{
    for (var i = 0; i < ans.length; i++){
      if (ans[i] == $('#givenWord').lower){
        console.log(ans[i])
      }
    }
  }
});
