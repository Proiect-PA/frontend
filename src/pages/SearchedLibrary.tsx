import {albumType, artistType, trackType} from "../utils/Types";
import Navbar from "../components/Navbar";
import Album from "../components/Album";
import Track from "../components/Track";
import Artist from "../components/Artist";

export default function SearchedLibrary({searched}: { searched: (artistType | albumType | trackType)[] }) {

    return (
        <div>
            <Navbar/>
            <div className="flex flex-col font-bold">
                {
                    searched.length !== 0 ?
                    searched.map((item: any) => {
                        return item.hasOwnProperty("title") ?
                            <Album artist={item.artist} genre={item.genre} title={item.title} id={item.id}/> :
                            item.hasOwnProperty("album") ?
                                <Track name={item.name} album={item.album} id={item.id}/>
                                : <Artist name={item.name} id={item.id}/>
                    }) :
                        <div className={"text-white flex items-center justify-center"}> No results :( </div>
                }
            </div>
        </div>

    )
}