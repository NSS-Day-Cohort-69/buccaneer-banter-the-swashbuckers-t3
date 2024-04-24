'use client'

import { useEffect, useState } from 'react'
import Dashboard from "@/components/dashboard"
import Login from "@/components/login"
import Navbar from "@/components/navbar"
import '@/styles/globals.css'
import '@/styles/captainslog.css'
import { getFollowers, getPirates, getPirateById, getStories, deleteFollower, postFollower } from "../services.js"

const Index = () =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('pirateId'))


    const testFunctions = async () =>
    {
        debugger
        fetch("https://localhost:7201/followers")
        const followers = await getFollowers()
        const followersWithFollowerIdAndPirateId = await getFollowers(1, 2)
        const pirates = await getPirates()
        const piratesWithNameAndShip = await getPirates("Captain Barnacle Beard", "The Scurvy Scallywag")
        const pirateById = await getPirateById(2)
        const stories = await getStories()
        const postedFollower = await postFollower(
            {
                pirateId: 1,
                followerId: 2,
            }
        )
        console.log(followers)
        console.log(followersWithFollowerIdAndPirateId)
        console.log(pirates)
        console.log(piratesWithNameAndShip)
        console.log(pirateById)
        console.log(stories)
        console.log(postedFollower)
    }

    useEffect(
        () =>
        {
            testFunctions()
        }, []
    )


    if(!isLoggedIn)
    {
        return <Login onLogin={() => setIsLoggedIn(true)} />
    }

    return <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Dashboard />
    </>
}

export default Index
