import {albumType, artistType, trackType, UserType} from "./Types";
import axios from "axios";
import {host} from "./URL";
export const handleLove = (entity : string, entityProps : artistType | trackType | albumType) => {
    axios.get(`${host}/users/email=${localStorage.getItem("email")}`)
        .then(res => res.data)
        .then((user: UserType) => {
            return user.id
        })
        .then(id => {
            axios.post(`http://localhost:8080/api/user-custom-profile/add-favourite-${entity}`, {
                userId: id,
                entity: entityProps
            }).then(res => {

            })
        })
}


export const handleUnlove = (entity : string, entityProps : artistType | trackType | albumType) => {
    axios.get(`${host}/users/email=${localStorage.getItem("email")}`)
        .then(res => res.data)
        .then((user: UserType) => {
            return user.id
        })
        .then(id => {
            axios.post(`http://localhost:8080/api/user-custom-profile/remove-favourite-${entity}`, {
                userId: id,
                entity: entityProps
            }).then(res => {

            })
        })
}


export const handlePlay = (entity : string, entityProps : artistType | trackType | albumType) => {
    axios.get(`${host}/users/email=${localStorage.getItem("email")}`)
        .then(res => res.data)
        .then((user: UserType) => {
            return user.id
        })
        .then(id => {
            axios.post(`http://localhost:8080/api/user-custom-profile/add-recent-${entity}`, {
                userId: id,
                entity: entityProps
            }).then(res => {
                // console.log(res)
            })
        })
}
