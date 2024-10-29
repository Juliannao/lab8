document.getElementById('copyright').innerText +=
"@ Усачева Юлианна, СПб ГБПОУ \"Колледж метростроя\", 2024";

let role_about = document.getElementById('label_role_about');
let role_guest = document.getElementById('role_guest');
let role_admin = document.getElementById('label_role_admin');
let role_user = document.getElementById('label_role_user');
let login_btn = document.getElementById('button_login');
let login_email = document.getElementById('label_email');
let login_password = document.getElementById('label_password');
let go_pass_button = document.getElementById('go-pass-button');
let go_register_button =document.getElementById('go-register-button');
// событие при нажатии "Пользователь"
role_guest.addEventListener('change', function (event) {
  if(role_guest.checked)
  {
  role_about.textContent = "Выбрана роль \"Гость\"";
  role_admin.disabled = true;
  role_user.disabled = true;
  login_btn.textContent = "Выполнить вход без авторизации";
  login_email.disabled = true;
  login_password.disabled = true;
  }
  else
  {
  role_about.textContent = "Можно выбрать любую из ролей";
  role_admin.disabled = false;
  role_user.disabled = false;
  login_btn.textContent = "Войти по логин-паролю";
  login_email.disabled = false;
  login_password.disabled = false;
  }
});

role_admin.addEventListener('change', function (event) {
  if(role_admin.checked){
  	role_about.textContent = "Вход как админ";
  }
 });

role_user.addEventListener('change', function (event) {
  if(role_user.checked){
  	role_about.textContent = "Вход как пользователь";
  }
 });


const loginPasswordVisibilityBtn = document.getElementById(
	"login-password-visibility",
);
const loginPasswordInput = document.getElementById("label_password");
const loginPasswordVisibilityOnIcon = document.getElementById(
	"login-password-visibility-on",
);
const loginPasswordVisibilityOffIcon = document.getElementById(
	"login-password-visibility-off",
);

loginPasswordVisibilityBtn.onclick = () => {
	if (loginPasswordInput.type === "password") {
    	loginPasswordInput.type = "text";
    	loginPasswordVisibilityOnIcon.classList.replace("block", "hidden");
    	loginPasswordVisibilityOffIcon.classList.replace("hidden", "block");
	} else if (loginPasswordInput.type === "text") {
    	loginPasswordInput.type = "password";
    	loginPasswordVisibilityOnIcon.classList.replace("hidden", "block");
    	loginPasswordVisibilityOffIcon.classList.replace("block", "hidden");
	}
};

go_pass_button.addEventListener('click', function (event) {
  alert("Попробуйте не забывать");
  });

go_register_button.addEventListener('click', function (event) {
  alert("Зарегистрирован");
  });


