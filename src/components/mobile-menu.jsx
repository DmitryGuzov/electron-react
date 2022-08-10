import React from 'react';
import '../assets/styles/components/mobile-menu.css';
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  useColorMode,
  Box,
  Flex,
} from '@chakra-ui/react';
import { BiMenuAltLeft, BiMenu } from 'react-icons/bi';
import { SignInRoute } from '../config/routes';
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';

const MobileMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className='menu'>
      <IconButton
        ref={btnRef}
        size='md'
        onClick={onOpen}
        backgroundColor='transparent'
        fontSize="22px"
      >
        {isOpen ? <BiMenuAltLeft /> : <BiMenu />}
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Меню</DrawerHeader>
          <DrawerBody>
            <ul className='menu-list'>
              {props?.list.length > 0 &&
                props?.list.map((item, index) => {
                  return (
                    <MobileMenuItem
                      key={index}
                      item={item}
                      onExit={() => {
                        props.onExit();
                      }}
                    />
                  );
                })}
            </ul>
          </DrawerBody>
          <DrawerFooter>
            <MobileThemeButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const MobileMenuItem = (props) => {
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
      <div className='icon'>
        <props.item.icon color={'#0bc5ea'} />
      </div>
      <div className='title'>{props.item.title}</div>
    </li>
  );
};

const MobileThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      width='100%'
      onClick={toggleColorMode}
    >
      <IconButton size='sm' marginRight='10px'>
        {colorMode === 'light' ? (
          <HiOutlineMoon color={'#0bc5ea'} />
        ) : (
          <BsSun color={'#0bc5ea'} />
        )}
      </IconButton>

      <div className='title'>
        {colorMode === 'light' ? 'Світла' : 'Темна'} тему
      </div>
    </Flex>
  );
};

export default MobileMenu;
