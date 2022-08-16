import React, { useState} from 'react';

import Navbar from '../components/Navbar';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

import SearchTrip from '../components/search/SearchTrip';
const sozsatpoezdku = () => {
  
    
    return (

        <div className={styles.container}>
            <Head>
                <title>Создать поездку </title>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <h2 className={styles.title}>Создать поездку</h2>
               <SearchTrip/>
            </main>
            <Footer />
        </div>
    )
}
export default sozsatpoezdku;