const APIstring = "https://localhost:7201"

const getFollowers = (followerId = null, pirateId = null) =>
{
    let fetchString = `${APIstring}/followers?`

    if(followerId != null)
    {
        fetchString += `followerId=${followerId}&`
    }

    if(pirateId != null)
    {
        fetchString += `followerId=${followerId}`
    }

    return fetch(fetchString).then(res => res.json())
}

const getPirates = (name = null, ship = null) =>
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

    return fetch(fetchString).then(res => res.json())
}

const getPirateById = (id) =>
{
    return fetch(`${APIstring}/pirates/${id}`).then(res => res.json())
}

const getStories = () =>
{
    return fetch(`${APIstring}/stories`).then(res => res.json())
}

const deleteFollower = (id) =>
{
    fetch(`${APIstring}/followers/${id}`,
        {
            method: "DELETE"
        })
}

const postFollower = (follower) =>
{
    return fetch(`${APIstring}/followers`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(follower)
        })
}