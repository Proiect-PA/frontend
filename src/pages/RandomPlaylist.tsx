import Navbar from "../components/Navbar";
import TracksLibrary from "../components/TracksLibrary";
import {useEffect, useState} from "react";
import {enhancedType, trackType} from "../utils/Types";
import axios from "axios";
import {host} from "../utils/URL";


export default function RandomPlaylist() {

    const [tracks, setTracks] = useState<(enhancedType & trackType)[]>([])

    useEffect(() => {
        axios.get(`${host}/music/random-playlist`)
            .then(res => res.data)
            .then(data => {
                setTracks(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="text-white">
            <Navbar/>
            <h2 className="font-semibold text-3xl text-left p-5 m-5" >A fine selection of songs just for you</h2>
            <TracksLibrary tracks={tracks}/>
        </div>
    )
}