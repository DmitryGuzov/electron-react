import React from 'react';
import '../assets/styles/components/sidebar.css';
import { FiUsers } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import Tooltip from './tooltip';
import {
  HomeRoute,
  SettingsRoute,
  SignInRoute,
  UsersRoute,
} from '../config/routes';
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const list = [
  { title: 'Головна', icon: BiHomeAlt, path: HomeRoute },
  { title: 'Користувачі', icon: FiUsers, path: UsersRoute },
  { title: 'Налаштування', icon: IoSettingsOutline, path: SettingsRoute },
  { title: 'Вихід', icon: MdOutlineLogout, path: SignInRoute },
];

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <ul className='list'>
        {list.map((item, index) => {
          return <SidebarItem key={index} item={item} isActive={index === 1} />;
        })}
      </ul>
    </div>
  );
};

const SidebarItem = (props) => {
  const navigate = useNavigate();
  const isCurrentLocation = useCurrentLocation(props.item.path);

  return (
    <li
      className={props.isActive ? 'item active' : `item`}
      onClick={() => {
        navigate(props.item.path);
      }}
    >
      <Tooltip content={props.item.title} direction='right'>
        <p>{<props.item.icon color={isCurrentLocation ? 'white' : 'red'} />}</p>
      </Tooltip>
    </li>
  );
};

export default Sidebar;
