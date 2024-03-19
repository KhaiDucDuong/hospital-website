import React from 'react'

function HomeBanner() {
  return (
    <>
        <section className="section section-search"   style={{height:"90vh", padding:"200px"}}>
            <div className="container-fluid">
            <div className="banner-wrapper">
                <div className="banner-header text-center">
                <h1>Search Doctor, Make an Appointment</h1>
                <p>
                    Discover the best doctors, clinic &amp; hospital the city nearest
                    to you.
                </p>
                </div>
                {/* Search */}
                <div className="search-box" style={{ display: 'flex' }}>
                <form action="doctor/search">
                    <div className="form-group search-location">
                    <input
                        name ='doctor'
                        type="text"
                        className="form-control"
                        placeholder="Search Doctor"
                    />
                    <span className="form-text">Search for Doctor</span>
                    </div>
                    </form>
                    <form action="department/search">
                    <div className="form-group search-info">
                    <input
                        name ='department'
                        type="text"
                        className="form-control"
                        placeholder="Search Hospitals"
                    />
                    <span className="form-text">
                        Ex : Dental or Sugar Check up etc
                    </span>
                    </div>
                </form>
                </div>
                {/* /Search */}
            </div>
            </div>
        </section>
    </>
  )
}

export default HomeBanner