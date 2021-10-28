function checkAll(){
  var email = document.getElementById('inputEmail'); // 이메일
  var pw1 = document.getElementById('inputPW1'); // 비밀번호
  var pw2 = document.getElementById('inputPW2'); // 비밀번호 재확인
  var studentID = document.getElementById('inputStudentID'); // 학번
  var num = document.getElementById('inputPhoneNum'); // 번호
  var checkbox = document.getElementById('gridCheck'); // 체크
  var ID = new Array(10); // 학번을 대입할 배열 생
  var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/; // 이메일 정규식
  var regID = /^[0-9]*$/; // 학번 정규식
  var regNum = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/; // 휴대폰 번호 정규식


  if(email.value==""){ // 빈칸일 경우
    alert('이메일을 입력하세요.');
    email.focus();
    return false;
  }
  if(!check(regEmail,email,"이메일을 잘못 입력했습니다.")){ // 이메일이 올바른 형태인지 검사
    return false;
  }
  if(pw1.value == ""){ // 빈칸일 경우
    alert("비밀번호를 입력해 주세요");
    pw1.focus();
    return false;
  }
  if(pw2.value == ""){ // 빈칸일 경우
    alert("비밀번호 확인을 입력해 주세요");
    pw2.focus();
    return false;
  }
  if((pw1.value) != (pw2.value)){ // 입력한 비밀번호가 다를 경우
    alert("비밀번호가 일치하지 않습니다.");
    pw1.focus();
    pw2.focus();
    return false;
  }
  if(studentID.value == ""){ // 빈칸일 경우
    alert('학번을 입력하세요');
    studentID.focus();
    return false;
  }
  for(var i = 0; i < 10 ; i++){ // 0부터 9까지 값을 배열에 대입함
    ID[i] = studentID.value.substr(i,1);
    // 선언한 배열에 학번을 한자릿씩 할당
  }
  if(ID[5] == 2 && ID[6] == 0){ // 다선번째와 여섯번째의 값이 2와 0이 나올 경우
    inputMajor.value="1" // 기계공학부
    inputMajor.focus();
  }
  if(ID[5] == 3 && ID[6] == 6){
    inputMajor.value="2" // 컴퓨터공학부
    inputMajor.focus();
  }
  if(ID[5] == 4 && ID[6] == 0){
    inputMajor.value="3" // 메카
    inputMajor.focus();
  }
  if(ID[5] == 5 && ID[6] == 1){
    inputMajor.value="4" // 디공
    inputMajor.focus();
  }
  if(ID[5] == 6 && ID[6] == 1){
    inputMajor.value="5" // 전전통
    inputMajor.focus();
  }
  if(ID[5] == 0 && ID[6] == 0){
    inputMajor.value="6" // 에신화
    inputMajor.focus();
  }
  if(ID[5] == 7 && ID[6] == 2){
    inputMajor.value="7" // 건축
    inputMajor.focus();
  }
  if(ID[5] == 8 && ID[6] == 0){
    inputMajor.value="8" // 산경
    inputMajor.focus();
  }

  if(!check(regID,studentID,"학번은 숫자만 입력 가능합니다.")){ // 학번 유효성 검사
    return false;
  }

  if(num.value == ""){ // 빈칸일 경우
    alert("번호를 입력하세요.");
    num.focus();
    return false;
  }
  if(!check(regNum,num,"올바른 번호를 입력해 주세요")){ // 휴대폰 번호 유효성 검사
      return false;
  }
  if(!checkbox.checked){ // 체크를 안 했을 경우
    alert("Check me out!");
    checkbox.focus();
    return false;
  }
  return true; // 올바른 경우에만 true로 반환
  alert("회원가입이 완료되었습니다!");
}
function check(re,what,message){ // 유효성 겁사를 해주는 함수
    if(re.test(what.value)){ // 입력한 값과 이메일 정규식 통해 검사
      return true;
    }
    alert(message);
    what.value = "";
    what.focus();
}

function pressEnter(){
  var form = document.loginForm;
  var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

  if (!form.Email.value) {
    alert("이메일을 입력해 주십시오.");
    form.Email.focus();
    return;
  }

  if(!regEmail.test(form.Email.value)){
    alert('올바른 이메일 형태가 아닙니다.');
    form.Email.value = "";
    form.Email.focus();
    return;
  }

  if (!form.Password.value) {
    alert("비밀번호를 입력해 주십시오.");
    form.Password.focus();
    return;
  }
  if (!form.Check.checked) {
    alert("Check me out!");
    form.Check.focus();
    return;
  }

  form.action = "#";
  alert('로그인이 완료되었습니다!');
  form.submit();
}
