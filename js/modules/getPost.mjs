import { postsUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function getPosts () {
    
    const response = await authFetch (`${postsUrl}`)

    console.log();
    return await response.json();
}

export async function getPost (id) {
    if (!id) {
        throw new Error("Getting a post requires an id")
    }
    
    const response = await authFetch (`${postsUrl}/${id}`)

    console.log();
    return await response.json();
}