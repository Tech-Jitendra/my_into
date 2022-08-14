import React from 'react'
import { Row, Col } from 'antd'
import styles from '../styles/Home.module.css'
// import video1 from '../public/bgvideos/video1.mp4'

export const newfile = () => {
    return (
        <div className="" style={{ backgroundColor: "#F5F9F0" }}>
            <Row>
                <Col span={16}>
                    This is jitendra your friend
                </Col>
                <Col span={4}>
                    This is jitendra your friend
                </Col>
                <Col span={20}>
                </Col>
            </Row>
            <div className={styles.grid}>
                <a href="/" className={styles.card}>
                    <h2>My Home &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>
            </div>
        </div>
    )
}
export default newfile
