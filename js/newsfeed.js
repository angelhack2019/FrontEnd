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
    $("#newsfeed").append(html)
}

GET("//localhost:8081/foods", function(res){
    renderFoodCards(res)
},
function(error){
    console.log(JSON.stringify(error))
})