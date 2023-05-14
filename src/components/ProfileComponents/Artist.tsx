import {Card} from "antd";
import {artist} from "../../utils/Types";

export default function Artist(artistProps: artist) {
    return(
        <Card className="bg-gray-900 border-0 text-slate-200 shadow-slate-50 ml-5 mt-3">
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
                className="m-auto"
            />
            <p className="font-bold mt-1">{artistProps.name}</p>
        </Card>
    )
}