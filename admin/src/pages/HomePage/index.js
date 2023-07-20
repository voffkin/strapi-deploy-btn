/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {
  Layout, BaseHeaderLayout, ContentLayout,
  Button
} from '@strapi/design-system';

const HomePage = () => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };


  const onClick = () => {
    fetch('/strapi-deploy-btn/cmd', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <Layout>
      <BaseHeaderLayout
        title="Выгрузка проекта"
        as="h2"
      />
      <ContentLayout>
        <Button onClick={onClick} >Выгрузить проект</Button>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;