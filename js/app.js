// Function to check Whether both passwords
// is same or not.
function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    // If password not entered
    if (password1 == '')
    alert ("Please enter Password");
    // If confirm password not entered
    else if (password2 == '')
    alert ("Please enter confirm password");
    // If Not same return False.
    else if (password1 != password2) {
    alert (" Пароли не совпадают. Пожалуйста, повторите попытку...")
    return false;
    }
    // If same return True.
    else{
    return true;
    }
    }
  
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    let cookiecook = getCookie("cookiecook"),
    cookiewin = document.getElementsByClassName('privacy_block')[0];
    if (cookiecook != "no") {
    cookiewin.style.display="block";
    document.getElementById("cookie_close").addEventListener("click", function(){
    cookiewin.style.display="none";
    // записываем cookie на 3 дня, во время которых блок не показывается
    let date = new Date;
    date.setDate(date.getDate() + 3);
    document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
    });}