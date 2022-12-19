import { postsUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function createPost (data) {
    const response = await authFetch (postsUrl, {
        method: "post",
        body: JSON.stringify (data)
    })

    console.log(data);
    return await response.json();
}

