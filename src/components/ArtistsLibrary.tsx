import {artistType} from "../utils/Types";
import {useState} from "react";
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Album from "./Album";
import {v4} from "uuid";
import Artist from "./Artist";
import {colorLayoutOnTop} from "../utils/Utils";


export default function ArtistsLibrary({artists}: { artists: artistType[] }) {

    const [indexStart, setIndexStart] = useState<number>(0)
    const [indexEnd, setIndexEnd] = useState<number>(4)

    return (
        <div className={`m-2 bg-[${colorLayoutOnTop}] p-3`}>
            <h2 className="text-xl font-semibold">Artists</h2>
            <div className="flex flex-row items-center">
                <Button onClick={() => {
                    setIndexStart((last) => last !== 0 ? last - 1 : last)
                    setIndexEnd((last) => last !== 7 ? last - 1 : last)
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer"/>
                </Button>
                {
                    artists.length !== 0 ? (
                        artists.slice(indexStart, indexEnd).map((artist) => {
                            return <Artist key={v4()} name={artist.name}/>
                        })) : (<div> No artists found</div>)
                }

                <Button
                    className="ml-5"
                    onClick={() => {
                    setIndexStart((last) => last + 1)
                    setIndexEnd((last) => last !== artists.length - 1 ? last + 1 : last)
                }}>
                    <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer"/>
                </Button>
            </div>
        </div>
    )
}