export function setupSearch(posts) {
    const searchForm = document.querySelector("#search-form");
console.log(searchForm)
  searchForm.addEventListener ("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const filteredPosts = posts.filter(function (post) {
        const title = post.title.toLowerCase();
        const term = searchTerm.toLowerCase();

        return title.includes(term)
    })
    
    console.log(filteredPosts);
})
}

