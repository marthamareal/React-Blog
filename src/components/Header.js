import React from 'react'

const Header = () =>  {
    return (

        <nav>

            <div className="row blue-grey darken">

                <div className="col s4">
                    <div className="col s1">
                        <i className="material-icons left">book</i>
                    </div>

                    <div className="col s3">
                        <a className="brand-logo">
                            Authors Haven
                        </a>
                    </div>
                </div>

                <div className="col s8 hide-on-med-and-down">

                    <div className="col s6">
                        <ul className="right">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div>

                    <div className="col 2 right">
                        <input type="text" className="nav-search " placeholder="Search here" />
                    </div>

                </div>

            </div>

        </nav>

    )
};

export { Header as default};