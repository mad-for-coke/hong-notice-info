import React from 'react';
import Sider from '../components/Sider';
import Content from '../components/Content';

const Notice = () => {
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <Sider />
      <Content />
    </div>
  );
};

export default Notice;
