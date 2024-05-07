import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Carrousel(props){

    const {image, image2, image3, image4} = props

        return (
            <Carousel infiniteLoop={true}>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <img src={image2} alt=""/>
                </div>
                <div>
                    <img src={image3} alt=""/>
                </div>
                <div>
                    <img src={image4} alt=""/>
                </div>
            </Carousel>
        );
    }

