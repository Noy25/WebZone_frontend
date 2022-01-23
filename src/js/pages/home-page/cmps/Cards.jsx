import { Link } from 'react-router-dom';

import startBuildingSvg from '../../../../assets/imgs/home-page/web_devices.svg';
import buildTogetherSvg from '../../../../assets/imgs/home-page/building_website_together.svg';
import resoponsiveSvg from '../../../../assets/imgs/home-page/real_time_sync.svg';



export function Cards() {
    return (
        <section className="cards">
            <div className="card-container flex align-center">
                <div className="card-text flex column">
                    <h1>Simple</h1>
                    <h2>Website Editing</h2>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consectetur eos ut minus nemo deleniti reprehenderit provident nihil molestias beatae aperiam inventore amet magni iste dolores eaque fugiat nisi quod voluptates, blanditiis non fuga facere facilis eius. Est possimus mollitia dolorum, ipsam veritatis sapiente aut dolore adipisci cum tempore? Culpa.</p> */}
                    <p>The platform provides an easy-to-use editor that allows you to just pick up a premade template and start creating your own website within seconds. You could also start a website from scratch with our user-friendly sidebar.</p>
                    <button className="get-started">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Get Started</span>
                    </button>
                </div>
                <div className="card-img">
                    <img src={startBuildingSvg} alt="Image" />
                </div>
            </div>
            <div className="card-container flex align-center">
                <div className="card-img">
                    <img src={resoponsiveSvg} alt="Image" />
                </div>
                <div className="card-text flex column">
                    <h1>Compatible</h1>
                    <h2>Responsive Design</h2>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consectetur eos ut minus nemo deleniti reprehenderit provident nihil molestias beatae aperiam inventore amet magni iste dolores eaque fugiat nisi quod voluptates, blanditiis non fuga facere facilis eius. Est possimus mollitia dolorum, ipsam veritatis sapiente aut dolore adipisci cum tempore? Culpa.</p> */}
                    <p>Every section of the website responds to the width of your device. No matter the size of your screen, we make sure everything looks good for you.</p>
                    <button className="get-started">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Start Now</span>
                    </button>
                </div>
            </div>
            <div className="card-container flex align-center">
                <div className="card-text flex column">
                    <h1>Inviting</h1>
                    <h2>Build Together</h2>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consectetur eos ut minus nemo deleniti reprehenderit provident nihil molestias beatae aperiam inventore amet magni iste dolores eaque fugiat nisi quod voluptates, blanditiis non fuga facere facilis eius. Est possimus mollitia dolorum, ipsam veritatis sapiente aut dolore adipisci cum tempore? Culpa.</p> */}
                    <p>Invite your friends or family to help you build the website of your dreams! Simpley click the "Work Together" link inside the editor and send them a link! Did we mention that the platform is compatible with any device? So what are you waiting for?</p>
                    <button className="get-started">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Lets Go</span>
                    </button>
                </div>
                <div className="card-img">
                    <img src={buildTogetherSvg} alt="Image" />
                </div>
            </div>
        </section>
    )
}