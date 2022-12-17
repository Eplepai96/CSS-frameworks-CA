export function setupSearch(posts) {
    const searchForm = document.querySelector("form#search");

  searchForm.addEventListener ("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const filteredPosts = posts.filter(function (post) {
        const title = post.title.toLowerCase();
        const term = searchTerm.toLowerCase();

        return title.includes(term)
    })
    console.log(Object.values(typeof(posts)))
    console.log(filteredPosts);
})
console.log(Object.values(posts))
}

