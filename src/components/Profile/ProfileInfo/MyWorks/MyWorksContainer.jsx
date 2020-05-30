import React from "react";
import style from "../../../../App.module.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FancySliderPicture from "../../../Common/FancySliderPicture/FancySliderPicture";
import Slider from "react-slick";
import {compose} from "redux";
import {connect} from "react-redux";
import Photo1 from "../../../../images/my_works/1.png";
import Photo2 from "../../../../images/my_works/2.png";
import Photo3 from "../../../../images/my_works/3.png";
import Photo4 from "../../../../images/my_works/4.png";


class MyWorksContainer extends React.Component {

    state = {
        photos: [
            {photo: Photo1, id: 1},
            {photo: Photo2, id: 2},
            {photo: Photo3, id: 3},
            {photo: Photo4, id: 4}
        ],
        fancyPhoto: '',
        fancyBoxStyle: `${style.fancyBoxActive}`
    };


    /* САМОДЕЛЬНЫй ФЕНСИ БОКС НАЧИНАЕТСЯ ЗДЕСЬ */
    fancyImage = '';
    /*fancyBoxStyle = `${style.fancyBox} ${style.passive}`;*/
    onFancyBoxOn = ( id ) => {
        let fancyImage = this.state.photos.filter( p => id === p.id );
        this.setState({
            fancyPhoto: fancyImage[0].photo,
            fancyBoxStyle: `${style.fancyBoxActive}`
        });
        console.log(fancyImage[0].photo)
    };

    fancyBoxOff = () => {
        this.setState({
            fancyPhoto: '',
            fancyBoxStyle: `${style.fancyBoxPassive}`
        });
    };
    /* САМОДЕЛЬНЫй ФЕНСИ БОКС ЗАКАНЧИВАЕТСЯ ЗДЕСЬ */

    allThePhotos = this.state.photos.map( photos =>
        <div className={style.fancySliderPicture} key={photos.id}>
            {FancySliderPicture(photos.photo, photos.id, this.onFancyBoxOn)}
        </div>
    );


    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            useCSS: true,
            autoplay: true,
            autoplaySpeed: 1500
        };

        return (
            <div className={style.sliderWrapper}>
                <Slider {...settings}>
                    { this.allThePhotos }
                </Slider>
                <div className={this.state.fancyBoxStyle}>
                    <div className={style.fancyBoxFlexWrapper} onClick={ () => {this.fancyBoxOff()} }>
                        {this.state.fancyPhoto && <img src={this.state.fancyPhoto} />}
                    </div>
                </div>
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