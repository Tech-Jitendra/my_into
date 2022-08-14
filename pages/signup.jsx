import React from 'react'
import styles from '../styles/Home.module.css'
import { Card } from 'antd';

export const signup = () => {
    const App = () => (
        <div>
            <Card
                className={styles.card}
                title="Default size card"
                extra={<a href="#">Please sign up the design</a>}
            // style={{
            //     width: "70%",
            // }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
    return (
        <div>
            <div className={styles.grid}>
                <a href="/" className={styles.card}>
                    <h2>Home &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>
            </div>
            <div className={styles.grid}>
                <a href="/newfile" className={styles.card}>
                    <h2>New File &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>
            </div>

            <div className={styles.signup_main_class}>
                <div>
                    <App />
                </div>
                <div>
                    <App />
                </div>
            </div>


        </div>
    )
}

export default signup;