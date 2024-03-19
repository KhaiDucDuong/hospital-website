import React from 'react'

function Breadcrumb({data}) {
  return (
    <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar" style={{padding:'100px 0 10px 0'}}>
            <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Search
                    </li>
                    </ol>
                </nav>
                <h2 className="breadcrumb-title">
                    Search for: {data}
                </h2>
                </div>
                <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                    <span className="sort-title">Sort by</span>
                    <span className="sortby-fliter">
                    <select className="select">
                        <option>Select</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                    </select>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* /Breadcrumb */}
    </>

  )
}

export default Breadcrumb