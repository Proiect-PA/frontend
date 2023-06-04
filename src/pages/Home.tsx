import {Button} from "antd";
import cat from "../img/cat-music.gif"
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import {useState} from "react";
import {colorBgCardTop} from "../utils/Utils";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(false)

    setTimeout(() => {
        setLoading(!loading)
    }, 1000)

    const navigate = useNavigate()
    const handleTrendsClick = () => {
        navigate("/trends")
    }

    const handleProfileClick = () => {
        navigate("/profile")
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col">
                    <Button type="primary" onClick={handleTrendsClick}
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-40 py-5 m-5 text-lg font-bold text-white`}>
                        Trends
                    </Button>
                    <Button type="primary" onClick={handleProfileClick}
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-40 py-5 m-5 text-lg font-bold text-white`}>
                        Profile
                    </Button>

                    <Button type="primary" onClick={() => {
                    }}
                            className={`bg-[${colorBgCardTop}] flex items-center justify-center px-40 py-5 m-5 text-lg font-bold text-white`}>
                        Random Playlist
                    </Button>

                </div>
                <>
                    <img src={cat} alt="cat listening to music"/>
                </>
            </div>
        </>
    )
}
