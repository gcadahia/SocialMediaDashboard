import React, { Component } from 'react';
import facebookLogo from '../assets/images/icon-facebook.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';

class FollowersCard extends Component {

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

      renderFollowerType(param) {
        switch(param) {
          case 'youtube':
            return 'SUBSCRIBERS';
          default:
            return 'FOLLOWERS';
        }
      }

      renderBorderTop(param) {
        switch(param) {
            case 'facebook':
                return '__card-border-facebook';
            case 'twitter':
                return '__card-border-twitter';
            case 'instagram':
                return '__card-border-instagram';
            default:
                return '__card-border-youtube';
        }
      }

      followersTodayTest(){
          if (this.props.followersToday > 0)
          return '__followers-today-positive'
          else return '__followers-today-negative'
      }

      render(){
        return(
            <div className={this.renderBorderTop(this.props.socialMediaName)}>
                <div className="__followers-card">
                    <div className="flex justify-center">
                        <span className="__social-media-logo">
                            {this.renderLogoSwitch(this.props.socialMediaName)}
                        </span>
                        <span className="__username">
                            {this.props.username}
                        </span>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">
                            {this.props.followersCount}
                        </h1>
                        <p className="__followers-type">
                            {this.renderFollowerType(this.props.socialMediaName)}
                        </p>
                    </div>
                    <div className={this.followersTodayTest()}>
                        {Math.abs(this.props.followersToday)} Today
                    </div>
                </div>
            </div>
        )
      }
}

export default FollowersCard