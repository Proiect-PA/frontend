import {Card} from "antd";
import {artistType, enhancedType} from "../utils/Types";
import {faHeart, faPlay, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove, handlePlay, handleUnlove} from "../utils/Functions";
import {colorBgCardTopHover, isPlaying, setPlaying} from "../utils/Utils";
import singer from "../img/singer.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {host} from "../utils/URL";
import {toast} from "react-toastify";
import {setSearchedResults} from "../pages/SearchedLibrary";
import {useNavigate} from "react-router-dom";

export default function Artist(artistProps: artistType & enhancedType) {

    const [loved, setLoved] = useState<boolean>(false);
    const [played, setPlayed] = useState<boolean>(false);

    const navigator = useNavigate()

    useEffect(() => {
        axios.get(`${host}/users/email=${localStorage.getItem("email")}`)
            .then(res => res.data)
            .then(user => user.id)
            .then((id) =>
                axios.post(`${host}/music/is-loved-artist`, {
                    entity: artistProps,
                    userId: id
                })
                    .then(res => {
                        if (res.data === true) {
                            setLoved(true)
                        }
                    })
            )

    }, [])

    const handleOnClick = () => {
        if(!loved) {
            handleLove("artist", artistProps)
            setLoved(true)
        } else {
            handleUnlove("artist", artistProps)
            setLoved(false)
        }
    }

    const handleOnPlay = () => {
        if(isPlaying && !played) {
            toast.info("Already playing something")
        }
        else if (!played && isPlaying === false) {
            handlePlay("artist", artistProps)
            setPlayed(true)
            setPlaying(true)
        } else {
            setPlayed(false)
            setPlaying(false)
        }
    }

    const seeAlbums = () => {
        axios.get(`${host}/music/artist/${artistProps.id}/albums`)
            .then(res => res.data)
            .then(albums => {
                    setSearchedResults(albums)
                    navigator("/searched")
                }
            )
    }


    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}] 
        border-0 text-slate-200 ml-5 mt-3 cursor-pointer text-center font-bold h-full w-1/4`}
        onClick={seeAlbums}>
            <FontAwesomeIcon icon={faPlay}
                             className={`hover:text-blue-500 ${played ? "text-blue-500" : ""}`}
                             onClick={handleOnPlay}/>
            <img
                src={singer}
                alt="User's profile picture"
                width={50}
                className="m-auto"
            />
            <p className="mt-1">
                {
                    artistProps.name.length > 20 ? artistProps.name.slice(0, 20) + "..." :
                        artistProps.name
                }
            </p>
            <FontAwesomeIcon
                icon={faHeart}
                className={`hover:text-red-500 ${loved ? "text-red-500" : ""}`}
                onClick={handleOnClick}
            />
            {
                artistProps.enhanced === true && <FontAwesomeIcon icon={faStar}/>
            }
        </Card>
    )
}