import {enhancedType, trackType} from "../utils/Types";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove, handleUnlove} from "../utils/Functions";
import {colorBgCardTopHover} from "../utils/Utils";
import {Card} from "antd";
import song from "../img/song.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {host} from "../utils/URL";
import {decoded} from "../App";

export default function Track(trackProps: trackType & enhancedType) {

    const [loved, setLoved] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`${host}/users/email=${decoded.sub}`)
            .then(res => res.data)
            .then(user => user.id)
            .then((id) =>
                axios.post(`${host}/music/is-loved-track`, {
                    entity: trackProps,
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
            handleLove("track", trackProps)
            setLoved(true)
        } else {
            handleUnlove("track", trackProps)
            setLoved(false)
        }
    }

    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}] ml-5 
        border-0 text-slate-200 ml-5 mt-3 cursor-pointer text-center font-bold h-full w-1/4`}>
            <img
                src={song}
                alt="Song"
                width={50}
                className="m-auto"
            />
            <div className="flex flex-col ml-3 mt-1 ">
                <p>
                    {
                        trackProps.name.length > 20 ? trackProps.name.slice(0, 20) + "..."
                            : trackProps.name
                    }
                </p>
                <p>
                    {
                        trackProps.album.artist.name.length > 20 ? trackProps.album.artist.name.slice(0, 20) + "..."
                            : trackProps.album.artist.name
                    }
                </p>
            </div>
            <FontAwesomeIcon
                icon={faHeart}
                className={`hover:text-red-500 ${loved ? "text-red-500" : ""}`}
                onClick={handleOnClick}/>
            {
                trackProps.enhanced === true && <FontAwesomeIcon icon={faStar}/>
            }
        </Card>
    )
}