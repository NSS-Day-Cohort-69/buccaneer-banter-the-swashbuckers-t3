import StoryList from '../components/story/storylist'
import ShipMates from '../components/shipmates'
import WantedPoster from '../components/profile/wantedposter'
import { useEffect, useState } from 'react'
import { getFollowers, getPirateById } from '@/services'

export default function Dashboard()
{
    const [currentPirate, setCurrentPirate] = useState({ id: 0 })
    const [myFavoriteScallywags, setScallyWags] = useState([])

    const getPirate = (id) =>
    {
        getPirateById(id).then(res => res.json()).then((pirate => { setCurrentPirate(pirate) }))
    }

    const getFavoritePirates = (id) =>
    {
        debugger
        getFollowers(id).then(res => res.json()).then(follows => 
        {
            setScallyWags(follows)
        })
    }

    useEffect(() =>
    {
        const pirate_id = localStorage.getItem("pirateId") ?? 0
        if(pirate_id > 0)
        {
            getPirate(pirate_id)
            getFavoritePirates(pirate_id)
        }
    }, [])

    return (
        <main className='captainsLog'>
            <section className="log__left">
                <div className="px-1 py-5">
                    <h2 className='text-7xl font-pirate tracking-wide'>Welcome, ye Scurvy Dog!</h2>
                </div>
                <StoryList myFavoriteScallywags={myFavoriteScallywags} getFavoritePirates={getFavoritePirates} />
            </section>
            <section className="log__right">
                <div>
                    <WantedPoster currentPirate={currentPirate} />
                </div>
                <ShipMates myFavoriteScallywags={myFavoriteScallywags} currentPirate={currentPirate} />
            </section>
        </main>
    )
}
