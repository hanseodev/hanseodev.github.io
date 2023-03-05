---
layout: lab
title: 심당이 재고 계산기 beta
---

<script>
// 입력값 받기
var input1 = parseInt(prompt("1번 세트의 개수를 입력하세요"));
var input2 = parseInt(prompt("3번 세트의 개수를 입력하세요"));
var input3 = parseInt(prompt("5번 세트의 개수를 입력하세요"));
var input4 = parseInt(prompt("7번 세트의 개수를 입력하세요"));
var input5 = parseInt(prompt("2번 세트의 개수를 입력하세요"));
var input6 = parseInt(prompt("4번 세트의 개수를 입력하세요"));
var input7 = parseInt(prompt("6번 세트의 개수를 입력하세요"));
var input8 = parseInt(prompt("8번 세트의 개수를 입력하세요"));
var input9 = parseInt(prompt("튀소 30ea의 개수를 입력하세요"));
var input10 = parseInt(prompt("구마 30ea의 개수를 입력하세요"));
var input11 = parseInt(prompt("부추 30ea의 개수를 입력하세요"));
var input12 = parseInt(prompt("보문산의 개수를 입력하세요"));

// 재고 계산하기
var stockTuiso = input1 * 6 + input2 * 3 + input3 * 3 + input4 * 2 + input5 * 12 + input6 * 6 + input7 * 6 + input8 * 4 + input9 * 30;
var stockGuma = input3 * 3 + input4 * 2 + input7 * 6 + input8 * 4 + input10 * 30;
var stockBuchu = input2 * 3 + input4 * 2 + input6 * 6 + input8 * 4 + input11 * 30;
var stockBomunsan = input12;

// 결과 출력하기
document.write("시 재고입니다");
document.write("<br>");
document.write("튀소 " + stockTuiso);
document.write("<br>");
document.write("구마 " + stockGuma);
document.write("<br>");
document.write("부추 " + stockBuchu);
document.write("<br>");
document.write("보문산 " + stockBomunsan);

</script>