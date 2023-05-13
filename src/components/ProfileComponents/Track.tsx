import {track} from "../../utils/Types";

export default function Track(trackProps: track) {
    return (
        <div className="flex flex-row">
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
            />
            <div className="flex flex-col">
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