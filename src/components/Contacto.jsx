import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './shared/Layout';

const Contacto = () => {
  return (
    <Layout>
      <Link target="_blank" to="http://wa.me/+573228450982" />
    </Layout>
  );
};

export default Contacto;
