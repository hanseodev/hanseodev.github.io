---
layout: lab
title: 심당이 재고 계산기 beta
---

<small>✨<a href="/donatecal">>> NEW! 나눔 계산기 << </a></small><br>

<label for="num1">1번 튀소</label>
<input type="text" pattern="\d*" id="num1" style="width: 4rem;" oninput="calculate()"><br>
<label for="num2">3번 반반</label>
<input type="text" pattern="\d*" id="num2" style="width: 4rem;" oninput="calculate()"><br>
<label for="num3">5번 형제</label>
<input type="text" pattern="\d*" id="num3" style="width: 4rem;" oninput="calculate()"><br>
<label for="num4">7번 삼총사</label>
<input type="text" pattern="\d*" id="num4" style="width: 4rem;" oninput="calculate()"><br>

<label for="num5">2번 튀소 (더블)</label>
<input type="text" pattern="\d*" id="num5" style="width: 4rem;" oninput="calculate()"><br>
<label for="num6">4번 반반 (더블)</label>
<input type="text" pattern="\d*" id="num6" style="width: 4rem;" oninput="calculate()"><br>
<label for="num7">6번 형제 (더블)</label>
<input type="text" pattern="\d*" id="num7" style="width: 4rem;" oninput="calculate()"><br>
<label for="num8">8번 삼총사 (더블)</label>
<input type="text" pattern="\d*" id="num8" style="width: 4rem;" oninput="calculate()"><br>

<label for="num9">튀소 30ea</label>
<input type="text" pattern="\d*" id="num9" style="width: 4rem;" oninput="calculate()"><br>
<label for="num10">구마 30ea</label>
<input type="text" pattern="\d*" id="num10" style="width: 4rem;" oninput="calculate()"><br>
<label for="num11">부추 30ea</label>
<input type="text" pattern="\d*" id="num11" style="width: 4rem;" oninput="calculate()"><br>

<label for="num19">튀소 15ea</label>
<input type="text" pattern="\d*" id="num19" style="width: 4rem;" oninput="calculate()"><br>
<label for="num20">구마 15ea</label>
<input type="text" pattern="\d*" id="num20" style="width: 4rem;" oninput="calculate()"><br>
<label for="num21">부추 12ea</label>
<input type="text" pattern="\d*" id="num21" style="width: 4rem;" oninput="calculate()"><br>

<label for="num13">튀소 1ea</label>
<input type="text" pattern="\d*" id="num13" style="width: 4rem;" oninput="calculate()"><br>
<label for="num14">구마 1ea</label>
<input type="text" pattern="\d*" id="num14" style="width: 4rem;" oninput="calculate()"><br>
<label for="num15">부추 1ea</label>
<input type="text" pattern="\d*" id="num15" style="width: 4rem;" oninput="calculate()"><br>

<label for="num16">메아리 계산기</label>
<input type="text" pattern="\d*" id="num16" style="width: 2rem;" oninput="calculate()"> &times;
<input type="text" pattern="\d*" id="num17" style="width: 2rem;" oninput="calculate()"> &times;
<input type="text" pattern="\d*" id="num18" style="width: 2rem;" oninput="calculate()"><br>
<label for="num12">메아리 1ea</label>
<input type="text" pattern="\d*" id="num12" style="width: 4rem;" oninput="calculate()"><br>

<textarea style="width: 100%;" rows=5 id="result" readonly></textarea>

<button style="background-color: #ffffe0; color: 00001f; border-radius: 1rem; width: 100%; height: 3rem; font-size: 1.5rem" onclick="copyToClipboard()">클립보드에 복사</button>

<br>
<small><b>✔️23/06/30 업데이트:</b><br>- 15ea, 12ea 단위 추가</small><br><br>
<small><b>✔️23/06/29 업데이트:</b><br>- 메아리 계산기 추가<br>- 텍스트박스/버튼 스타일 수정</small><br><br>
<small><b>✔️23/04/12 업데이트:</b><br>- 빈 문자열을 0으로 처리<br>- 출력값을 자동으로 계산</small><br><br>
<small><b>✔️23/04/04 업데이트:</b><br>- 현재 시각을 자동으로 출력</small>

<script>
    function calculate() {
    var num1 = parseInt(document.getElementById("num1").value) || 0;
    var num2 = parseInt(document.getElementById("num2").value) || 0;
    var num3 = parseInt(document.getElementById("num3").value) || 0;
    var num4 = parseInt(document.getElementById("num4").value) || 0;
    var num5 = parseInt(document.getElementById("num5").value) || 0;
    var num6 = parseInt(document.getElementById("num6").value) || 0;
    var num7 = parseInt(document.getElementById("num7").value) || 0;
    var num8 = parseInt(document.getElementById("num8").value) || 0;
    var num9 = parseInt(document.getElementById("num9").value) || 0;
    var num10 = parseInt(document.getElementById("num10").value) || 0;
    var num11 = parseInt(document.getElementById("num11").value) || 0;
    var num12 = parseInt(document.getElementById("num12").value) || 0;
    var num13 = parseInt(document.getElementById("num13").value) || 0;
    var num14 = parseInt(document.getElementById("num14").value) || 0;
    var num15 = parseInt(document.getElementById("num15").value) || 0;
    var num16 = parseInt(document.getElementById("num16").value) || 0;
    var num17 = parseInt(document.getElementById("num17").value) || 1;
    var num18 = parseInt(document.getElementById("num18").value) || 1;
    var num19 = parseInt(document.getElementById("num19").value) || 0;
    var num20 = parseInt(document.getElementById("num20").value) || 0;
    var num21 = parseInt(document.getElementById("num21").value) || 0;

    var stockTuiso = num1 * 6 + num2 * 3 + num3 * 3 + num4 * 2 + num5 * 12 + num6 * 6 + num7 * 6 + num8 * 4 + num9 * 30 + num19 * 15 + num13;
    var stockGuma = num3 * 3 + num4 * 2 + num7 * 6 + num8 * 4 + num10 * 30 + num20 * 15 + num14;
    var stockBuchu = num2 * 3 + num4 * 2 + num6 * 6 + num8 * 4 + num11 * 30 + num21 * 12 + num15;
    var stockMeari = num12 + num16 * num17 * num18;

    // 시간 계산하기

    const now = new Date();
    const minutes = now.getMinutes();

    let hour;
    if (minutes >= 40) {
    hour = now.getHours() + 1;
    } else {
    hour = now.getHours();
    }

    // 12시간제로 변환
    if (hour > 12) {
       hour -= 12;
     }
    
    // 시간이 12시인 경우에는 0으로 바꿔줌
    if (hour == 12) {
        hour = 12;
    }

    // 결과값 계산
    var result = hour + "시 재고입니다" + "\n튀소 " + stockTuiso + "\n구마 " + stockGuma + "\n부추 " + stockBuchu+ "\n메아리 " + stockMeari

    // 결과값을 출력
    document.getElementById("result").value = result;
    }

    function copyToClipboard() {
    // 결과값을 클립보드에 복사
    var result = document.getElementById("result").value;
    navigator.clipboard.writeText(result);
    }

</script>
