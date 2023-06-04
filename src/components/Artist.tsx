import {Card} from "antd";
import {artistType} from "../utils/Types";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove} from "../utils/Functions";
import {colorBgCardTop, colorBgCardTopHover} from "../utils/Utils";

export default function Artist(artistProps: artistType) {

    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}] 
        border-0 text-slate-200 ml-5 mt-3 cursor-pointer text-center`}>
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
                className="m-auto"
            />
            <p className="font-bold mt-1">
                {
                    artistProps.name.length > 20 ? artistProps.name.slice(0, 20) + "..." :
                        artistProps.name
                }
            </p>
            <FontAwesomeIcon
                icon={faHeart}
                className="hover:text-red-500"
                onClick={() => handleLove("artist", artistProps)}/>
        </Card>
    )
}