import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Gallery } from '../../../sections/Public/Gallery/Gallery';
import './Gallery.scss';

const GalleryPage = () => {
    return (
        <>
            <Header/>
            <PageSection Title='GALLERY' Description='What Special about us'/>
            <main>
                <Gallery/>
            </main>
            <Footer/>
        </>
    )
}
export default GalleryPage;