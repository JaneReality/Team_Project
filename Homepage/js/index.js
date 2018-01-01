
function user_onclick(){
	var user = document.getElementById("button_user");
	if(user.style.color == 'black'){
		user.style.color = '#C28F4D';
		document.getElementById("button_merchant").style.color = 'black';
		if(document.getElementById("button_login").style.color == 'rgb(229, 154, 0)'){
			document.getElementById("merchant_login").style.display = "none";
			document.getElementById("user_login").style.display = "block";
		}
	}
}

function merchant_onclick(){
	var merchant = document.getElementById("button_merchant");
	if(merchant.style.color == 'black'){
		merchant.style.color = '#C28F4D';
		document.getElementById("button_user").style.color = 'black';
		if(document.getElementById("button_login").style.color == 'rgb(229, 154, 0)'){
			document.getElementById("merchant_login").style.display = "block";
			document.getElementById("user_login").style.display = "none";
		}
	}
}

function login_onclick(){
	var login = document.getElementById("button_login");
	if(login.style.color == 'black'){
		login.style.color = '#C28F4D';
		document.getElementById("button_enter").style.color = 'black';
		document.getElementById("enter").style.display = "none";
		var user_login = document.getElementById("user_login");
		var merchant_login = document.getElementById("merchant_login");
		if(document.getElementById("button_merchant") == 'rgb(229, 154, 0)'){
			merchant_login.style.display = "block";
			user_login.style.display = "none";
		}else{
			merchant_login.style.display = "none";
			user_login.style.display = "block";
		}
	}
}

function enter_onclick(){
	var enter = document.getElementById("button_enter");
	if(enter.style.color == 'black'){
		enter.style.color = '#C28F4D';
		document.getElementById("button_login").style.color = 'black';
		document.getElementById("enter").style.display = 'block';
		document.getElementById("user_login").style.display = 'none';
		document.getElementById("merchant_login").style.display = 'none'
	}
}

function text_onfocus(name) {
	var text = document.getElementsByName(name);
	for(var i = 0; i < text.length; i++) {
		if(text[i].style.color == 'rgb(116, 116, 116)') {
			text[i].style.color = 'black';
			text[i].value = '';
		}
	}
}

function text_onblur(name) {
	var text = document.getElementsByName(name);
	for(var i = 0; i < text.length; i++) {
	if(text[i].style.color == 'black' && text[i].value == '') {
		text[i].style.color = '#747474';
		text[i].value = name;
	}
	}
}

function password_onfocus(name) {
	var password = document.getElementsByName(name);
	if(password[0].style.display = 'block') {
		password[1].style.display = 'block';
		password[0].style.display = 'none';
		password[1].value = '';
		password[1].focus();
	}
}

function password_onblur(name) {
	var password = document.getElementsByName(name);
	if(password[1].value = '0') {
		password[0].style.display = 'block';
		password[1].style.display = 'none';
	}
}

$(document).ready(function(e){
  $("#us_login").click(function(e){
    user_login();
  });
  ("#mer_login").click(function(e){
    merchant_login();
  });
  $("#enter_button").click(function(e){
   enter();
  });
});

function user_login(){
  var a= document.getElementById("user_account").value;
  var e = document.getElementById("user_email").value;
  var p = document.getElementById("user_psd").value;
  var ps = document.getElementById("user_psd1").value;
  var c = document.getElementById("user_code").value;
  if(a == "" || e == ""|| p == "" || ps == "" || c == ""){
    alert("数据不能为空！");
    return false;
    }else{
      $.ajax({
        url:"***",
        data:{
          user_account:$("#user_account").val(),
          user_email:$("#user_email").val(),
          user_psd:$("#user_psd").val(),
          user_psd1:$("#user_psd1").val(),
          user_code:$("#user_code").val(),
        },
        type:"POST",
        dataType:"text",
        async: true,
      });
      return true;
    }
}
function mer_login(){
  var a = document.getElementById("mer_account").value;
  var s= document.getElementById("mer_store").value;
  var e = document.getElementById("mer_email").value;
  var p = document.getElementById("mer_psd").value;
  var ps = document.getElementById("mer_psd1").value;
  var c = document.getElementById("mer_code").value;
  if(a == "" || s == ""|| e == ""|| p == "" || ps == "" || c == ""){
    alert("数据不能为空！");
    return false;
    }else{
      $.ajax({
        url:"***",
        data:{
          mer_account:$("#mer_account").val(),
          mer_store:$("#mer_store").val(),
          mer_email:$("#mer_email").val(),
          mer_psd:$("#mer_psd").val(),
          mer_psd1:$("#mer_psd1").val(),
          mer_code:$("#mer_code").val(),
        },
        type:"POST",
        dataType:"text",
        async: true,
      });
      return true;
    }
}
function enter(){
  var a= document.getElementById("enter_account").value;
  var p= document.getElementById("enter_psd").value;
  var c = document.getElementById("enter_code").value;
  if(a == "" || p == ""|| c == ""){
    alert("数据不能为空！");
    return false;
    }else{
      $.ajax({
        url:"***",
        data:{
          enter_account:$("#enter_account").val(),
          enter_psd:$("#enter_psd").val(),
          enter_code:$("#enter_code").val(),
        },
        type:"POST",
        dataType:"text",
        async: true,
        success: function(msg){
          var str="<form >";
          str+="<input>";
          str+="</form>";
          $("#show").html(str);
        },
      });
      return true;
    }
}
