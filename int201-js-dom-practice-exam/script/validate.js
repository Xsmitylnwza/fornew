function validUsername(username) {
  return /[A-Z]/.test(username) && /[0-9]/.test(username) && username.length >= 5 && !/[$#%^&*()_+!]/.test(username)
}

function validEmail(email) {
  return email.includes('@') && email.endsWith('.com')
}
function valiadpassword(password) {
  return /[$#%^&*()_+!]/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && password.length >= 8
}

export { validUsername, validEmail, valiadpassword }