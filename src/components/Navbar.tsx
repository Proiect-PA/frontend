import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faHome} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {Dropdown, MenuProps, Input, Button} from "antd";
import {Link} from "react-router-dom";

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

    return (<>
            <div className="flex flex-row items-center p-5">
                <div>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faHome} className="cursor-pointer ml-5"/>
                    </Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} className="cursor-pointer ml-5"
                                     onClick={() => setSearchable(!searchable)}
                    />
                </div>
                <div className="w-1/3">
                    {
                        searchable ?
                            <div className="flex flex-row">
                            <Input className="ml-5 mr-3 bg-gray-800 text-slate-200 placeholder-slate-400 w-1/1"
                                   placeholder="Search a track, an album, an artist or whatever you want"/>
                                <Button className="text-slate-200">
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