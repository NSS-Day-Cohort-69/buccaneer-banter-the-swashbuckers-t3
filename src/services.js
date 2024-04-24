const APIstring = "https://localhost:7201"

export const getFollowers = async (followerId = null, pirateId = null) =>
{
    let fetchString = `${APIstring}/followers?`

    if(followerId != null)
    {
        fetchString += `followerId=${followerId}&`
    }

    if(pirateId != null)
    {
        fetchString += `pirateId=${pirateId}`
    }

    return fetch(fetchString)
}

export const getPirates = (name = null, ship = null) =>
{
    let fetchString = `${APIstring}/pirates?`

    if(name != null)
    {
        fetchString += `name=${name}&`
    }
    if(ship != null)
    {
        fetchString += `ship=${ship}`
    }

    return fetch(fetchString)
}

export const getPirateById = (id) =>
{
    return fetch(`${APIstring}/pirates/${id}`)
}

export const getStories = () =>
{
    return fetch(`${APIstring}/stories`)
}

export const deleteFollower = (id) =>
{
    return fetch(`${APIstring}/followers/${id}`,
        {
            method: "DELETE"
        })
}

export const postFollower = (follower) =>
{
    return fetch(`${APIstring}/followers`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(follower)
        })
}