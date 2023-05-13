import Navbar from "../components/Navbar";
import {Divider} from "antd";
import Artist from "../components/ProfileComponents/Artist";
import Track from "../components/ProfileComponents/Track";

export default function Profile() {
    return (
        <>
            <Navbar/>
            <>
                <div className="flex flex-row items-center">
                    <img
                        src="../../user.png"
                        alt="User's profile picture"
                        width={350}
                    />
                    <div>
                        User
                    </div>
                </div>
                <Divider/>
            </>

            <>
                <h2>Top Artists this month</h2>
                <div className="flex flex-row items-center">
                    <Artist name={"Weekendul"}/>
                    <Artist name={"Lana Del Ray"}/>
                </div>
                <Divider/>
            </>

            <>
                <h2>Top Tracks this month</h2>
                <div className="flex flex-col">
                    <Track title={"Track 1"} artist={"Weekendul"}/>
                    <Track title={"Track 2"} artist={"Weekendul"}/>
                    <Track title={"Track 3"} artist={"Weekendul"}/>
                </div>
                <Divider/>
            </>

        </>
    )
}