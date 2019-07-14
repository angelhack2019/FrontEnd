var mockFoodData = [
    {
        uuid: "1",
        pic_url: "https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg",
        exp_date: "141241131",
        created_date: "1241313124"
    },

    {
        uuid: "2",
        pic_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
        exp_date: "141241131",
        created_date: "1241313124"
    }
]

var mockFoodToUser = {
    1: {
        first_name: "John",
        last_name: "Doe",
    },

    2: {
        first_name: "Sally",
        last_name: "Fields",
    }
}

function userFromFoodUUID(foodUUID){
    return mockFoodToUser[foodUUID]
}

function renderFoodCards(foods){
    for(var food of foods){
        render(foodCard(food, userFromFoodUUID(food.uuid)))
    }
}

function foodCard(food, user){
    return '<div class="col-xs-6" data-uuid="' + food.uuid + '">' +
        user.first_name + " " + user.last_name + 
        '<img style="width: 100%" src="' + food.pic_url + '" />' +
    '</div>'
}

function render(html){
    $("#newsfeed").append(html)
}

renderFoodCards(mockFoodData)

GET("//localhost:8081/foods")