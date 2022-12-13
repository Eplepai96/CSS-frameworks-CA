import { deleteUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function deletePost (id) {
    if (!id) {
        throw new Error("Delete requires a post id")
    };
    
    const response = await authFetch (`${deleteUrl}${id}`, {
        method: "delete"
    })

    console.log(post);
    return await response.json();
}
