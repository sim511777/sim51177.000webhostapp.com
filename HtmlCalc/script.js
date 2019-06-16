var formulaInput = document.getElementById("formula-input");
var calcHistDiv = document.getElementById("calc-history");
var calcButton = document.getElementById("calc-button");
formulaInput.addEventListener("keypress", function (e) {
    if (e.code === "Enter")
        calculate();
})
calcButton.addEventListener("click", function () {
    calculate();
})


function calculate() {
    var exp = formulaInput.value;
    var resultText;
    var valid;
    try {
        // 수식 계산
        resultText = exp + " = " + eval(exp);
        valid = true;
    } catch (e) {
        // 예외 처리
        resultText = exp + " : " + e;
        valid = false;
     }

    // DIV 엘리먼트 생성
    var resultDiv = document.createElement("DIV");
    // DIV에 결과 문자열로 자식 추가
    resultDiv.appendChild(document.createTextNode(resultText));
    // 실패했으면 DIV에 invalid 클래스 지정
    if (!valid)
        resultDiv.classList.add("invalid");
    // calcHistDiv 에 차일드 추가 맨앞에
    calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

    // 입력칸을 빈칸으로
    formulaInput.value = "";
}