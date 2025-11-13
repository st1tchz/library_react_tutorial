import React from 'react'
import { faBoltLightning, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Highlight from './ui/Highlight.jsx'

const Highlights = () => {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>?
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faBoltLightning} />}
                        title="Easy and Quick"
                        para="Get access to the book you want instantly." 
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faBookOpen} />}
                        title="10,000+ Books"
                        para="Library has books in all your favorite categories." 
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faTags} />}
                        title="Affordable"
                        para="Get your hands on popular books for as little as $10." 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights