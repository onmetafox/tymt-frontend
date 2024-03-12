import React from 'react';
import HomeSection from './Home';
import FeaturedSection from './Featured';
import InstallSection from './Install';
import Coming from './Coming';
const HomePage = () => {
    return(
        <>  
            <HomeSection/>
            <FeaturedSection />
            <Coming />
            <InstallSection />
        </>
    )
}

export default HomePage;