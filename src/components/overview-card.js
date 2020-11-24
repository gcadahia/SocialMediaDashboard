import React, { Component } from 'react';
import facebookLogo from '../assets/images/icon-facebook.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';

class OverviewCard extends Component{

    renderLogoSwitch(param) {
        switch(param) {
          case 'facebook':
            return <img src={facebookLogo} alt="facebook logo"></img>;
          case 'twitter':
            return <img src={twitterLogo} alt="twitter logo"></img>;
          case 'instagram':
            return <img src={instagramLogo} alt="instagram logo"></img>;
          default:
            return <img src={youtubeLogo} alt="youtube logo"></img>;
        }
    }

    likesVariationPercentTest(){
        if (this.props.percent > 0)
        return '__followers-today-positive'
        else return '__followers-today-negative'
    }

    render(){
        return(
            <div className="__overview-card">
                <div className="flex justify-between">
        <div className="text-xs __text-secondary font-bold">{this.props.countLabel}</div>
                    <div className="__social-media-logo">
                        {this.renderLogoSwitch(this.props.socialMediaName)}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-2xl font-bold">
                        {this.props.count}
                    </div>
                    <div className="my-auto">
                        <div className={this.likesVariationPercentTest()}>
                            {Math.abs(this.props.percent)} %  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewCard