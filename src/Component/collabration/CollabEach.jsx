import React from 'react'
import './collab.css'
import Slider from 'react-infinite-logo-slider'
import Image1 from '../../assets/logo/Adobe.png'
import Image2 from '../../assets/logo/App Swift-01.png'
import Image3 from '../../assets/logo/Autodesk-01.png'
import Image4 from '../../assets/logo/CISCO-01.png'
import Image5 from '../../assets/logo/Communication-01.png'
import Image6 from '../../assets/logo/ESB-01.png'
import Image7 from '../../assets/logo/IBM-01.png'
import Image8 from '../../assets/logo/IT-01.png'
import Image9 from '../../assets/logo/Meta-Logo.png'
import Image10 from '../../assets/logo/Microsoft-01.png'
import Image11 from '../../assets/logo/Project Management Issue-01.png'
import Image12 from '../../assets/logo/Unity-01.png'
import Image13 from '../../assets/logo/Untitled-2-01.png'
import Image14 from '../../assets/logo/certiport-logo.png'

const CollabEach = () => {
    return (
        <>
            <div className='py-1.5 px-0'>
                <Slider
                    width="200px"
                    duration={30}
                    toLeft={true}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >

                    <Slider.Slide >
                        <img loading="lazy" className="collab_img" alt="" src={Image1}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image2}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image3}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image4}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image5}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image6}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image7}></img>
                    </Slider.Slide>

                </Slider>
            </div>
            <div className='collabration'>
                <Slider
                    width="200px"
                    duration={30}
                    toLeft={true}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >

                    <Slider.Slide >
                        <img loading="lazy" className="collab_img" alt="" src={Image8}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image9}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image10}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image11}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image12}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image13}></img>
                    </Slider.Slide>

                    <Slider.Slide>
                        <img loading="lazy" className="collab_img" alt="" src={Image14}></img>
                    </Slider.Slide>

                </Slider>
            </div>

        </>
    )
}

export default CollabEach