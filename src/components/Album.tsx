import {albumType} from "../utils/Types";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove} from "../utils/Functions";
import {colorBgCardTop, colorBgCardTopHover} from "../utils/Utils";
import {Card} from "antd";


export default function Album(albumProps: albumType) {
    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}]
        border-0 mt-5 flex flex-row shadow-slate-50 font-xs cursor-pointer p-5 rounded
        font-bold text-slate-200 justify-center`}>
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
            />
            <div className="flex flex-col ml-3 mt-1">
                <p>
                    {albumProps.title}
                </p>
                <p>
                    {albumProps.artist.name}
                </p>

                {
                    albumProps.genres.map(genre => {
                        return <p>
                            {genre.name}
                        </p>
                    })
                }

            </div>
            <FontAwesomeIcon
                icon={faHeart}
                className="hover:text-red-500"
                onClick={() => handleLove("album", albumProps)}/>
        </Card>
    )
}