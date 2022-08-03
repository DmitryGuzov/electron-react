import React from 'react';
import '../assets/styles/components/sidebar.css';
import { FiUsers } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { IoCarSport } from 'react-icons/io5';
import { MdMiscellaneousServices } from 'react-icons/md';
import { AiOutlineNotification } from 'react-icons/ai';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import Alert from './alert';
import { useDisclosure, useColorMode, IconButton } from '@chakra-ui/react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';

import Tooltip from './tooltip';
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
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const list = [
  { title: 'Головна', icon: BiHomeAlt, path: HomeRoute, onClick: () => {} },
  { title: 'Користувачі', icon: FiUsers, path: UsersRoute, onClick: () => {} },
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

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className='sidebar'>
        <ul className='list'>
          {list.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                item={item}
                onExit={() => {
                  onOpen();
                }}
              />
            );
          })}
          <IconButton
            onClick={toggleColorMode}
            size='sm'
            backgroundColor='#2d2e30'
          >
            {colorMode === 'light' ? (
              <HiOutlineMoon color={'red'} />
            ) : (
              <BsSun color={'red'} />
            )}
          </IconButton>
        </ul>
      </div>
      <Alert
        title='Exit?'
        isOpen={isOpen}
        onOpen={onOpen}
        onSuccess={() => {
          onClose();
          navigate(SignInRoute);
        }}
        onCancel={() => {
          onClose();
        }}
        onClose={onClose}
      ></Alert>
    </>
  );
};

const SidebarItem = (props) => {
  const navigate = useNavigate();
  const isCurrentLocation = useCurrentLocation(props.item.path);

  return (
    <li
      className={isCurrentLocation ? 'item active' : `item`}
      onClick={() => {
        if (props.item.path === SignInRoute) {
          props.onExit();
        } else {
          navigate(props.item.path);
        }
      }}
    >
      <Tooltip content={props.item.title} direction='right'>
        <IconButton
          size='sm'
          backgroundColor='#2d2e30'
        >
          {<props.item.icon color={'red'} />}
        </IconButton>
        {/* <p>{<props.item.icon color={isCurrentLocation ? 'white' : 'red'} />}</p> */}
      </Tooltip>
    </li>
  );
};

export default Sidebar;
