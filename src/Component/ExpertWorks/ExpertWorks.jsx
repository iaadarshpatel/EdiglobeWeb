import React from 'react';
import './expertworks.css'
import Slider from 'react-infinite-logo-slider'

const ExpertWorks = () => {

    return (
        <section id='expertworks' className='section_gap expertworks_area'>
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="main_title">
                        <h2 className="mb-3 text-color">Our Expert Works At</h2>
                        <p>Our Trainer works in Big companies</p>
                    </div>
                </div>
                <Slider
                    width="150px"
                    duration={30}
                    toLeft={true}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >

                    <Slider.Slide >
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/64149378ab4ce51422a87095_NVIDIA%20svg%20(3).svg"></img>
                    </Slider.Slide>

                    <Slider.Slide>

                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfc2ac17bb1bfb438bd8f_Frame%201430102671%20(1).svg"></img>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7a1a05ce52679a5d78f_Group%2048097659.svg"></img>

                    </Slider.Slide>


                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf3c3ab258130428e0d63_Licious.svg"></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf40774e09707a8fc2ef5_Expedia%20svg.svg"></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfca3200c82f7563e4df6_Frame%201430102671%20(3).svg"></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf343523aa2c8804e16fb_hotstar.svg"></img>

                    </Slider.Slide>
                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfc2ac17bb1bfb438bd8f_Frame%201430102671%20(1).svg"></img>

                    </Slider.Slide>
                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7a1a05ce52679a5d78f_Group%2048097659.svg"></img>

                    </Slider.Slide>
                    <Slider.Slide>
                        <img loading="lazy" className="image-01" alt="" src="https://assets-global.website-files.com/624629162e6c5c363b391aee/641c0497c240b1be1b31ec11_Frame%201430102672%20(3).svg"></img>

                    </Slider.Slide>
                </Slider>
            </div>
        </section >
    )
}

export default ExpertWorks