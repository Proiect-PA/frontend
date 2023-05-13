import LoginForm from "../components/LoginForm";
import {Divider} from "antd";

export default function Login() {
    return (
        <div>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center m-5">
                <h1>Log in to your Account</h1>
                <h4>Welcome back!</h4>
                <Divider plain className="text-slate-200">connect using your credentials</Divider>
                <LoginForm/>
            </div>
        </div>
    )
}