// var userId = document.querySelector("#join_id");
// var pw1 = document.querySelector("#join_pw1");
// var pw2 = document.querySelector("#join_pw2");


// userId.onchange = checkId;
// pw1.onchange = checkPw;
// pw2.onchange = comparePw;

// 조건 미충족시 alert 알림
// function checkId() {
//     if (userId.value.length < 4 || userId.value.length > 15) {
//         alert ("ID는 4~15자리의 영문과 숫자를 입력하세요");
//         userId.select(); // 알림이 뜬 뒤로 다시 유저 아이디가 선택된다. select() : 사용자가 기존에 입력한 값을 입력
//     }
// };

// function checkPw() {
//     if (pw1.value.length < 8) {
//         alert ("비밀번호는 8자리 이상이어야 합니다.");
//         pw1.value = ""; // 8자리 미만으로 작성 시 작성했던 내용들이 지워진다.
//         pw1.focus(); // focus() : 새로운 값을 입력하도록 커서를 가져다 놓는 역할
//     }
// };

// function comparePw() {
//     if (pw1.value != pw2.value) {
//         alert ("암호가 다릅니다. 다시 입력하세요.");
//         pw2.value = "";
//         pw2.focus();
//     }
// };

$(document).ready(function() {
    // 언어 변경 select박스 클릭시 테두리 색 변경

    $("#login_lang_in").focus(function() {
        $(this).css({border: '1px solid #680000'})
    }).blur(function() {
        $(this).css({border: '1px solid #ccc'})
    });
});


// input에 focus일 때 테두리 색 변경
$(document).ready(function() {

    
    $("#join_id, #join_pw1, #join_pw2, #join_name, #gender").focus(function() {
        $(this).parent('div').css({border: '1px solid #680000'})
    }).blur(function() {
        $(this).parent('div').css({border: '1px solid #ccc'})
    })

});

$(function() {
    $("#birth_year, #birth_month, #birth_day").focus(function() {
        $(this).parent('li').css({border: '1px solid #680000'})
    }).blur(function() {
        $(this).parent('li').css({border: '1px solid #ccc'})
    })
});



// 조건 미충족시 경고문
$(document).ready(function() {

    // 아이디 유효성 검사 정규식 (대소문자+숫자조합 4~12자)
	var reg_id = RegExp(/^[a-z]+[a-z0-9]{4,12}$/);
    // 비밀번호 유효성 검사 정규식(숫자, 영문, 특수문자 각각 하나씩 사용해야한다.)
    var reg_pw = RegExp(/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/);
	// 이름 유효성 검사 정규식
	var reg_name = RegExp(/^[가-힣]{2,4}$/);
    // 생년월일(year) 유효성 검사 정규식
    var reg_year = RegExp(/([0-9]{4})/);
    // 생년월일(day)
    var reg_day = RegExp(/([0-9]{2})/);



    // id 유효성 검사
    $("#join_id").on("blur", function() {
        var id=$("#join_id").val();
        if(reg_id.test(id)) {
            $("#checkId").html("사용가능합니다.");
            $("#checkId").css("color", "blue");
        } else {
            $("#checkId").html("*아이디는 영문자로 시작하는 4~12자 영문자 또는 숫자이어야 합니다.")
        }
    });


    // 비밀번호 유효성 검사
    $("#join_pw1").on("blur", function() {
        var pw1=$("#join_pw1").val();
        if(reg_pw.test(pw1)) {
            $("#checkPw1").html("사용가능합니다.");
            $("#checkPw1").css("color", "blue");
        } else {
            $("#checkPw1").html("*숫자, 영문, 특수문자 각 1자리 이상이면서 8~16자 사이를 입력해주세요.")
        }
    });


    // 비밀번호 확인 유효성 검사
    $("#join_pw2").on("blur", function() {
        var pw1=$("#join_pw1").val(); 
        var pw2=$("#join_pw2").val();
        
        if(pw2 == "") {
            $("#checkPw2").html("*비밀번호를 입력해주세요.");
        } else if (pw2 == pw1) {
            $("#checkPw2").html("비밀번호가 일치합니다.");
            $("#checkPw2").css("color", "blue");
        } else {
            $("#checkPw2").html("*비밀번호가 틀립니다. 다시 입력해주세요.");
        }
    });


    // 이름 유효성 검사
    $("#join_name").on("blur", function() {
		var name=$("#join_name").val();
		if(reg_name.test(name)) {
			$("#checkName").html("확인되었습니다.");
            $("#checkName").css("color", "blue");
		} else {
			$("#checkName").html("*한글 이름 2~4자 이내로 입력해주세요.");
		}
	});


    // 생년월일 유효성 검사
    $("#birth_year, #birth_month, #birth_day").on("blur", function() {
        var birth_year=$("#birth_year").val();
        var birth_month=$("#birth_month").val();
        var birth_day=$("#birth_day").val();

        if(birth_year=="" || birth_month=="" || birth_day=="") {
            $("#checkBirth").html("*생년월일을 입력해주세요.(연도는 4자리 일은 2자리)");
        } else {
            if(reg_year.test(birth_year) && reg_day.test(birth_day)) {
                $("#checkBirth").html("확인되었습니다.");
                $("#checkBirth").css("color", "blue");
            } else {
                $("#checkBirth").html("*생년월일을 입력해주세요.(연도는 4자리 일은 2자리)");
            }
        }
    });


    // 성별 유효성 검사
    $("#gender").on("blur", function() {
        var gender=$("#gender").val();
        if(gender=="") {
            $("#checkGender").html("*성별을 선택해주세요.");
        } else {
            $("#checkGender").html("확인되었습니다.");
            $("#checkGender").css("color", "blue");
        }
    });
})
