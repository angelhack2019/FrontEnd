$(function(){
    var fileInput = $("#fileUpload")
    var expDateInput = $("#exp_date")
    var tagsInput = $("#tags")
    var userUuidInput = $("#user_uuid")
    var fileUploadForm = $("#fileUploadForm")

    fileInput.on("change", function(event){
        var file = fileInput[0].files[0]
        var data = new FormData()
        data.set("image", file)
        expDateInput.val("1563493799")
        tagsInput.val("john")
        userUuidInput.val("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11")

        POST("//localhost:8081/food", fileUploadForm.serialize())
    })
})