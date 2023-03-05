---
layout: lab
title: 심당이 재고 계산기 beta
---

<p>1번 세트<br><input type="text" pattern="\d*" id="num1"></p>
<p>3번 세트<br><input type="text" pattern="\d*" id="num2"></p> 
<p>5번 세트<br><input type="text" pattern="\d*" id="num3"></p>
<p>7번 세트<br><input type="text" pattern="\d*" id="num4"></p>
<p>2번 세트<br><input type="text" pattern="\d*" id="num5"></p>
<p>4번 세트<br><input type="text" pattern="\d*" id="num6"></p>
<p>6번 세트<br><input type="text" pattern="\d*" id="num7"></p>
<p>8번 세트<br><input type="text" pattern="\d*" id="num8"></p>
<p>튀소 30ea<br><input type="text" pattern="\d*" id="num9"></p>
<p>구마 30ea<br><input type="text" pattern="\d*" id="num10"></p>
<p>부추 30ea<br><input type="text" pattern="\d*" id="num11"></p>
<p>보문산<br><input type="text" pattern="\d*" id="num12"></p>

<button onclick="calculate()">계산하기</button><br><br>

<p>결과<br><textarea rows="4" id="result"></textarea></p>

<button onclick="copyToClipboard()">클립보드에 복사</button>

<script>
    function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    var num7 = parseInt(document.getElementById("num7").value);
    var num8 = parseInt(document.getElementById("num8").value);
    var num9 = parseInt(document.getElementById("num9").value);
    var num10 = parseInt(document.getElementById("num10").value);
    var num11 = parseInt(document.getElementById("num11").value);
    var num12 = parseInt(document.getElementById("num12").value);

    var stockTuiso = num1 * 6 + num2 * 3 + num3 * 3 + num4 * 2 + num5 * 12 + num6 * 6 + num7 * 6 + num8 * 4 + num9 * 30;
    var stockGuma = num3 * 3 + num4 * 2 + num7 * 6 + num8 * 4 + num10 * 30;
    var stockBuchu = num2 * 3 + num4 * 2 + num6 * 6 + num8 * 4 + num11 * 30;
    var stockBomunsan = num12;

    var result = "시 재고입니다" + "\n튀소 " + stockTuiso + "\n구마 " + stockGuma + "\n부추 " + stockBuchu+ "\n보문산 " + stockBomunsan

    // 결과값을 출력
    document.getElementById("result").value = result;
    }

    function copyToClipboard() {
    // 결과값을 클립보드에 복사
    var result = document.getElementById("result").value;
    navigator.clipboard.writeText(result);
    }
</script>