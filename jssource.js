
$(document).ready(function(){
  var ans = new Array;
    $.get('preceed_with_an.txt', function(data){
            var array = data.split('\n');
            console.log(ans);
        });
});

$(document).on('input',$('#givenWord'),function () {
  console.log($('#givenWord').val())

});
