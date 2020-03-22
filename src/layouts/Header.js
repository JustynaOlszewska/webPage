
import React, { Component } from "react";
import "../styles/sass/_header.scss";
import { imagesToHeader } from "../data/image";
import { logoImages } from "../data/logo";
import List from "../components/List";
import { nameElementList } from "../data/nameElementList";

// import Slider from "react-slick";


class Header extends Component {
  state = {
    active: true,

   
  };


  componentDidMount() {

       
    this.changeSlideTop = setInterval(this.changeSlide, 3000);
  }

  changeSlide = () => {
    if (this.state.active === true) {
      this.setState({
        active: !this.state.active
      });
    } else if (this.state.active === false) {
      this.setState({
        active: !this.state.active
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.changeSlideTop);
  }
  render() {
const {active} = this.state

    const newLogoImages = logoImages.map(image=> {
      return(
        <img
        className="header__logo-img1"
        src={image}
        alt="img1"
       
      />
      )
    })
   

    return (
      <header
        className="header"

        style={

         active
          ? {
              backgroundImage: `url(${imagesToHeader[0].img4})`
           
              }
            : {
              backgroundImage: `url(${imagesToHeader[0].img5})`
 
              }
             
        }
      >
        <h1 name="gora" className="header__heading">
          Let's turn your idea <br /> into digital product
        </h1>
        <div className="header__logo">
          {newLogoImages}
     
          <div className="header__logo-triangle"></div>

          <h4 className="header__logo-heading">olusio</h4>
        </div>
        <List nameElementList={nameElementList} />

        <a href="http://www.wp.pl" className="allButtons">
          Know more
        </a>
        <div className="dots">
          <span
            className={
              active === true ? "dots__span active" : "dots__span"
            }
          ></span>
          <span
            className={
              active === false ? "dots__span active" : "dots__span"
            }
          ></span>
        </div>
      </header>
    );
  }
}

export default Header;