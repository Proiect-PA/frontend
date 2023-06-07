import Navbar from "../components/Navbar";
import {Button, Input} from "antd";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilSquare, faCheckSquare, faStar} from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import {host} from "../utils/URL";
import {artistType, trackType, UserType, albumType, enhancedType} from "../utils/Types";
import MusicLayout from "../components/MusicLayout";
import {decoded} from "../App";
import {colorBgCardTop} from "../utils/Utils";
import userPfp from "../img/userPfp.png";

export default function Profile() {
    const [artists, setArtists] = useState<(artistType & enhancedType)[]>([])
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
                setUsername(user.username)
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
        console.log(`${host}/users/id=${user?.id}`)
        axios.patch(`${host}/users/id=${user?.id}`, {
            username
        })
            .then(res => console.log(res))

    }


    const handleEnhanceTracks = () => {
        axios.get(`http://localhost:8080/api/user-custom-profile/tracks-recommendations/${user?.id}`)
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
        axios.get(`http://localhost:8080/api/user-custom-profile/albums-recommendations/${user?.id}`)
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
                        val.genre === newData[i].genre) === undefined)
                        newAlbums.push(newData[i])
                }

                setAlbums(newAlbums)
            })
    }

    const handleEnhanceArtists = () => {
        axios.get(`http://localhost:8080/api/user-custom-profile/artists-recommendations/${user?.id}`)
            .then(res => res.data)
            .then((data: artistType[]) => {
                const newData: (artistType & enhancedType)[] = data.map(val => {
                    return {
                        ...val,
                        enhanced: true
                    }
                })

                const newArtists = [...artists]
                for (let i = 0; i < newData.length; i++) {
                    if (newArtists.find(val => val.name === newData[i].name) === undefined)
                        newArtists.push(newData[i])
                }

                setArtists(newArtists)
            })

    }

    return (
        <div className={`text-slate-200 min-h-screen`}>
            <Navbar/>
            <div className={`bg-[${colorBgCardTop}] p-2 flex flex-row items-center w-full`}>
                <img
                    src={userPfp}
                    alt="User's profile picture"
                    width={100}
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
                                     }}
                                     className="cursor-pointer ml-2"/>

                </div>
                <div className="flex flex-col ml-auto mr-10">
                    <Button
                        className={`bg-[${colorBgCardTop}] flex items-center justify-center px-5 py-3 m-2 text-sm font-bold text-white`}
                        onClick={handleEnhanceTracks}>
                        <FontAwesomeIcon icon={faStar}/>
                        Enhance Tracks
                        <FontAwesomeIcon icon={faStar}/>
                    </Button>
                    <Button
                        className={`bg-[${colorBgCardTop}] flex items-center justify-center px-5 py-3 m-2 text-sm font-bold text-white`}
                        onClick={handleEnhanceAlbums}>
                        <FontAwesomeIcon icon={faStar}/>
                        Enhance Albums
                        <FontAwesomeIcon icon={faStar}/>
                    </Button>
                    <Button
                        className={`bg-[${colorBgCardTop}] flex items-center justify-center px-5 py-3 m-2 text-sm font-bold text-white`}
                        onClick={handleEnhanceArtists}>
                        <FontAwesomeIcon icon={faStar}/>
                        Enhance Artists
                        <FontAwesomeIcon icon={faStar}/>
                    </Button>
                </div>
            </div>
            <MusicLayout artists={artists} albums={albums} tracks={tracks}/>
        </div>
    )
}