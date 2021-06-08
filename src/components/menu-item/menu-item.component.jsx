import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title}) => (
    <div className='menu-item'>
            <div className='content'></div>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
            </div>
);

export default MenuItem;