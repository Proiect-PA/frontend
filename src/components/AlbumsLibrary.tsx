import Album from "./Album";
import {v4} from 'uuid'
import {albumType, enhancedType} from "../utils/Types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import {Button} from "antd";
import {colorLayoutOnTop} from "../utils/Utils";

export default function AlbumsLibrary({albums}: { albums: (albumType & enhancedType)[] }) {

    const [indexStart, setIndexStart] = useState<number>(0)
    const [indexEnd, setIndexEnd] = useState<number>(2)

    return (
        <div className={`flex bg-[${colorLayoutOnTop}] flex-col p-5 w-1/1 min-h-full text-center`}>
            <h2 className="text-xl font-semibold">Albums</h2>

            <Button onClick={() => {
                setIndexStart((last) => last !== 0 ? last - 1 : last)
                setIndexEnd((last) => last !== 7 ? last - 1 : last)
            }}>
                <FontAwesomeIcon icon={faArrowUp} className="cursor-pointer"/>
            </Button>
            {
                albums.length !== 0 ? (
                    albums.slice(indexStart, indexEnd).map((album) => {
                        return <Album key={v4()} title={album.title} artist={album.artist} genres={album.genres} enhanced={album.enhanced}/>
                    })) : (<div> No albums found</div>)
            }

            <Button
                className="mt-5"
                onClick={() => {
                setIndexStart((last) => last + 1)
                setIndexEnd((last) => last !== albums.length - 1 ? last + 1 : last)
            }}>
                <FontAwesomeIcon icon={faArrowDown} className="cursor-pointer"/>
            </Button>

        </div>
    )
}