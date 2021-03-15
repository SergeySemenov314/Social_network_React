import { Profiler } from 'react';
import s from './ProfileInfo.module.css';

import banner from '../../../images/Profile/profile-banner.jpg';
import avatar from '../../../images/Profile/profile-avatar.jpg';

const ProfileInfo = () => {
    return (
        <>
            <div className='pageBlock'>
                <div className={s.mainBox}>
                        <div className={s.bannerWrapper}><img src={banner} alt="" className={s.bannerImg}/></div>
                        <div className={s.info}>
                            <div className={s.info__avatarWrapper}><img src={avatar} alt="" className={s.avatarImg}/></div>
                            <div className={s.info__textContainer}>
                                <h1 className={s.info__item}><b>Имя:</b> Дмитрий Иванов</h1>
                                <p className={s.info__item}><b>День рождения:</b> 2 января</p>
                                <p className={s.info__item}><b>Город:</b> Москва</p>
                                <p className={s.info__item}><b>Образование:</b> МГУ</p>
                                <p className={s.info__item}><b>Сайт:</b> <a className={s.info__itemLink} href="https://semenov-websupport.ru/" target='_blank'>semenov-websupport.ru</a></p>                              
                            </div>
                        </div>
                </div>
            </div> 
        </>
    );
}

export default ProfileInfo;