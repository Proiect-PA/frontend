import {albumType, artistType, trackType} from "../utils/Types";
import Navbar from "../components/Navbar";
import Album from "../components/Album";
import Track from "../components/Track";
import Artist from "../components/Artist";
import {searchedResults, searchedResults2} from "../services/router";

export function setSearchedResults (results : (artistType | albumType | trackType)[]) {
    while(searchedResults.length > 0) {
        searchedResults.pop()
    }
    results.forEach((result) => {
        searchedResults.push(result)
    })
}

export function setSearchedResults2 (results : (artistType | albumType | trackType)[]) {
    while(searchedResults2.length > 0) {
        searchedResults2.pop()
    }
    results.forEach((result) => {
        searchedResults2.push(result)
    })
}

export default function SearchedLibrary({searched}: { searched: (artistType | albumType | trackType)[] }) {

    return (
        <div>
            <Navbar/>
            <div className="flex flex-row flex-wrap font-bold">
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