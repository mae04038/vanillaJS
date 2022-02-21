const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//string만 포함된 변수는 대문자로 표기하고 
//string을 저장하고 싶을 때 사용.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본행동이든지 발생하지 않도록 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
    const username = loginInput.value; // 유저의 이름 변수에 저장
    localStorage.setItem(USERNAME_KEY, username); // key와 value
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //form 의 hidden class명 지우기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show the greetings
    paintGreetings();
}

