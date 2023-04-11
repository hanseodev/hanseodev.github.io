---
layout: lab
title: 심당이 나눔 계산기 beta
---

<style>
    .hide {
        display: none;
    }

    p { 
        margin: 0px;
    }
</style>

<small>✨귀찮은 나눔 계산도 한방에 OK!</small><br><br>

<!-- 나눔처 1~5 -->

<label for="donate1">나눔처 A</label>
<input type="text" pattern="\d*" id="donate1" name="donate1" value="0" oninput="calculate()"><br>
<label for="donate2">나눔처 B</label>
<input type="text" pattern="\d*" id="donate2" name="donate2" value="0" oninput="calculate()"><br>
<label for="donate3">나눔처 C</label>
<input type="text" pattern="\d*" id="donate3" name="donate3" value="0" oninput="calculate()"><br>
<label for="donate4">나눔처 D</label>
<input type="text" pattern="\d*" id="donate4" name="donate4" value="0" oninput="calculate()"><br>
<label for="donate5">나눔처 E</label>
<input type="text" pattern="\d*" id="donate5" name="donate5" value="0" oninput="calculate()">
<button onclick="toggleDonate6()">+</button><br>

<!-- 나눔처 6~10 -->
<p id="toggle6" class="hide">
<label for="donate6">나눔처 F</label>
<input type="text" pattern="\d*" id="donate6" name="donate6" value="0" oninput="calculate()"><br>
<label for="donate7">나눔처 G</label>
<input type="text" pattern="\d*" id="donate7" name="donate7" value="0" oninput="calculate()"><br>
<label for="donate8">나눔처 H</label>
<input type="text" pattern="\d*" id="donate8" name="donate8" value="0" oninput="calculate()"><br>
<label for="donate9">나눔처 I</label>
<input type="text" pattern="\d*" id="donate9" name="donate9" value="0" oninput="calculate()"><br>
<label for="donate10">나눔처 J</label>
<input type="text" pattern="\d*" id="donate10" name="donate10" value="0" oninput="calculate()">
<button onclick="toggleDonate11()">+</button><br>

<!-- 나눔처 11~15 -->
<p id="toggle11" class="hide">
<label for="donate11">나눔처 K</label>
<input type="text" pattern="\d*" id="donate11" name="donate11" value="0" oninput="calculate()"><br>
<label for="donate12">나눔처 L</label>
<input type="text" pattern="\d*" id="donate12" name="donate12" value="0" oninput="calculate()"><br>
<label for="donate13">나눔처 M</label>
<input type="text" pattern="\d*" id="donate13" name="donate13" value="0" oninput="calculate()"><br>
<label for="donate14">나눔처 N</label>
<input type="text" pattern="\d*" id="donate14" name="donate14" value="0" oninput="calculate()"><br>
<label for="donate15">나눔처 O</label>
<input type="text" pattern="\d*" id="donate15" name="donate15" value="0" oninput="calculate()">
</p>
</p><br>

<label for="tuiso">튀소</label>
<input type="text" pattern="\d*" id="tuiso" name="tuiso" value="0" oninput="calculate()"><br>
<label for="guma">부추</label>
<input type="text" pattern="\d*" id="guma" name="guma" value="0" oninput="calculate()"><br>
<label for="buchu">구마</label>
<input type="text" pattern="\d*" id="buchu" name="buchu" value="0" oninput="calculate()"><br>
<label for="choco">초코</label>
<input type="text" pattern="\d*" id="choco" name="choco" value="0" oninput="calculate()"><br>
<label for="wheat">건강빵</label>
<input type="text" pattern="\d*" id="wheat" name="wheat" value="0" oninput="calculate()"><br><br>

<label for="preDonate">어제 나눔</label>
<input type="text" pattern="\d*" id="preDonate" name="preDonate" value="0" oninput="calculate()"><br><br>

