import { baseUrl, repositoriesQuantity } from "../variables";

async function getActivities(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}
export { getActivities }