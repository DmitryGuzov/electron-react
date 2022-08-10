import React, { useMemo } from 'react';

import { Box, HStack, Button, IconButton, Select } from '@chakra-ui/react';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const DotsItem = () => {
  return (
    <Box w='32px' h='32px' display={'flex'} alignItems={'flex-end'}>
      <BiDotsHorizontalRounded />
    </Box>
  );
};

const Pagination = ({
  page,
  total,
  size,
  onChangePage,
  onChangeLimit,
  disabled,
}) => {
  const pageCount = useMemo(() => {
    if (total && size) {
      return Math.ceil(total / size);
    } else {
      return 1;
    }
  }, [total, size]);

  const handleChangeLimit = (event) => {
    if (onChangeLimit) onChangeLimit(event.target.value);
  };

  const handleNextPage = () => {
    if (page < pageCount) {
      onChangePage(page + 1);
    }
  };
  const handleChangePage = (p) => {
    onChangePage(p);
  };
  const handlePrevPage = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  // useEffect(() => {
  //   if (onChange && page !== currentPage) {
  //     onChange(currentPage);
  //   }
  // }, [currentPage, onChange, page]);

  return (
    <Box
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      <Box width={'80px'} mr='10px'>
        <Select defaultValue={size} onChange={handleChangeLimit} size='sm'>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </Box>
      <HStack spacing='10px'>
        <IconButton
          size='sm'
          aria-label='prev page button'
          icon={<MdOutlineKeyboardArrowLeft />}
          disabled={page === 1 || disabled}
          onClick={handlePrevPage}
        />
        <Button
          bg='pink.100'
          size='sm'
          backgroundColor={page === 1 ? '#0bc5ea' : 'transparent'}
          _hover={{
            backgroundColor: '#0bc5ea',
          }}
          onClick={() => {
            handleChangePage(1);
          }}
          disabled={disabled}
        >
          {1}
        </Button>
        {page > 3 && <DotsItem />}

        {page === pageCount && pageCount > 3 && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === 1 ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(page - 2)}
            disabled={disabled}
          >
            {page - 2}
          </Button>
        )}
        {page > 2 && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === page - 1 ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(page - 1)}
            disabled={disabled}
          >
            {page - 1}
          </Button>
        )}
        {page !== 1 && page !== pageCount && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === page ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(page)}
            disabled={disabled}
          >
            {page}
          </Button>
        )}
        {page < pageCount - 1 && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === page + 1 ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(page + 1)}
            disabled={disabled}
          >
            {page + 1}
          </Button>
        )}
        {page === 1 && pageCount > 3 && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === page + 2 ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(page + 2)}
            disabled={disabled}
          >
            {page + 2}
          </Button>
        )}
        {page < pageCount - 2 && <DotsItem />}
        {pageCount !== 1 && (
          <Button
            bg='pink.100'
            size='sm'
            backgroundColor={page === pageCount ? '#0bc5ea' : 'transparent'}
            _hover={{
              backgroundColor: '#0bc5ea',
            }}
            onClick={() => handleChangePage(pageCount)}
            disabled={disabled}
          >
            {pageCount}
          </Button>
        )}
        <IconButton
          size='sm'
          aria-label='next page button'
          icon={<MdOutlineKeyboardArrowRight />}
          onClick={handleNextPage}
          disabled={page === pageCount || disabled}
        />
      </HStack>
    </Box>
  );
};

export default Pagination;
