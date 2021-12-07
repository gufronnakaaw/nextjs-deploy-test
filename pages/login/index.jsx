import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [fields, setFields] = useState({});
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(fields).length === 0) {
            alert("data tak boleh kosong");
        }

        if (
            fields.id_users === "wildan" ||
            fields.password_users === "wildan03"
        ) {
            router.push("/dashboard");

            document.cookie = "token=awokawokawok; path=/";
        }
    }

    function handleChange(e) {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Layout title="Login">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="id"
                    style={{ display: "block", marginBottom: "10px" }}
                    onChange={handleChange}
                    name="id_users"
                />
                <input
                    type="password"
                    placeholder="password"
                    style={{ display: "block", marginBottom: "10px" }}
                    onChange={handleChange}
                    name="password_users"
                />
                <button type="submit">login</button>
            </form>
        </Layout>
    );
}
