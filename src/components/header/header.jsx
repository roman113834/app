import React from "react"
import Magnify from "images/svg/Magnify.svg"
import Briefcase from "images/svg/Briefcase.svg"
import Human from "images/svg/Human.svg"
import Cart from "images/svg/Cart.svg"
import styles from "./header.module.css"

export const Header = () => (
	<header>
		<div className={styles.header}>
			<div className={styles.header_left}>
				<span className={styles.logo}>
					<img src={Briefcase} className={styles.briefcase_icon} alt="" />
					<p>SG JOBS</p>
				</span>
			</div>
			<div className={styles.header_right}>
				<span className={styles.price}>
					<div className={styles.price_link}>
						<img src={Cart} className={styles.cart_icon} alt="" />
						<a href='/'>Price</a>
					</div>
				</span>
				<span className={styles.candidates}>
					<div className={styles.candidates_link}>
						<img src={Magnify} className={styles.magnify_icon} alt="" />
						<a href='/'>For Candidates</a>
					</div>
				</span>
				<span className={styles.auth}>
					<div className={styles.auth_link}>
						<a href='/'>Login</a> <p className={styles.slash}>/</p> <a href='/'>Register</a>
						<img src={Human} alt="" className={styles.human_icon} />
					</div>
				</span>
			</div>
		</div>
	</header>
)
