$(document).ready(function(){
//////////////////////// 数字を入力する処理 //////////////////////////
    $("#buttonNum0").click(function() {
        let clickedNum0 = $("#buttonNum0").text();
        $("#calcResult").append(clickedNum0);
    });
    $("#buttonNum00").click(function() {
        let clickedNum00 = $("#buttonNum00").text();
        $("#calcResult").append(clickedNum00);
    });
    $("#buttonNumDot").click(function() {
        let clickedNumDot = $("#buttonNumDot").text();
        $("#calcResult").append(clickedNumDot);
    });
    $("#buttonNum1").click(function() {
        let clickedNum1 = $("#buttonNum1").text();
        $("#calcResult").append(clickedNum1);
    });
    $("#buttonNum2").click(function() {
        let clickedNum2 = $("#buttonNum2").text();
        $("#calcResult").append(clickedNum2);
    });
    $("#buttonNum3").click(function() {
        let clickedNum3 = $("#buttonNum3").text();
        $("#calcResult").append(clickedNum3);
    });
    $("#buttonNum4").click(function() {
        let clickedNum4 = $("#buttonNum4").text();
        $("#calcResult").append(clickedNum4);
    });
    $("#buttonNum5").click(function() {
        let clickedNum5 = $("#buttonNum5").text();
        $("#calcResult").append(clickedNum5);
    });
    $("#buttonNum6").click(function() {
        let clickedNum6 = $("#buttonNum6").text();
        $("#calcResult").append(clickedNum6);
    });
    $("#buttonNum7").click(function() {
        let clickedNum7 = $("#buttonNum7").text();
        $("#calcResult").append(clickedNum7);
    });
    $("#buttonNum8").click(function() {
        let clickedNum8 = $("#buttonNum8").text();
        $("#calcResult").append(clickedNum8);
    });
    $("#buttonNum9").click(function() {
        let clickedNum9 = $("#buttonNum9").text();
        $("#calcResult").append(clickedNum9);
    });
    $("#buttonSymPlus").click(function() {
        let clickedSymPlus = $("#buttonSymPlus").text();
        $("#calcResult").append(clickedSymPlus);
    });
    $("#buttonSymMinus").click(function() {
        let clickedSymMinus = $("#buttonSymMinus").text();
        $("#calcResult").append(clickedSymMinus);
    });
    $("#buttonSymMultiply").click(function() {
        $("#calcResult").append("*");
    });
    $("#buttonSymProduct").click(function() {
        $("#calcResult").append("/");
    });
/////////////////////// AC, +/-ボタンの処理 ///////////////////////
    $("#buttonAC").click(function() {
        $("#calcResult").text(""); 
    });
    $("#buttonPlusMinus").click(function() {
        let currentNumber = Number($("#calcResult").text());
        reverseNumber = currentNumber * -1; // -1をかけて符号を反転させる
        $("#calcResult").text(reverseNumber);
    });
/////////////////////// 計算の処理 ///////////////////////
    $("#buttonSymEqual").click(function() {
        let finalResult = new Function("return " + $("#calcResult").text())(); // 入力された式を関数として実行
        $("#calcResult").text(finalResult);
    });

});