import React from "react";
import style from "../../../../App.module.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {compose} from "redux";
import {connect} from "react-redux";
import MyWorks from "./MyWorks";
import Photo1 from "../../../../images/my_works/1.png";
import Photo2 from "../../../../images/my_works/2.png";
import Photo3 from "../../../../images/my_works/3.png";
import Photo4 from "../../../../images/my_works/4.png";

class MyWorksContainer extends React.Component {

    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className={style.sliderWrapper}>
                <Slider {...settings}>
                    <MyWorks photo={Photo1} />
                    <MyWorks photo={Photo2} />
                    <MyWorks photo={Photo3} />
                    <MyWorks photo={Photo4} />
                </Slider>
            </div>
        )

    }



};

let mapStateToProps = ( state ) => {

    return {

    }

};

export default compose(
    connect(mapStateToProps, {}),
)(MyWorksContainer)