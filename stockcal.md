---
layout: lab
title: 심당이 재고 계산기 beta
---

<label for="num1">1번 튀소</label>
<input type="text" pattern="\d*" id="num1" style="width: 4rem;"><br>
<label for="num2">3번 반반</label>
<input type="text" pattern="\d*" id="num2" style="width: 4rem;"><br>
<label for="num3">5번 형제</label>
<input type="text" pattern="\d*" id="num3" style="width: 4rem;"><br>
<label for="num4">7번 삼총사</label>
<input type="text" pattern="\d*" id="num4" style="width: 4rem;"><br>

<label for="num5">2번 튀소 (더블)</label>
<input type="text" pattern="\d*" id="num5" style="width: 4rem;"><br>
<label for="num6">4번 반반 (더블)</label>
<input type="text" pattern="\d*" id="num6" style="width: 4rem;"><br>
<label for="num7">6번 형제 (더블)</label>
<input type="text" pattern="\d*" id="num7" style="width: 4rem;"><br>
<label for="num8">8번 삼총사 (더블)</label>
<input type="text" pattern="\d*" id="num8" style="width: 4rem;"><br>

<label for="num9">튀소 30ea</label>
<input type="text" pattern="\d*" id="num9" style="width: 4rem;"><br>
<label for="num10">구마 30ea</label>
<input type="text" pattern="\d*" id="num10" style="width: 4rem;"><br>
<label for="num11">부추 30ea</label>
<input type="text" pattern="\d*" id="num11" style="width: 4rem;"><br>

<label for="num13">튀소 1ea</label>
<input type="text" pattern="\d*" id="num13" value="0" style="width: 4rem;"><br>
<label for="num14">구마 1ea</label>
<input type="text" pattern="\d*" id="num14" value="0" style="width: 4rem;"><br>
<label for="num15">부추 1ea</label>
<input type="text" pattern="\d*" id="num15" value="0" style="width: 4rem;"><br>

<label for="num12">메아리</label>
<input type="text" pattern="\d*" id="num12" style="width: 4rem;"><br>

<button onclick="calculate()">계산하기</button><br>

<textarea rows="5" id="result"></textarea>

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
    var num13 = parseInt(document.getElementById("num13").value);
    var num14 = parseInt(document.getElementById("num14").value);
    var num15 = parseInt(document.getElementById("num15").value);

    var stockTuiso = num1 * 6 + num2 * 3 + num3 * 3 + num4 * 2 + num5 * 12 + num6 * 6 + num7 * 6 + num8 * 4 + num9 * 30 + num13;
    var stockGuma = num3 * 3 + num4 * 2 + num7 * 6 + num8 * 4 + num10 * 30 + num14;
    var stockBuchu = num2 * 3 + num4 * 2 + num6 * 6 + num8 * 4 + num11 * 30 + num15;
    var stockMeari = num12;

    var result = "시 재고입니다" + "\n튀소 " + stockTuiso + "\n구마 " + stockGuma + "\n부추 " + stockBuchu+ "\n메아리 " + stockMeari

    // 결과값을 출력
    document.getElementById("result").value = result;
    }

    function copyToClipboard() {
    // 결과값을 클립보드에 복사
    var result = document.getElementById("result").value;
    navigator.clipboard.writeText(result);
    }
</script>