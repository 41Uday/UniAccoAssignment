import './index.css'

import {FiGlobe} from 'react-icons/fi'

import {GoThreeBars} from 'react-icons/go'

import {HiUserCircle} from 'react-icons/hi'

const Header = () => (
    <div className='header-container'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="logo" className="logo-img" />
        <div className='header-card-1'> 
            <p className='para-one'>Become a host</p>
            <FiGlobe />
            <div className='header-card-2'>
            <div className='icon-1'>
                    <GoThreeBars />
                </div>
                <div className='icon'>
                    <HiUserCircle />
                </div>
            </div>
        </div>
    </div>
)

export default Header