import { updateUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function updatePost (data) {
    if (!data.id) {
        throw new Error("Update requires a post id")
    };
    
    const response = await authFetch (`${updateUrl}${data.id}`, {
        method: "put",
        body: JSON.stringify (data)
    })

    console.log(post);
    return await response.json();
}
