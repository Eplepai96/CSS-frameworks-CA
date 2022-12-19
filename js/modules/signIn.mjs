import { loginUrl } from "./callApi.mjs";
import * as storage from "../modules/storage.mjs"

export function signInEventListener () {
const signInForm = document.querySelector('.login-form');

if (signInForm) {
    signInForm.addEventListener ("submit", (event) => {
        event.preventDefault ();
        const formData = event.target;
        const method = formData.method;
        const email = formData.email.value;
        const password = formData.password.value;
      
       async function loginUser(url, data) {
          try {
            const postData = {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            };
            const response = await fetch(url, postData);
            
            const json = await response.json();
            const accessToken = json.accessToken;
            
            storage.save("token", accessToken);
            storage.save("profile", json);
            formData.reset()
            alert("You are now signed in");

            setTimeout(() => {window.location = "home.html"}, 1000)
            
            return json;

          } catch (error) {
            console.log(error);
          }
        }
        const userLogin = {
          email: email,
          password: password
        }; 
        loginUser(loginUrl, userLogin);
      })
    }
}
  


  