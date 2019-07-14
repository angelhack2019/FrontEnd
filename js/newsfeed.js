$(function(){
    var searchForm = $("#searchForm")
    var searchBar = $("#searchBar")
    var newsFeed = $("#newsfeed")
    
    searchForm.on("submit", function(event){
        event.preventDefault()
        var searchValue = searchBar.val()

        GET("//localhost:8081/foods?tags=" + searchValue, function(res){
            newsFeed.html('')
            renderFoodCards(res)
        },
        function(err){
            console.err(err)
        })
    })

    function renderFoodCards(foods){
        for(var food of foods){
            render(foodCard(food))
        }
    }
    
    function foodCard(food){
        return '<div class="col-xs-6" data-uuid="' + food.uuid + '">' +
            food.user_uuid + 
            '<img style="width: 100%" src="' + food.pic_url + '" />' +
        '</div>'
    }
    
    function render(html){
        newsFeed.append(html)
    }
    
    GET("//localhost:8081/foods", function(res){
        renderFoodCards(res)
    },
    function(error){
        console.log(JSON.stringify(error))
    })
})