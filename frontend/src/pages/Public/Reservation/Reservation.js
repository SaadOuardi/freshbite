import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';

const Reservation = () => {
    return (
        <>
        <Header/>
        <PageSection Title='Reservation' Description='Now you will get to know us'/>
        <main>
            <h1>Reservation</h1>
        </main>
        <Footer/>
    </>
    )
}

export default Reservation;