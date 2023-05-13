import RegisterForm from "../components/RegisterForm";
import {Divider} from "antd";

export default function Register() {
    return (
        <div>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center m-5">
                <h1>Register</h1>
                <Divider plain className="text-slate-200">create an account</Divider>
                <RegisterForm/>
            </div>
        </div>
    )
}