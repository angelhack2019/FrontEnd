$(function(){
    var fileInput = $("#fileUpload")
    var expDateInput = $("#exp_date")
    var tagsInput = $("#tags")
    var userUuidInput = $("#user_uuid")
    var fileUploadForm = document.getElementById("#fileUploadForm")

    fileInput.on("change", function(event){
        var file = fileInput[0].files[0]
        
        expDateInput.val(1563493799)
        tagsInput.val("john")
        userUuidInput.val("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11")
        
        var data = new FormData(fileUploadForm)
        data.set("image", file)

        PostFile("//localhost:8081/food", data)
    })
})