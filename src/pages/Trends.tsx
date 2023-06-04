import Navbar from "../components/Navbar";
import MusicLayout from "../components/MusicLayout";
import {useEffect, useState} from "react";
import axios from "axios"
import {albumType, artistType, trackType} from "../utils/Types";
import {colorBgPrimary} from "../utils/Utils";

export default function Trends() {

    const [artists, setArtists] = useState<artistType[]>([])
    const [tracks, setTracks] = useState<trackType[]>([])
    const [albums, setAlbums] = useState<albumType[]>([])


    useEffect(() => {

        axios.get("http://localhost:8080/api/music/albums/all")
            .then(res => res.data)
            .then(data => {
                    setAlbums(data)
                }
            )
            .catch(err => console.error(err))


        axios.get("http://localhost:8080/api/music/artists/all")
            .then(res => res.data)
            .then(data => {
                    setArtists(data)
                }
            )
            .catch(err => console.error(err))

        axios.get("http://localhost:8080/api/music/tracks/all")
            .then(res => res.data)
            .then(data => {
                    setTracks(data)
                }
            )
            .catch(err => console.error(err))


    }, [])

    return (
        <div className={`bg-[${colorBgPrimary}] text-slate-200`}>
            <Navbar/>
            <MusicLayout artists={artists} albums={albums} tracks={tracks}/>
        </div>
    )
}