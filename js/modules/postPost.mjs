import { createPost } from "./createPost.mjs";

export function createPostEventListener () {
const postForm = document.querySelector('#post-form');

if (postForm) {
    postForm.addEventListener ("submit", (event) => {
        event.preventDefault ();
        const postForm = event.target;
        const formData = new FormData(postForm);
        const post = Object.fromEntries(formData.entries())
        
        postForm.reset()
        setTimeout(() => {location.reload()}, 500)
        
        createPost(post)
        alert("Post created successfully")
      })
    }
}
  





