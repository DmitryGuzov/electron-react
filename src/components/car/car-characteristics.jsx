import React from 'react';
import {
  Badge,
  Wrap,
  WrapItem,
  ListItem,
  Text,
  List,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
const CarCharacteristics = (props) => {
  return (
    <>
      <Box mb={5}>
        <Text
          fontSize={{ base: '16px', lg: '18px' }}
          color={useColorModeValue('yellow.500', 'yellow.300')}
          fontWeight={'500'}
          textTransform={'uppercase'}
          mb={'4'}
        >
          Характеристики
        </Text>

        <Wrap spacing={2}>
          {props.characteristics.power ? (
            <WrapItem>
              <Badge variant='solid' colorScheme='green'>
                New
              </Badge>
            </WrapItem>
          ) : null}
        </Wrap>
      </Box>
      <Box>
        <Text
          fontSize={{ base: '16px', lg: '18px' }}
          color={useColorModeValue('yellow.500', 'yellow.300')}
          fontWeight={'500'}
          textTransform={'uppercase'}
          mb={'4'}
        >
          Характеристики
        </Text>

        <List spacing={2}>
          {props.characteristics.registrationNumber ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Registration number:
              </Text>{' '}
              {props.characteristics.registrationNumber}
            </ListItem>
          ) : null}
          {props.characteristics.power ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Power:
              </Text>{' '}
              {props.characteristics.power} hp
            </ListItem>
          ) : null}
          {props.characteristics.engine ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Engine:
              </Text>{' '}
              {props.characteristics.engine}
            </ListItem>
          ) : null}
          {props.characteristics.mileage ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Mileage:
              </Text>{' '}
              {props.characteristics.mileage} km
            </ListItem>
          ) : null}
          {props.characteristics.color ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Color:
              </Text>{' '}
              {props.characteristics.color}
            </ListItem>
          ) : null}
          {props.characteristics.numberOfDoors ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Number of doors:
              </Text>{' '}
              {props.characteristics.numberOfDoors}
            </ListItem>
          ) : null}
          {props.characteristics.numberOfSeats ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Number of seats:
              </Text>{' '}
              {props.characteristics.numberOfSeats}
            </ListItem>
          ) : null}
          {props.characteristics.color ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Color:
              </Text>{' '}
              {props.characteristics.color}
            </ListItem>
          ) : null}
          {props.characteristics.year ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Year:
              </Text>{' '}
              {props.characteristics.year}
            </ListItem>
          ) : null}
          {props.characteristics.weight ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Weight:
              </Text>{' '}
              {props.characteristics.weight} kg
            </ListItem>
          ) : null}
          {props.characteristics.transmissionType ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Transmission:
              </Text>{' '}
              {props.characteristics.transmissionType}
            </ListItem>
          ) : null}
          {props.characteristics.bodyType ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Body type:
              </Text>{' '}
              {props.characteristics.bodyType}
            </ListItem>
          ) : null}
          {props.characteristics.driveUnit ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Drive unit:
              </Text>{' '}
              {props.characteristics.driveUnit}
            </ListItem>
          ) : null}
          {props.characteristics.oilType ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Oil Type:
              </Text>{' '}
              {props.characteristics.oilType}
            </ListItem>
          ) : null}
          {props.characteristics.oil ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Oil:
              </Text>{' '}
              {props.characteristics.oil}
            </ListItem>
          ) : null}
          {props.characteristics.oil2 ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Oil 2:
              </Text>{' '}
              {props.characteristics.oil2}
            </ListItem>
          ) : null}
          {props.characteristics.fuelConsumption ? (
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Fuel Consumption:
              </Text>{' '}
              {props.characteristics.fuelConsumption} / 100 km
            </ListItem>
          ) : null}
        </List>
      </Box>
    </>
  );
};

export default CarCharacteristics;
