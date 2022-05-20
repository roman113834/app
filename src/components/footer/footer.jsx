import React from "react"
import Receiver from "images/svg/Receiver.svg"
import WhatsApp from "images/svg/WhatsApp.svg"
import Email from "images/svg/Email.svg"
import TelegramWhite from "images/svg/Telegram-white.svg"
import styles from "./footer.module.css"

export const Footer = () => (
	<footer>
		<div className={styles.footer}>
			<div className={styles.footer_left}>
				<div className={styles.footer_left_link}>
					<div className={styles.receivet_link}>
						<img src={Receiver} className={styles.receivet_icon} alt="" />
						<a href='/'>88752200</a>
					</div>
					<a href='/' className={styles.or}>or</a>
					<div className={styles.whatsapp_link}>
						<img src={WhatsApp} className={styles.whatsapp_icon} alt="" />
						<a href='/'>WhatsApp Us</a>
					</div>
				</div>
			</div>
			<div className={styles.footer_center}>
				<div className={styles.footer_center_link}>
					<a href='/'>Tuition Jobs Telegram Channel</a>
					<img src={TelegramWhite} className={styles.telegram_white_icon} alt="" />
				</div>
				<div className={styles.footer_center_link}>
					<a href='/'>Part Time Jobs Telegram Channel</a>
					<img src={TelegramWhite} className={styles.telegram_white_icon} alt="" />
				</div>
				<div className={styles.footer_center_link}>
					<a href='/'>Full Time Jobs Telegram Channel</a>
					<img src={TelegramWhite} className={styles.telegram_white_icon} alt="" />
				</div>
			</div>
			<div className={styles.footer_right}>
				<div className={styles.footer_right_link}>
					<img src={Email} className={styles.email_icon} alt="" />
					<a href='/'>enquires@singaporejobs.com.sg</a>
				</div>
			</div>
		</div>
	</footer>
)