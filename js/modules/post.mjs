
export function postTemplate (data) {
    const post = document.createElement("div");
    post.classList.add("container");
    post.innerText = data.title;
    
    
    post.style.padding = "30px"; 
    post.style.border = "1px rgb(182, 182, 182) solid";
    post.style.borderRadius = "5px"
    post.style.margin = "20px auto"
    post.style.boxShadow = "1px 2px rgb(182, 182, 182)"
    post.style.borderBottom = "1px solid black"
    
    const tags = data.tags;

    if (data.body) {
        const body = data.body;
        post.append (body)
    }
    if (data.media) {
        const img = document.createElement ("img");
        img.src = data.media;
        img.alt = `image from ${data.title}`
        img.style.maxWidth = "100%"
        img.style.objectFit = "cover"
        post.append(img)
    }
    if (data.created) {
        const timeStamp = data.created;
        post.append(timeStamp)
    }
    
    return post;
}


export function renderPostTemplate (data, parent) {
    parent.append (postTemplate(data))
}

export function renderPostTemplates (dataList, parent) {
    parent.append(...dataList.map(postTemplate))
};