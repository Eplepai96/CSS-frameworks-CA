import { registerEventListener } from "./js/modules/createAccount.mjs";
registerEventListener();

import { signInEventListener } from "./js/modules/signIn.mjs";
signInEventListener();

import * as posts from "./js/modules/postsMainFile.mjs";
import { getPost } from "./js/modules/postsMainFile.mjs";
// posts.createPost({
//   title: "this is a post",
//   body: "this is the post content"
// });

// getPost(2).then(console.log())
posts.getPosts().then(console.log)
// posts.updatePost({
    
// })


