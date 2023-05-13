import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Dropdown, MenuProps} from "antd";
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

    return (<>
            <div className="flex flex-row items-center m-5">
                <div>
                    <FontAwesomeIcon icon={faHome}/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch}/>
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