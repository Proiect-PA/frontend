import LoginForm from "../components/LoginForm";
import {Divider} from "antd";

export default function Login() {
    return (
        <div className="bg-gray-800 text-slate-200">
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center p-5">
                <h1 className="text-xl font-bold">Log in to your Account</h1>
                <h4 className="text-base font-semibold">Welcome back!</h4>
                <Divider plain style={{color: "rgb(226 232 240)", borderColor: "rgb(226 232 240)"}}>connect using your
                    credentials</Divider>
                <LoginForm/>
            </div>
        </div>
    )
}