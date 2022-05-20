import React from "react"
import Ellipse0 from "images/svg/Ellipse0.svg"
import Ellipse1 from "images/svg/Ellipse1.svg"
import Ellipse2 from "images/svg/Ellipse2.svg"
import Ellipse3 from "images/svg/Ellipse3.svg"
import Ellipse4 from "images/svg/Ellipse4.svg"
import Ellipse5 from "images/svg/Ellipse5.svg"
import CreditCards from "images/svg/Сredit-сards.svg"
import HandPhone from "images/svg/Hand-phone.svg"
import HandBriefcase from "images/svg/Hand-briefcase.svg"
import Girl from "images/png/Girl.png"
import Shooters from "images/svg/Shooters.svg"
import Phone from "images/svg/Phone.svg"
import TelegramChannels from "images/svg/Telegram-channels.svg"
import TelegramIphone from "images/svg/Telegram-iphone.svg"
import ChatIphone from "images/svg/Chat-iphone.svg"
import EllipseIphone from "images/svg/Ellipse-iphone.svg"
import BlockWebSite from "images/png/Block-WebSite.png"
import BtnSebSite from "images/svg/Btn-WebSite.svg"
import BlockMobileApp from "images/png/Block-MobileApp.png"
import BtnMobileApp from "images/svg/Btn-MobileApp.svg"
import AppStore from "images/svg/App-store.svg"
import GooglePlay from "images/svg/Google-play.svg"
import Bracket from "images/svg/Bracket.svg"
import QRcode from "images/svg/QRcode.svg"
import FAQ from "images/svg/FAQ.svg"
import BottomBlockEllipses from "images/svg/Bottom-block-ellipses.svg"
import BottomBlockEllipses1 from "images/svg/Bottom-block-ellipses1.svg"
import BigEllipse from "images/svg/Big-ellipse.svg"
import styles from "./home.module.css"

export const Home = () => (
	<>
		<div className={styles.top_block}>
			<div className={styles.top_block_left}>
				<div className={styles.head_text}>
					<p>Reach out to people through <b>all channels</b></p>
				</div>
				<div className={styles.small_text}>
					<p>Only job portal which allows people to apply via Website, Telegram or Mobile app</p>
				</div>
				<div className={styles.button_post_job}>
					<p>Post a job</p>
				</div>
			</div>
			<div className={styles.top_block_right}>
				<img src={Ellipse0} className={styles.ellipse_0} alt="" />
				<img src={Girl} className={styles.girl} alt="" />
				<img src={Ellipse3} className={styles.ellipse_3} alt="" />
				<img src={Ellipse4} className={styles.ellipse_4} alt="" />
			</div>
		</div>
		<div className={styles.wrapp_ellipse_1}>
			<img src={Ellipse1} className={styles.ellipse_1} alt="" />
		</div>
		<div className={styles.wrapp_ellipse_2}>
			<img src={Ellipse2} className={styles.ellipse_2} alt="" />
		</div>
		<div className={styles.steps}>
			<h1>How it work?</h1>
		</div>
		<div className={styles.wrapp_blocks}>
			<img src={BigEllipse} className={styles.big_ellipse} alt="" />
			<img src={Ellipse5} className={styles.ellipse_5} alt="" />
			<div className={styles.block}>
				<h2>Step 1</h2>
				<img src={CreditCards} className={styles.img_block} alt="" />
				<div className={styles.block_hr}> <hr /> </div>
				<p>Purchase </p>
				<b className={styles.block_text_0}>posting credit</b>
			</div>
			<div className={styles.block}>
				<h2>Step 2</h2>
				<img src={HandBriefcase} className={styles.img_block} alt="" />
				<div className={styles.block_hr}> <hr /> </div>
				<p className={styles.block_1}>Post <b className={styles.block_text_1}>a job</b></p>
			</div>
			<div className={styles.block}>
				<h2>Step 3</h2>
				<img src={HandPhone} className={styles.img_block} alt="" />
				<div className={styles.block_hr}> <hr /> </div>
				<p>Receive profiles <p className={styles.block_text_2}>of job candidates</p></p>
			</div>
		</div>
		<div className={styles.wrapp_phones}>
			<h2>Why us?</h2>
			<div className={styles.wrapp_phones_text}>
				<p>We provide maximum outreach. Jobs will be posted in these locations</p>
			</div>
			<img src={Shooters} className={styles.shooters} alt="" />
			<div className={styles.wrapp_blocks_img}>
				<div className={styles.wrapp_block_website}>
					<img src={BlockWebSite} className={styles.block_website} alt="" />
					<img src={BtnSebSite} className={styles.btn_website} alt="" />
				</div>
				<div className={styles.wrapp_phone_img}>
					<img src={Phone} className={styles.phone} alt="" />
					<img src={TelegramChannels} className={styles.btn_telegram_channel} alt="" />
					<img src={TelegramIphone} className={styles.telegram_iphone} alt="" />
					<img src={ChatIphone} className={styles.chat_iphone} alt="" />
					<img src={EllipseIphone} className={styles.ellipse_iphone} alt="" />
				</div>
				<div className={styles.wrapp_block_mobile_app}>
					<img src={BlockMobileApp} className={styles.block_mobile_app} alt="" />
					<img src={BtnMobileApp} className={styles.btn_mobile_app} alt="" />
					<img src={AppStore} className={styles.app_store} alt="" />
					<img src={GooglePlay} className={styles.google_play} alt="" />
				</div>
			</div>

			<div className={styles.wrapp_bracket}>
				<img src={Bracket} className={styles.bracket} alt="" />
			</div>

			<div className={styles.job_candidates}>
				<p>Job candidates can apply through website, mobile app or telegram bot.</p>
			</div>
		</div>
		<div className={styles.block_QR_code}>
			<div className={styles.block_QR_code_header}>
				<p>Post a job using <b>any apps</b></p>
			</div>
			<img src={QRcode} className={styles.qr_code} alt="" />
			<div className={styles.wrapp_btn_post_job}>
				<div className={styles.button_post_job}>
					<p>Post a job</p>
				</div>
			</div>
		</div>
		<div className={styles.bottom_block}>
			<div className={styles.bottom_block_left}>
				<img src={BottomBlockEllipses1} className={styles.bottom_block_left_img} alt="" />
			</div>
			<div className={styles.block_faq}>
				<img src={FAQ} alt="" />
			</div>
			<div className={styles.bottom_block_right}>
				<img src={BottomBlockEllipses} className={styles.bottom_block_right_img} alt="" />
			</div>
		</div>
	</>
)
