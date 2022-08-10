import React from 'react';
import '../assets/styles/components/sidebar-wrapper.css';
import MobileMenu from './mobile-menu';
import Sidebar from './sidebar';
import { FiUsers } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { IoCarSport } from 'react-icons/io5';
import { MdMiscellaneousServices } from 'react-icons/md';
import { AiOutlineNotification } from 'react-icons/ai';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import {
  CarsRoute,
  EventsRoute,
  HomeRoute,
  InvoicesRoute,
  ServicesRoute,
  SettingsRoute,
  SignInRoute,
  UsersRoute,
} from '../config/routes';

const SidebarWrapper = (props) => {
  // const isMobile

  const list = [
    { title: 'Головна', icon: BiHomeAlt, path: HomeRoute, onClick: () => {} },
    {
      title: 'Користувачі',
      icon: FiUsers,
      path: UsersRoute,
      onClick: () => {},
    },
    { title: 'Авто', icon: IoCarSport, path: CarsRoute, onClick: () => {} },
    {
      title: 'Сервіси',
      icon: MdMiscellaneousServices,
      path: ServicesRoute,
      onClick: () => {},
    },
    {
      title: 'Повідомлення',
      icon: AiOutlineNotification,
      path: EventsRoute,
      onClick: () => {},
    },
    {
      title: 'Платежі',
      icon: FaFileInvoiceDollar,
      path: InvoicesRoute,
      onClick: () => {},
    },
    {
      title: 'Налаштування',
      icon: IoSettingsOutline,
      path: SettingsRoute,
      onClick: () => {},
    },
    {
      title: 'Вихід',
      icon: MdOutlineLogout,
      path: SignInRoute,
      onClick: () => {},
    },
  ];

  return (
    <div className='sidebar-wrapper'>
      <div className='mobile'>
        <MobileMenu list={list}  />
      </div>
      <div className='desktop'>
        <Sidebar list={list} />
      </div>

      <div className='inner'>{props.children}</div>
    </div>
  );
};

export default SidebarWrapper;
