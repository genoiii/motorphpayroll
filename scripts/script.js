const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []  
  
  errors = getLoginFormErrors(username_input.value, password_input.value)

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }else {
    // If no errors, proceed with login logic
    e.preventDefault(); // Prevent form submission to handle login logic
    if (username_input.value === 'admin' && password_input.value === 'password') {
      // Redirect to another page on successful login
      window.location.href = 'dashboard.html'; // Change 'success.html' to your target page
    }
  }
})

function getLoginFormErrors(username, password){
  let errors = []

  if((username === '' || username == null) && (password === '' || password == null)){
    errors.push('Username and Password is required')
    username_input.parentElement.classList.add('incorrect')
    password_input.parentElement.classList.add('incorrect')
    return errors;       
  }

  if(username === '' || username == null){
    errors.push('Username is required')
    username_input.parentElement.classList.add('incorrect')    
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')    
  }

  if (username_input.value !== 'admin' || password_input.value !== 'password') {
    errors.push('Invallid username or password')
    password_input.parentElement.classList.add('incorrect')
    username_input.parentElement.classList.add('incorrect')
  }


  return errors;
}

const allInputs = [username_input, password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})
