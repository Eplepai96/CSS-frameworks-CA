import { updateProfileUrl } from "./callApi.mjs";
import { authFetch } from "./authFetch.mjs";


export async function getProfiles () {
    
    const response = await authFetch (`${updateProfileUrl}`)

    console.log();
    return await response.json();
}

export async function getProfile (name) {
    if (!name) {
        throw new Error("Getting profile requires a name")
    }
    
    const response = await authFetch (`${updateProfileUrl}/${name}`)

    console.log(response);
    return await response.json();
}
