import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Box,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setUsersParamsAction } from '../../store/users/actions';

const UsersFilters = () => {
  const [isShow, setShow] = useState(false);
  const dispatch = useDispatch();
  const [filterModel, setFilterModel] = useState({
    isCustomer: false,
    isAdmin: false,
    activeSubscription: false,
    disactiveSubscription: false,
    verified: false,
    unverified: false,
  });
  const handleChangeAdmin = (event) => {
    if (!event.target.checked) {
      setFilterModel({ ...filterModel, isCustomer: false, isAdmin: false });
    } else {
      if (event.target.value === 'is-admin') {
        setFilterModel({ ...filterModel, isCustomer: false, isAdmin: true });
      } else {
        setFilterModel({ ...filterModel, isCustomer: true, isAdmin: false });
      }
    }
  };

  const setFilters = (values) => {
    setFilterModel({
      ...filterModel,
      ...values,
    });
  };

  useEffect(() => {
    const filters = [];
    if (filterModel.isAdmin) {
      filters.push('is-admin');
    } else if (filterModel.isCustomer) {
      filters.push('is-customer');
    }
    if (filterModel.activeSubscription) {
      filters.push('subscribed');
    }
    if (filterModel.verified) {
      filters.push('verified');
    } else if (filterModel.unverified) {
      filters.push('unverified');
    }
    console.log('filters: ', filters);
    const filterParams = filters.join(';');
    console.log('filterParams: ', filterParams);
    dispatch(setUsersParamsAction({ filters: filterParams }));
  }, [filterModel, dispatch]);

  return (
    <Box>
      <Button
        onClick={() => {
          setShow(!isShow);
        }}
      >
        Filters
      </Button>
      {isShow && (
        <Flex direction={'column'}>
          <Flex alignItems='center'>
            <Text>Filters: </Text>
            <Wrap spacing='10px' padding={2}>
              <FilterGroup>
                <FilterItem
                  value='is-admin'
                  isChecked={filterModel.isAdmin}
                  title='Admin'
                  onChange={() => {
                    setFilters({
                      isAdmin: !filterModel.isAdmin,
                      isCustomer: false,
                    });
                  }}
                />
                {' | '}
                <FilterItem
                  value='is-customer'
                  isChecked={filterModel.isCustomer}
                  title='Customer'
                  onChange={() => {
                    setFilters({
                      isCustomer: !filterModel.isCustomer,
                      isAdmin: false,
                    });
                  }}
                />
              </FilterGroup>
              <WrapItem>
                <FilterItem
                  value='subscribed'
                  name='activeSubscription'
                  isChecked={filterModel.activeSubscription}
                  title='Active subscription'
                  onChange={() => {
                    setFilters({
                      activeSubscription: !filterModel.activeSubscription,
                    });
                  }}
                />
              </WrapItem>

              <FilterGroup>
                <FilterItem
                  value='verified'
                  name='verified'
                  isChecked={filterModel.verified && !filterModel.unverified}
                  title='Verified'
                  onChange={() => {
                    setFilters({
                      verified: !filterModel.verified,
                      unverified: false,
                    });
                  }}
                />
                {' | '}
                <FilterItem
                  value='unverified'
                  name='unverified'
                  isChecked={!filterModel.verified && filterModel.unverified}
                  title='Unverified'
                  onChange={() => {
                    setFilters({
                      verified: false,
                      unverified: !filterModel.unverified,
                    });
                  }}
                />
              </FilterGroup>
            </Wrap>
          </Flex>
          {/* <Flex alignItems='center'>
        <Text>Sorting: </Text>
        <Wrap spacing='10px' padding={2}>
          <FilterGroup>
            <FilterItem
              value='is-admin'
              isChecked={filterModel.isAdmin}
              title='Admin'
              onChange={handleChangeAdmin}
            />
            {' | '}
            <FilterItem
              value='is-customer'
              isChecked={filterModel.isCustomer}
              title='Customer'
              onChange={handleChangeAdmin}
            />
          </FilterGroup>

          <FilterGroup>
            <FilterItem
              value='is-admin'
              isChecked={filterModel.isAdmin}
              title='Admin'
              onChange={handleChangeAdmin}
            />
            {' | '}
            <FilterItem
              value='is-customer'
              isChecked={filterModel.isCustomer}
              title='Customer'
              onChange={handleChangeAdmin}
            />
          </FilterGroup>
          <WrapItem>
            <FilterItem
              value='is-subscribed'
              name='activeSubscription'
              isChecked={filterModel.activeSubscription}
              title='Active subscription'
              onChange={handleChangeFilterModel}
            />
          </WrapItem>
        </Wrap>
      </Flex> */}
        </Flex>
      )}
    </Box>
  );
};

const FilterItem = (props) => {
  return (
    <Checkbox
      value={props.value}
      name={props.name}
      isChecked={props.isChecked}
      onChange={props.onChange}
      backgroundColor='#0bc5ea'
      padding={1}
      borderRadius={'5px'}
      onClick={props.onCLick}
    >
      {props.title}
    </Checkbox>
  );
};
const FilterGroup = (props) => {
  return (
    <WrapItem>
      <Box backgroundColor='#0bc5ea' borderRadius={'5px'}>
        {props.children}
      </Box>
    </WrapItem>
  );
};

export default UsersFilters;
