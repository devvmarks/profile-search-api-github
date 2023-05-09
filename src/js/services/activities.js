import { baseUrl, activitiesQuantity } from "../variables.js"

async function getActivities(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${activitiesQuantity}`)
    return await response.json()
}

export { getActivities }