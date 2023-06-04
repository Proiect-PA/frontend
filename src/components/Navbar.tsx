import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faHome} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {Dropdown, MenuProps, Input, Button} from "antd";
import {Link} from "react-router-dom";
import {colorBgCardTop} from "../utils/Utils";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={"/profile"}> Account </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={"/login"}> Logout </Link>
        ),
    }
];


export default function Navbar() {
    const [searchable, setSearchable] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>("")

    return (<>
            <div className="flex flex-row items-center p-5 bg-[#151c26]">
                <div>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faHome} className="cursor-pointer ml-5 text-white"/>
                    </Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} className="cursor-pointer ml-5 text-white"
                                     onClick={() => setSearchable(!searchable)}
                    />
                </div>
                <div className="w-1/3">
                    {
                        searchable ?
                            <div className="flex flex-row">
                                <Input className={`ml-5 border-0 mr-3 bg-[${colorBgCardTop}] text-white font-semibold placeholder-white w-1/1`}
                                       placeholder="Search a track, an album, an artist or whatever you want"
                                       onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <Button type="primary" className={`bg-[${colorBgCardTop}] text-white`}>
                                    Search
                                </Button>
                            </div>
                            : ""
                    }
                </div>
                <div
                    className="justify-self-end ml-auto">

                    <Dropdown menu={{items}} placement="bottomLeft" arrow>
                        <img
                            src="../../user.png"
                            alt="User's profile picture"
                            width={30}
                            className="cursor-pointer"
                        />
                    </Dropdown>

                </div>
            </div>
        </>
    )
}