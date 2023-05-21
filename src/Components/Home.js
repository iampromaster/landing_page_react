import React from "react";
import { Navbar } from "./Navbar";
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImages from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

export const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImages} alt="" />
        </div>
      </div>
    </div>
  );
};