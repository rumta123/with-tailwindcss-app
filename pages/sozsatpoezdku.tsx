import React, { useState} from 'react';

import Navbar from '../components/Navbar';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

import AddTrip from '../components/search/AddTrip';

const sozsatpoezdku = () => {
  
   const [isAddTrip, setIsAddTrip] =useState(false) 
    return (

        <div className={styles.container}>
            <Head>
                <title>Создать поездку </title>
            </Head>
            <Navbar />
            <main className={styles.main}>
              {isAddTrip ?<h2 className={styles.title}> Поездка создана </h2> :<h2 className={styles.title}>Создать поездку</h2>}  
               <AddTrip/>
            </main>
            <Footer />
        </div>
    )
}
export default sozsatpoezdku;