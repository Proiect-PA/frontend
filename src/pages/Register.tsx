import RegisterForm from "../components/RegisterForm";
import {Divider} from "antd";

export default function Register() {
    return (
        <div className="bg-gray-800 text-slate-200">
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center p-5">
                <h1 className="text-xl font-bold">Register</h1>
                <Divider plain style={{color: "rgb(226 232 240)", borderColor: "rgb(226 232 240)"}}>create an account</Divider>
                <RegisterForm/>
            </div>
        </div>
    )
}