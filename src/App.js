import React from 'react';
import FollowersCard from './components/followers-card';
import OverviewCard from './components/overview-card';
import followersMockData from './assets/fake-api.json';


function App() {

  const followersCardComponents = followersMockData.followersDetail.map(socialMediaInfo =>
    <FollowersCard
      key={socialMediaInfo.id}
      socialMediaName={socialMediaInfo.socialMediaName}
      username={socialMediaInfo.username}
      followersCount={socialMediaInfo.followersCount}
      followersToday={socialMediaInfo.followersToday}
    />)

  const overviewCardComponents = followersMockData.followersOverview.map(socialMediaInfo =>
    <OverviewCard
      key={socialMediaInfo.id}
      socialMediaName={socialMediaInfo.socialMediaName}
      count={socialMediaInfo.count}
      countLabel={socialMediaInfo.countLabel}
      percent={socialMediaInfo.percent}
    />)

  return (
    <body className="container max-w-screen-2xl font-inter __top-bg-pattern __text-primary h-screen px-10 sm:px-10 md:px-20 xl:px-40">

      {/* Header Title */}
      <div className="flex flex-col sm:flex-row justify-between pt-9 mb-2 sm:mb-9">
        <div className="text-center sm:text-left">
          <div className="text-xl md:text-2xl font-bold">Social Media Dashboard</div>
          <div className="text-sm font-bold __text-secondary">Total Followers: {followersMockData.totalFollowers}</div>
        </div>
        {/* TEMP TOGGLE BUTTON */}
        <div className="flex justify-center md:justify-between my-4 sm:my-auto">
          <span className="text-sm font-bold __text-secondary mr-2">Dark Mode</span>
          <span class="border rounded-full border-grey flex items-center cursor-pointer w-10 __bg-toggle-gradient justify-end my-auto">
            <span class="rounded-full border w-4 h-4 m-0.5 border-grey shadow-inner bg-white shadow">
            </span>
          </span>
        </div>
      </div>

      {/* Followers Cards Array */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 sm:gap-4 gap-6 text-center mb-5">
        {followersCardComponents}
      </div>

      {/* Overview Section Title */}
      <div className="py-5">
        <div className="__section-title">Overview - Today</div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 text-center mb-5">
        {overviewCardComponents}
      </div>

    </body>
  );
}

export default App;
