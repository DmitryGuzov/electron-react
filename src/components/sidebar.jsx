import React from 'react';
import '../assets/styles/components/sidebar.css';

import Alert from './alert';
import {
  useDisclosure,
  useColorMode,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';

// import Tooltip from './tooltip';
import { SignInRoute } from '../config/routes';
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className='sidebar'>
        <ul className='list'>
          {props?.list.length > 0 &&
            props?.list.map((item, index) => {
              return (
                <SidebarItem
                  colorMode={colorMode}
                  key={index}
                  item={item}
                  onExit={() => {
                    onOpen();
                  }}
                />
              );
            })}
          <IconButton onClick={toggleColorMode} size='sm'>
            {colorMode === 'light' ? (
              <HiOutlineMoon color={'#0bc5ea'} />
            ) : (
              <BsSun color={'#0bc5ea'} />
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

export const SidebarItem = (props) => {
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
      <Tooltip
        hasArrow
        label={props.item.title}
        bg='gray.300'
        color='black'
        placement='right'
        openDelay={500}
      >
        <IconButton
          size='sm'
          boxShadow={
            isCurrentLocation
              ? `inset 4px 4px 15px -4px ${
                  props.colorMode === 'light'
                    ? 'rgba(17,17,17,0.3)'
                    : 'rgba(255,255,255,0.8)'
                }`
              : ''
          }
          _hover={{
            boxShadow: `inset 3px 3px 15px -4px ${
              props.colorMode === 'light'
                ? 'rgba(17,17,17,0.3)'
                : 'rgba(255,255,255,0.8)'
            }`,
          }}
        >
          {<props.item.icon color={'#0bc5ea'} />}
        </IconButton>
      </Tooltip>
    </li>
  );
};

export default Sidebar;
