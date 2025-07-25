import hero from './Hero.module.css';
function Hero(){
return(
    <main className="container">
        <header className={hero.hero} >
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                        <p className={hero.icon}>
                            <span class="material-symbols-outlined" >
                            chat
                            </span>
                        </p>
                        <p className={hero.des}>Chat</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                        <p className={hero.icon}>
                            <span class="material-symbols-outlined">
                                call
                            </span>
                        </p>
                        <p className={hero.des}>Call</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                        <p className={hero.icon}>
                            <span class="material-symbols-outlined">
                            notifications_active
                            </span>
                        </p>
                        <p className={hero.des}>Notification</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                        <p className={hero.icon}>
                            <span class="material-symbols-outlined">
                            support_agent
                            </span>
                        </p>
                        <p className={hero.des}>Support</p>
                    </a>
                </li>
            </ul>
        </header>
    </main>
);
}
export default Hero