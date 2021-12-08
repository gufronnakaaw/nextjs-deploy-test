import Layout from "../../components/Layout";

export default function Dashboard() {
    return (
        <Layout title="Dashboard">
            <h1>Dashboard</h1>
        </Layout>
    );
}

export function getServerSideProps({ req }) {
    if (Object.keys(req.cookies).length === 0) {
        return {
            redirect: {
                destination: "/login",
            },
        };
    }

    return {
        props: {},
    };
}
