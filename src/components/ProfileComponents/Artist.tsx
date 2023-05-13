import {Card} from "antd";
import {artist} from "../../utils/Types";

export default function Artist(artistProps: artist) {
    return(
        <Card>
            <img
                src="../../user.png"
                alt="User's profile picture"
                width={50}
            />
            <p>{artistProps.name}</p>
        </Card>
    )
}