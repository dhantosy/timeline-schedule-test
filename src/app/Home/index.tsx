'use client'

import { ChangeEvent, useCallback, useState } from 'react';
import moment from 'moment';
import Title from '@/components/Title';
import Button from '@/components/Button';
import ScheduleTimeline from '@/components/ScheduleTimeline';
import Modal from '@/components/Modal';
import Form from '@/components/Form';
import { HomeProps, HomeDataProps } from './types';

export default function Home({ data }: HomeProps) {
  const [listData, setListData] = useState(data);
  const [searchedUsers, setSearchedUsers] = useState(data);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const groups = searchedUsers.length && !submitted ? searchedUsers.map(({ user }) => {
    return {
      id: user,
      title: user,
      height: 60
    }
  }) : listData.map(({ user }) => {
    return {
      id: user,
      title: user,
      height: 60
    }
  });

  const items = searchedUsers.length && !submitted ? searchedUsers.map(({ user, start, end }) => {
    return {
      id: user,
      group: user,
      title: `${moment(start).format('D MMM')} - ${moment(end).format('D MMM')}`,
      start_time: moment(start).startOf('day'),
      end_time: moment(end).endOf('day'),
    }
  }) : listData.map(({ user, start, end }) => {
    return {
      id: user,
      group: user,
      title: `${moment(start).format('D MMM')} - ${moment(end).format('D MMM')}`,
      start_time: moment(start).startOf('day'),
      end_time: moment(end).endOf('day'),
    }
  });

  const handleCloseModal = () => {
    setErrorMessage('');
    setShowModal((prev) => !prev);
  };

  const handleFormSubmit = useCallback(({ user, start, end }: HomeDataProps) => {
    const isUserExist = listData.some((item) => item.user === user);

    if (isUserExist) {
      setErrorMessage('User already exists. Please input a different user.')
      return;
    };

    setListData([
      ...listData,
      {
        user,
        start,
        end,
      }
    ]);
    setSubmitted(true);
    handleCloseModal();
  }, [listData]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredItems = listData.filter((user) =>
      user.user.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSubmitted(false);
    setSearchedUsers(filteredItems);
  };

  return (
    <main className='my-10'>
      <div className='flex justify-between items-center mb-5 p-10 pb-5'>
        <Title titleMain='Schedule' />
        <div onClick={() => {
          setShowModal((prev) => !prev);
        }}>
          <Button
            variant='primary'
            size='medium'
            roundness='round'
          >
            Add Schedule
          </Button>
        </div>
      </div>
      <ScheduleTimeline
        groups={groups}
        items={items}
        onSearch={handleSearch}
      />
      <Modal
        shouldShow={showModal}
        handleClose={handleCloseModal}
      >
        <div>
          <Form onFormSubmit={handleFormSubmit} errorMessage={errorMessage} />
        </div>
      </Modal>
    </main>
  );
}
