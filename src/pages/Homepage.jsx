import React from 'react'
import Header from '../components/Header';
import HomeBanner from '../components/Homepage/HomeBanner';
import Footer from '../components/Footer';

function Homepage({isLoggedIn, setLoggedIn}) {
  return (
    <>
        <div className="main-wrapper">

            {/* Header */}
            <Header isLoggedIn={isLoggedIn} />
            {/* /Header */}

            {/* Home Banner */}
            <HomeBanner/>
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