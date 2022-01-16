
//JSON 구문의 seldata 배열 정보를 저장하기 위한 변수
var optInfoArr;

//페이지가 로딩된 후 실행
window.onload = function () {
    //쿼리스트링에서 "km"에 해당하는 값을 가져온다.
    var giftType = new URLSearchParams(location.search).get("km");      
    var giftType2 = new URLSearchParams(location.search).get("km2");

    //km에 해당하는 값에 따라 "json-data.js" 페이지에 설정된 변수를 가져와서 JSON 형식으로 파싱한다.
    if (giftType == "giftcard")
        jsondata = JSON.parse(giftcard);
    else if (giftType == "happymoney")
        jsondata = JSON.parse(happymoney);
    else if (giftType == "bookcard")
        jsondata = JSON.parse(bookcard);

    //JSON 구문에서 "seldata"에 해당하는 값을 배열로 가져온다.
    optInfoArr = jsondata.seldata;

    //opt 배열의 JSON 값을 셀렉트(choice)에 추가한다.
    for (var i = 0; i < optInfoArr.length; i++) {
        $("#choice").append("<option value = \"" + optInfoArr[i].val + "\">" + optInfoArr[i].opt + "</option>");
    }
}

//셀렉트 박스에서 선택된 값이 변경되는 경우
function changeItem() {
    var idx = $("#choice option").index($("#choice option:selected"));  //셀렉트 박스에서 선택된 option의 index 값을 가져온다.
    var price = optInfoArr[idx].price;      //가격 정보를 가져온다.

    if (idx == 0) {     //첫번째 option이 선택된 경우
        $(".price_txt").text("※ 옵션을 선택해주세요.");
    } else {
        $(".price_txt").text(price + " 원");
    }
}

function buttonClick() {
    var selval = $("#choice option:selected").val();    //셀렉트 박스에서 선택된 값(value)을 가져온다.

    if (selval == "") {
        alert("옵션을 선택해 주세요.");
        return;
    }

    //이곳에 result.html 페이지에 전달 할 값을 쿼리스트링으로 작성 후 페이지를 이동시킨다.




}