import {albumType, artistType, trackType, UserType} from "./Types";
import axios from "axios";
import {host} from "./URL";
import {decoded} from "../App";

export const handleLove = (entity : string, entityProps : artistType | trackType | albumType) => {
    axios.get(`${host}/users/email=${decoded.sub}`)
        .then(res => res.data)
        .then((user: UserType) => {
            return user.id
        })
        .then(id => {
            axios.post(`http://localhost:8080/api/add-favourite-${entity}`, {
                userId: id,
                entity: entityProps
            }).then(res => console.log(res))
        })
}
