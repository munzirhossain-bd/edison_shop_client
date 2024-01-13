import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/img1.jpg';
import img2 from '../../../assets/home/img2.jpg';
import img3 from '../../../assets/home/img3.jpg';
import img4 from '../../../assets/home/img4.jpg';
import img5 from '../../../assets/home/img5.jpg';
import img6 from '../../../assets/home/img6.jpg';
import img7 from '../../../assets/home/img7.jpg';
import img8 from '../../../assets/home/img1.jpg';
import img9 from '../../../assets/home/img9.jpg';
import img10 from '../../../assets/home/img10.jpg';
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1}  />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
           
            <div>
                <img src={img6} />
            </div>
            <div>
                <img src={img7} />
            </div>
            <div>
                <img src={img8} />
            </div>
            <div>
                <img src={img9} />
            </div>
            <div>
                <img src={img10} />
            </div>
        </Carousel>
    );
};

export default Banner;