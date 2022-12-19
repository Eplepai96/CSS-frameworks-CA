import { registerUrl } from "./callApi.mjs";

export function registerEventListener () {
const registerForm = document.querySelector (".register-form")

if (registerForm) {
registerForm.addEventListener ("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const email = formData.email.value;
    const name = formData.name.value;
    const password = formData.password.value;
    
    async function registerUser(url, data) {
      try {
        const postData = {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        
        const response = await fetch(url, postData);
        console.log(response)
    
        const json = await response.json();
        console.log(json)
        formData.reset()
        alert("Account was created successfully");
        
        return json;
        
      } catch (error) {
        console.log(error);
      }
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
  
    registerUser(registerUrl, user);
  })
  }
}
