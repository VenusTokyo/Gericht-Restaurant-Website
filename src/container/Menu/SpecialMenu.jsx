import React from 'react';
import {images,data} from '../../constants'
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className="headtext__cormorant">Today's Menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenu;
