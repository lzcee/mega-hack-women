import React from 'react';

import NavigationMenu from '../components/NavigationMenu';
import SearchMentoring from '../components/SearchMentoring';
import PartnershipResearch from '../components/PartnershipResearch';

const Home = () => {
    const name = "Empreendedora";

    return (
        <div className="home fullScreen screenBackground">
            <NavigationMenu />
            <SearchMentoring name={name} />
            <PartnershipResearch />
        </div>
    )
}

export default Home;
