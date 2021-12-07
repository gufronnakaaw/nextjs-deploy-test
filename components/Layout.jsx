import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    fontSize: "20px",
                }}
            >
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            </ul>

            {children}
        </>
    );
}
