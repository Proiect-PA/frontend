import Navbar from "../components/Navbar";
import {Button, Input, Layout} from "antd";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilSquare, faCheckSquare, faStar} from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import {host} from "../utils/URL";
import {artistType, trackType, UserType, albumType, enhancedType} from "../utils/Types";
import MusicLayout from "../components/MusicLayout";
import {decoded} from "../App";
import {colorBgCardTop, colorBgPrimary} from "../utils/Utils";

const {Content} = Layout;

export default function Profile() {
    const [artists, setArtists] = useState<artistType[]>([])
    const [tracks, setTracks] = useState<(enhancedType & trackType)[]>([])
    const [albums, setAlbums] = useState<(albumType & enhancedType)[]>([])

    const [username, setUsername] = useState<string>("username")
    const [editUsername, setEditUsername] = useState<boolean>(false)
    const [user, setUser] = useState<UserType>()

    useEffect(() => {
        axios.get(`${host}/users/email=${decoded.sub}`)
            .then(res => res.data)
            .then((user: UserType) => {
                setUser(user)
                return user.id
            })
            .then((id) => {
                axios.get(`http://localhost:8080/api/music/user/${id}/albums`)
                    .then(res => res.data)
                    .then(data => {
                            setAlbums(data)
                        }
                    )
                    .catch(err => console.error(err))


                axios.get(`http://localhost:8080/api/music/user/${id}/artists`)
                    .then(res => res.data)
                    .then(data => {
                            setArtists(data)
                        }
                    )
                    .catch(err => console.error(err))

                axios.get(`http://localhost:8080/api/music/user/${id}/tracks`)
                    .then(res => res.data)
                    .then(data => {
                            setTracks(data)
                        }
                    )
                    .catch(err => console.error(err))
            })
    }, [])

    const handleChangeUsername = () => {
        axios.patch(`${host}/users/id=${user?.id}`, {
            username
        })
            .then(res => console.log(res))

    }


    const handleEnhanceTracks = () => {
        axios.get(`http://localhost:8080/api/tracks-recommendations/${user?.id}`)
            .then(res => res.data)
            .then((data: trackType[]) => {
                const newData: (trackType & enhancedType)[] = data.map(val => {
                    return {
                        ...val,
                        enhanced: true
                    }
                })

                const newTracks = [...tracks]
                for (let i = 0; i < newData.length; i++) {
                    if (newTracks.find(val => val.name === newData[i].name && val.album === newData[i].album) === undefined)
                        newTracks.push(newData[i])
                }

                setTracks(newTracks)
            })


    }

    const handleEnhanceAlbums = () => {
        axios.get(`http://localhost:8080/api/albums-recommendations/${user?.id}`)
            .then(res => res.data)
            .then((data: albumType[]) => {
                const newData: (albumType & enhancedType)[] = data.map(val => {
                    return {
                        ...val,
                        enhanced: true
                    }
                })

                const newAlbums = [...albums]
                for (let i = 0; i < newData.length; i++) {
                    if (newAlbums.find(val => val.title === newData[i].title &&
                        val.artist === newData[i].artist &&
                        val.genres === newData[i].genres) === undefined)
                        newAlbums.push(newData[i])
                }

                setAlbums(newAlbums)
            })
    }

    return (
        <div className={`text-slate-200 min-h-screen`}>
            <Navbar/>
            <div className={`bg-[${colorBgCardTop}] m-2 flex flex-row items-center p-5`}>
                <img
                    src="../../user.png"
                    alt="User's profile picture"
                    width={150}
                />
                <div className="flex flex-row items-center">
                    {
                        editUsername ?
                            <Input placeholder={username} onChange={(e) => setUsername(e.target.value)}
                                   className="font-extrabold text-3xl ml-10 text-slate-200 placeholder-slate-400"
                            />
                            : <div className="font-extrabold text-3xl ml-10">
                                {username}
                            </div>
                    }
                    <FontAwesomeIcon icon={editUsername ? faCheckSquare : faPencilSquare}
                                     onClick={() => {

                                         if (editUsername) {
                                             handleChangeUsername()
                                         }

                                         setEditUsername(!editUsername)

                                     }
                                     }
                                     className="cursor-pointer ml-2"/>

                    <div className="flex flex-col">
                        <Button
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-20 py-5 m-5 text-md font-bold text-white`}
                            onClick={handleEnhanceTracks}>
                            <FontAwesomeIcon icon={faStar}/>
                            Enhance Tracks
                            <FontAwesomeIcon icon={faStar}/>
                        </Button>
                        <Button
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-40 py-5 m-5 text-md font-bold text-white`}
                            onClick={handleEnhanceAlbums}>
                            <FontAwesomeIcon icon={faStar}/>
                            Enhance Albums
                            <FontAwesomeIcon icon={faStar}/>
                        </Button>
                        <Button
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-40 py-5 m-5 text-md font-bold text-white`}>
                            <FontAwesomeIcon icon={faStar}/>
                            Enhance Artists
                            <FontAwesomeIcon icon={faStar}/>
                        </Button>
                    </div>
                </div>
            </div>
            <MusicLayout artists={artists} albums={albums} tracks={tracks}/>
        </div>
    )
}