import { registerEventListener } from "./js/modules/createAccount.mjs";
registerEventListener();

import { signInEventListener } from "./js/modules/signIn.mjs";
signInEventListener();

import * as posts from "./js/modules/postsMainFile.mjs";
import { postTemplate } from "./js/modules/post.mjs";
import { getPosts } from "./js/modules/postsMainFile.mjs";
import { renderPostTemplate } from "./js/modules/post.mjs";
import { renderPostTemplates } from "./js/modules/post.mjs";
import { createPostEventListener } from "./js/modules/postPost.mjs";

posts.getPosts().then(console.log)

async function testTemplates() {
    const posts = await getPosts();
    const postContainer = document.querySelector(".posts-container");
    renderPostTemplates(posts, postContainer);
}
testTemplates();

createPostEventListener()

import { updateProfileEventListener } from "./js/modules/updateHandler.mjs";
updateProfileEventListener()

import { setupSearch } from "./js/modules/search/search.mjs";
setupSearch(posts)