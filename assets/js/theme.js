$( document ).ready(function() {
    $('#slogan').click(function(){
        $('#tresc').slideToggle();
    });
});

$.ajax({
    type:"GET",
    dataType: "json",
    url:"http://newsapi.org/v2/top-headlines?country=pl&apiKey=5d772fbb561b456698deea14e4869ea6",
    success:function(data)
    {
        var tab = data.articles;  
        for(var i = 0; i < 10; i++){
            $('#art').append("<div class='artykul'><h4>"+tab[i]['title']+"</h4><p>"+tab[i]['description']+"</p></div>");
        }
    }
 });