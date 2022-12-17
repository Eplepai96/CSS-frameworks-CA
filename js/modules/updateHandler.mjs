import { getProfile } from "./getProfile.mjs";
import { updateProfile } from "./update.mjs";
import { load } from "./storage.mjs";

const displayInfo = document.querySelector ("#display.info")
const editProfileButton = document.querySelector ("#edit-profile-btn")

export async function updateProfileEventListener () {
const toggleForm = document.querySelector("#update-profile-form")
const emailContainer = document.querySelector("#email-container")
const nameContainer = document.querySelector("#name-container")
const bannerContainer = document.querySelector("#banner-container")
const avatarContainer = document.querySelector("#avatar-container")

if (toggleForm) {
    
    const { name, email } = load("profile")
    toggleForm.name.value = name;
    toggleForm.email.value = email;

    const button = toggleForm.querySelector("button");

    const profile = await getProfile(name);

    
    toggleForm.banner.value = profile.banner;
    toggleForm.avatar.value = profile.avatar;

    toggleForm.addEventListener ("submit", (event) => {
        event.preventDefault ();
        const toggleForm = event.target;
        const formData = new FormData(toggleForm);
        const profile = Object.fromEntries(formData.entries())
      
        profile.name = name;
        profile.email = email;

        
        updateProfile(profile)
      })
      nameContainer.innerText = profile.name;
      emailContainer.innerText = profile.email;
      bannerContainer.innerText = profile.banner;
      avatarContainer.innerText = profile.avatar;
    }
}