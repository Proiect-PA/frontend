import {enhancedType, trackType} from "../utils/Types";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {handleLove} from "../utils/Functions";
import {colorBgCardTop, colorBgCardTopHover} from "../utils/Utils";
import {Card} from "antd";

export default function Track(trackProps: trackType & enhancedType) {
    return (
        <Card hoverable className={`hover:bg-[${colorBgCardTopHover}] ml-5 
        border-0 flex flex-col shadow-slate-50 font-xs cursor-pointer p-5 rounded
        font-bold text-slate-200 text-center`}>
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
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
                className="hover:text-red-500"
                onClick={() => handleLove("track", trackProps)}/>
            {
                trackProps.enhanced === true && <FontAwesomeIcon icon={faStar}/>
            }
        </Card>
    )
}