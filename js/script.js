
searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () =>{
  searchForm.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-button').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission

  let message = [];

  if (password.value.length < 8) {
    message.push('Password must be at least 8 characters');
  }

  if (password.value.length > 20) {
    message.push('Password must be less than 20 characters'); }

  if (message.length > 0) {
    swal({
      title: 'Oops!',
      text: message.join(', '),
      icon: 'error',
      button: 'OK',
    });
  } else {
    setTimeout(() => {
      swal({
        icon: 'success',
        title: 'You Logged In',
        showConfirmButton: true,
      });
      window.location.href = "index.html";
    }); // 3 second delay
  }
});



// window.onscroll = () =>{

//   searchForm.classList.remove('active');

//   if(window.scrollY > 80){
//     document.querySelector('.header .header2').classList.add('active');
//   }else{
//     document.querySelector('.header .header2').classList.remove('active');
//   }

// }

// window.onload = () =>{

//   if(window.scrollY > 80){
//     document.querySelector('.header .header2').classList.add('active');
//   }else{
//     document.querySelector('.header .header2').classList.remove('active');
//   }

//   fadeOut();

// }