$("#autocomplete").on("input", function () {
  var word = $(this).val();
  if (word != "") {
    var path = "/api/hoge/" + word;
    $.getJSON(path + "?callback=?",function(json){
      var dataPlace = {};
      for (var i = 0; i < json.length; i++) {
        console.log(json[i].place_name);
        dataPlace[json[i].place_name] = json[i].flag;
      }
      $('#autocomplete').autocomplete({
        data: dataPlace,
        limit: 10,
      });
    });
  }
});
