import Head from "next/head"
import styles from './signin.module.css';
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <Image src="/images/bg-img.jpg"
                    height="100%"
                    width="100%"
                    layout="fill"
                    style={styles.bgImage} alt="left-image" />
                </div>
                <div className={styles.rightContainer}>
                    <h2 className={styles.formHeading}>Welcome to IOMechs</h2>
                    <div className={styles.inputContainer}>
                        <label className={styles.formLabel}>Username or Email</label>
                        <input type="email" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.formLabel}>Password</label>
                        <input type="password" className={styles.input} />
                    </div>
                    <button className={styles.signButton}>Sign in</button>

                    <div className={styles.lineBreakerContainer}>
                        <div className={styles.lineBreaker}></div>
                        <span>or</span>
                        <div className={styles.lineBreaker}></div>
                    </div>

                    <div className={styles.socialAuthContainer}>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png"
                            height="25px"
                            width="25px"
                        />
                        <a className={styles.socialAuthTitle} href="../../api/auth/google">Sign in with Google</a>
                    </div>
                    <div className={styles.socialAuthContainer}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                            height="25px"
                            width="25px"
                        />
                        <a className={styles.socialAuthTitle} href="../../api/auth/facebook">Sign in with Facebook</a>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}


