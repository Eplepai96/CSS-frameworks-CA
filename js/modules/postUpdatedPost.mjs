import { updatePost } from "./updatePost.mjs";
import { getPost } from "./getPost.mjs";
import { postsUrl } from "./callApi.mjs";

export async function updatePostEventListener () {
const updateForm = document.querySelector('#update-form');

const url = postsUrl
const id = url.searchParams.get("id")
if (updateForm) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id)

    updateForm.title.value = post.title;
    updateForm.body.value = post.value;
    updateForm.tags.value = post.value;
    updateForm.media.value = post.media;

    button.disabled = false;
    updateForm.addEventListener ("submit", (event) => {
        event.preventDefault ();
        const updateForm = event.target;
        const formData = new FormData(updateForm);
        const post = Object.fromEntries(formData.entries())
        post.id = id;
      
        updatePost(post)
      })
    }
}