import Album from "./Album";
import {v4} from 'uuid'
import {enhancedType, trackType} from "../utils/Types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import {Button} from "antd";
import Track from "./Track";
import {colorLayoutOnTop} from "../utils/Utils";

export default function TracksLibrary({tracks} : {tracks: (trackType & enhancedType)[]}) {
    const tracksArray = Array.from(tracks)

    const [indexStart, setIndexStart] = useState<number>(0)
    const [indexEnd, setIndexEnd] = useState<number>(4)

    return (

        <div className={`m-2 bg-[${colorLayoutOnTop}] p-3 `}>
            <h2 className="text-xl font-semibold">Tracks</h2>

            <div className="flex flex-row w-1/1 min-h-full items-center text-center">
                <Button onClick={() => {
                    setIndexStart((last) => last !== 0 ? last - 1 : last)
                    setIndexEnd((last) => last !== 4 ? last - 1 : last)
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer"/>
                </Button>
                {
                    tracksArray.length !== 0 ? (
                        tracksArray.slice(indexStart, indexEnd).map((track) => {
                            return <Track key={v4()} name={track.name} album={track.album} enhanced={track.enhanced} id={track.id}/>
                        })) : (<div> No tracks found</div>)
                }

                <Button
                    className="ml-5"
                    onClick={() => {
                    setIndexStart((last) => indexEnd - last >= 4 ? last + 1 : last)
                    setIndexEnd((last) => last !== tracksArray.length - 1 ? last + 1 : last)
                }}>
                    <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer"/>
                </Button>

            </div>
        </div>
    )
}