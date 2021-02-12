import { Profiler } from 'react';
import s from './Profile.module.css';

import banner from '../../images/Profile/profile-banner.jpg';

const Profile = () => {
    return (
        <>
            <div className={s.pageBlock}>
                <div className={s.mainBox}>
                        <div className={s.bannerWrapper}><img src={banner} alt="" className={s.bannerImg}/></div>
                        <div className={s.info}>
                            <div className={s.info__avatarWrapper}><img src="" alt="" className={s.avatarImg}/></div>
                            <div className={s.info__textContainer}>
                                <h1 className={s.info__userName}>Дмитрий Иванов</h1>
                                <p className={s.info__userBirthday}></p>
                                <p className={s.info__userCity}></p>
                                <p className={s.info__userEducation}></p>
                                <p className={s.info__userWebsite}></p>
                            </div>
                        </div>
                </div>
            </div> 
        </>
    );
}

export default Profile;