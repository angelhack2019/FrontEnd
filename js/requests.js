function PostFile(endPoint, data={}, 
    onSuccess=function(data){console.log(JSON.stringify(data))}, 
    onError=function(request){console.log(JSON.stringify(request))}){
    $.ajax({
        url: endPoint,
        method: "POST",
        data: data,
        processData: false,
        contentType: false,
        success: onSuccess,
        error: onError
    });
}

function requestAjax(endPoint, method, data={}, 
    onSuccess=function(data){console.log(JSON.stringify(data))}, 
    onError=function(request){console.log(JSON.stringify(request))}){
    $.ajax({
        url: endPoint,
        method: method,
        data: data,
        xhrFields: {
            contentType: "application/json; charset=UTF-8",
        },
        success: onSuccess,
        error: onError
    });
}

function GET(endPoint, onSuccess=undefined, onError=undefined){
    requestAjax(endPoint, "GET", undefined, onSuccess, onError)
}

function POST(endPoint, data=undefined, onSuccess=undefined, onError=undefined){
    requestAjax(endPoint, "POST", data, onSuccess, onError)
}

function PUT(endPoint, data=undefined, onSuccess=undefined, onError=undefined){
    requestAjax(endPoint, "PUT", data, onSuccess, onError)
}

function DELETE(endPoint, data=undefined, onSuccess=undefined, onError=undefined){
    requestAjax(endPoint, "DELETE", data, onSuccess, onError)
}