import React from 'react';
import Layout from '../Components1/Layouts/Layout'; // Assuming Layout component is imported from './Components1/Layouts/Layout.js' or './Components1/Layouts/Layout.jsx'
import { useAuth } from '../context/auth';
function Home() {
    const[auth, setAuth]=useAuth()
    return (
        <Layout title={"Best offers"}>
            <h4>Home</h4>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    );
}

export default Home;
