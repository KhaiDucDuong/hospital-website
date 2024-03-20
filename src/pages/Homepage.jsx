import React from 'react'
import Header from '../components/Header';
import HomeBanner from '../components/Homepage/HomeBanner';
import Footer from '../components/Footer';

function Homepage() {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <>
        <div className="main-wrapper">

            {/* Header */}
            <Header isLoggedIn={isLoggedIn} />
            {/* /Header */}

            {/* Home Banner */}
            <HomeBanner isLoggedIn={isLoggedIn}/>
            {/*Home banner */}

            {/* Footer */}
            <Footer />
            {/* /Footer */}
        </div>
        {/* /Main Wrapper */}
    </>
  
  )
}

export default Homepage;