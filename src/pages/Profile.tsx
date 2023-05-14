import Navbar from "../components/Navbar";
import {Divider, Input, Layout} from "antd";
import Artist from "../components/ProfileComponents/Artist";
import Track from "../components/ProfileComponents/Track";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilSquare, faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import Library from "../components/ProfileComponents/Library";

const {Header, Content, Sider} = Layout;

export default function Profile() {

    const [username, setUsername] = useState<string>("username")
    const [editUsername, setEditUsername] = useState<boolean>(false)

    return (
        <Layout className="bg-gray-900 text-slate-200">
            <Navbar/>
            <Layout className="bg-gray-800 text-slate-200">
                <Content >
                    <div className="flex flex-row items-center ">
                        <img
                            src="../../user.png"
                            alt="User's profile picture"
                            width={150}
                        />
                        <div className="flex flex-row items-center">
                            {
                                editUsername ?
                                    <Input placeholder={username} onChange={(e) => setUsername(e.target.value)}
                                           className="font-extrabold text-3xl ml-10 bg-gray-800 text-slate-200 placeholder-slate-400"
                                    />
                                    : <div className="font-extrabold text-3xl ml-10">
                                        {username}
                                    </div>
                            }
                            <FontAwesomeIcon icon={editUsername ? faCheckSquare : faPencilSquare}
                                             onClick={() => setEditUsername(!editUsername)}
                                             className="cursor-pointer ml-2"/>
                        </div>
                    </div>
                    <Layout className="bg-gray-800 text-slate-200">
                        <Sider className="bg-gray-800 text-slate-200">
                            <Library/>
                        </Sider>
                        <Content>
                            <div>
                                <h2 className="text-xl font-semibold">Top Artists this month</h2>
                                <div className="flex flex-row items-center">
                                    <Artist name={"Weekendul"}/>
                                    <Artist name={"Lana Del Ray"}/>
                                </div>
                                <Divider/>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Top Tracks this month</h2>
                                <div className="flex flex-col">
                                    <Track title={"Track 1"} artist={"Weekendul"}/>
                                    <Track title={"Track 2"} artist={"Weekendul"}/>
                                    <Track title={"Track 3"} artist={"Weekendul"}/>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    )
}