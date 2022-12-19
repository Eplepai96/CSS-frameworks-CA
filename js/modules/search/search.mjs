import { createPost } from "../createPost.mjs";
import { postTemplate, renderPostTemplates } from "../post.mjs";

export function setupSearch(posts) {
    
    const searchForm = document.querySelector("#search-form");
    
  
 if (searchForm){ searchForm.addEventListener ("submit", function (event) {
    event.preventDefault();
    const postContainer = document.querySelector(".posts-container");
    postContainer.innerHTML = ""
    const form = event.target;
    const searchTerm = form.term.value;
    const term = searchTerm.toLowerCase();

    const filteredPosts = posts.filter(function (post) {
        const title = post.title.toLowerCase();
        const body = post.body.toLowerCase();
        const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)))

        
        return title.includes(term) || body.includes(term);
    })
    
    renderPostTemplates(filteredPosts, postContainer)
    console.log(filteredPosts);
})
}
}
