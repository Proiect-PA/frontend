import {Form, Input, Checkbox, Button, Image} from "antd";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons"

export default function RegisterForm() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigator = useNavigate()

    function login() {
        const userCredentials = {
            email,
            password
        }
        // console.log(userCredentials)
        navigator("/")
    }

    return (
        <Form
            name="basic"
            wrapperCol={{span: 25}}
            layout="vertical"
            initialValues={{remember: true}}
            autoComplete="off"
        >
            <Form.Item
                name="firstname"
                rules={[{required: true, message: 'Please input your firstname!'}]}
            >
                <Input onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname"
                       prefix={<FontAwesomeIcon icon={faUser}/>}/>
            </Form.Item>
            <Form.Item
                name="lastname"
                rules={[{required: true, message: 'Please input your lastname!'}]}
            >
                <Input onChange={(e) => setLastname(e.target.value)} placeholder="Lastname"
                       prefix={<FontAwesomeIcon icon={faUser}/>}/>
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       prefix={<FontAwesomeIcon icon={faEnvelope}/>}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                                prefix={<FontAwesomeIcon icon={faLock}/>}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 25}}>
                <Checkbox className="text-slate-200">Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{span: 25}}>
                <Button type="primary" htmlType="submit" onClick={login} className="bg-blue-200">
                    Register
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{span: 25}}>
                <p className="text-slate-200">Already have an account? <Link to="/login" className="hover:font-bold"> Log in </Link></p>
            </Form.Item>
        </Form>
    )
}