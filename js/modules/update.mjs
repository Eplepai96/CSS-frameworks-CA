import { updateProfileUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function updateProfile (data) {
    if (!data.name) {
        throw new Error("Update requires a name")
    };
    
    const response = await authFetch (`${updateProfileUrl}/${data.name}/media`, {
        method: "put",
        body: JSON.stringify (data)
    })

    return await response.json();
}