<label for="sweet">단과자</label>
<input type="text" id="sweet" name="sweet" readonly><br>
<label for="sumDonate">나눔 합계</label>
<input type="text" id="sumDonate" name="sumDonate" readonly><br>
<label for="totalDonate">나눔 누계</label>
<input type="text" id="totalDonate" name="totalDonate" readonly><br><br>

<button onclick="copyFormattedSweet()">단과자 복사</button>
<button onclick="copyFormattedSumDonate()">나눔 합계 복사</button>
<button onclick="copyFormattedTotalDonate()">나눔 누계 복사</button>

<script>
    function calculate() {
        // Input values
        var donate1 = parseFloat(document.getElementById("donate1").value);
        var donate2 = parseFloat(document.getElementById("donate2").value);
        var donate3 = parseFloat(document.getElementById("donate3").value);
        var donate4 = parseFloat(document.getElementById("donate4").value);
        var donate5 = parseFloat(document.getElementById("donate5").value);
        var donate6 = parseFloat(document.getElementById("donate6").value);
        var donate7 = parseFloat(document.getElementById("donate7").value);
        var donate8 = parseFloat(document.getElementById("donate8").value);
        var donate9 = parseFloat(document.getElementById("donate9").value);
        var donate10 = parseFloat(document.getElementById("donate10").value);
        var donate11 = parseFloat(document.getElementById("donate11").value);
        var donate12 = parseFloat(document.getElementById("donate12").value);
        var donate13 = parseFloat(document.getElementById("donate13").value);
        var donate14 = parseFloat(document.getElementById("donate14").value);
        var donate15 = parseFloat(document.getElementById("donate15").value);
        var tuiso = parseFloat(document.getElementById("tuiso").value);
        var guma = parseFloat(document.getElementById("guma").value);
        var buchu = parseFloat(document.getElementById("buchu").value);
        var choco = parseFloat(document.getElementById("choco").value);
        var wheat = parseFloat(document.getElementById("wheat").value);
        var preDonate = parseFloat(document.getElementById("preDonate").value);

        // Calculation
        
        var sumDonate = donate1 + donate2 + donate3 + donate4 + donate5 + donate6 + donate7 + donate8 + donate9 + donate10 + donate11 + donate12 + donate13 + donate14 + donate15;
        var sweet = sumDonate - tuiso - guma - buchu - choco - wheat;
        var totalDonate = sumDonate + preDonate;



        // 화페 단위 출력 설정
        
        var formattedSumDonate = sumDonate.toLocaleString({ style: 'currency'});
        var formattedSweet = sweet.toLocaleString({ style: 'currency'});
        var formattedTotalDonate = totalDonate.toLocaleString({ style: 'currency'});


        // Output results

        document.getElementById("sumDonate").value = formattedSumDonate;
        document.getElementById("sweet").value = formattedSweet;
        document.getElementById("totalDonate").value = formattedTotalDonate;
    }




    // 나눔처 토글
    function toggleDonate6() {
        var paragraph6 = document.getElementById("toggle6");
        if (paragraph6.classList.contains("hide")) {
            paragraph6.classList.remove("hide");
        } else {
            textparagraphbox.classList.add("hide");
        }
    }

    function toggleDonate11() {
        var paragraph11 = document.getElementById("toggle11");
        if (paragraph11.classList.contains("hide")) {
            paragraph11.classList.remove("hide");
        } else {
            textparagraphbox.classList.add("hide");
        }
    }

    // 클립보드에 복사
    function copyFormattedSweet() {
        var formattedSweet = document.getElementById("sweet").value;
        navigator.clipboard.writeText(formattedSweet);
    }

    function copyFormattedSumDonate() {
        var formattedSumDonate = document.getElementById("sumDonate").value;
        navigator.clipboard.writeText(formattedSumDonate);
    }

    function copyFormattedTotalDonate() {
        var formattedTotalDonate = document.getElementById("totalDonate").value;
        navigator.clipboard.writeText(formattedTotalDonate);
    }

</script>
