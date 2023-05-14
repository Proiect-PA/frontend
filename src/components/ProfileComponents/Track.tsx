import {track} from "../../utils/Types";

export default function Track(trackProps: track) {
    return (
        <div className="flex flex-row shadow-slate-50 ml-5 mt-3 font-xs hover:bg-gray-950 cursor-pointer">
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
            />
            <div className="flex flex-col ml-3 mt-1">
                <p>
                    {trackProps.title}
                </p>
                <p>
                    {trackProps.artist}
                </p>
            </div>
        </div>
    )
}