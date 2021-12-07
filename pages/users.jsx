import Layout from "../components/Layout";

export default function Users({ users }) {
    console.log(users);
    return (
        <Layout title="Users">
            <h1>Users</h1>

            {users.map((el, index) => {
                return (
                    <ul key={index}>
                        <li>{el.name}</li>
                        <li>{el.email}</li>
                        <li>{el.website}</li>
                    </ul>
                );
            })}
        </Layout>
    );
}

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();

    return {
        props: {
            users: result,
        },
    };
}
