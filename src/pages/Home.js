import React from 'react';

import NavigationMenu from '../components/NavigationMenu';
import SearchMentoring from '../components/SearchMentoring';

const Home = () => {
    const name = "Empreendedora";

    return (
        <div className="home fullScreen screenBackground">
            <NavigationMenu />
            <SearchMentoring name={name} />
        </div>
    )
}

export default Home;
