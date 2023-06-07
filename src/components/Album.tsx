import {albumType, enhancedType} from "../utils/Types";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove, handleUnlove} from "../utils/Functions";
import {colorBgCardTopHover} from "../utils/Utils";
import {Card} from "antd";
import album from "../img/album.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {host} from "../utils/URL";
import {decoded} from "../App";

export default function Album(albumProps: albumType & enhancedType) {

    const [loved, setLoved] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`${host}/users/email=${decoded.sub}`)
            .then(res => res.data)
            .then(user => user.id)
            .then((id) =>
                axios.post(`${host}/music/is-loved-album`, {
                    entity: albumProps,
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
            handleLove("album", albumProps)
            setLoved(true)
        } else {
            handleUnlove("album", albumProps)
            setLoved(false)
        }
    }



    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}]
        border-0 text-slate-200 ml-5 mt-3 cursor-pointer text-center font-bold`}>
            <img
                src={album}
                alt="User's profile picture"
                width={50}
                className="m-auto"
            />
            <div className="flex flex-col ml-3 mt-1">
                <p>
                    {
                        albumProps.title.length > 20 ? albumProps.title.slice(0, 20) + "..." :
                            albumProps.title
                    }
                </p>
                <p>
                    {
                        albumProps.artist.name.length > 20 ? albumProps.artist.name.slice(0, 20) + "..." :
                            albumProps.artist.name
                    }
                </p>

                {/*{*/}
                {/*    albumProps.genre.name.length > 20 ? albumProps.genre.name.slice(0, 20) + "..." :*/}
                {/*        albumProps.genre.name*/}
                {/*}*/}

            </div>
            <FontAwesomeIcon
                icon={faHeart}
                className={`hover:text-red-500 ${loved ? "text-red-500" : ""}`}
                onClick={handleOnClick}
            />
            {
                albumProps.enhanced === true && <FontAwesomeIcon icon={faStar}/>
            }
        </Card>
    )
}