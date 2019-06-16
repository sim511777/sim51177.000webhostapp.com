document.getElementById("ajaxButton").onclick = function () {
    var ajaxTextbox = document.getElementById("ajaxTextbox");
    var userName = ajaxTextbox.value;
    makeRequest('test.php', userName);
};

var httpRequest = new XMLHttpRequest();
function alertContents() {
    var resultText;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = JSON.parse(httpRequest.responseText);
            resultText = response.computedString;
        } else {
            resultText = 'request에 뭔가 문제가 있어요.';
        }
        var greeting = document.getElementById("greeting");
        greeting.innerHTML = resultText;
    }
}


function makeRequest(url, userName) {
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
}