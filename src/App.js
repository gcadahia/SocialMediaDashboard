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
    <div className="container font-inter __top-bg-pattern __text-primary h-screen px-40">

      {/* Header Title */}
      <div className="flex justify-between pt-9 mb-9">
        <div>
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <p className="text-sm font-bold __text-secondary">Total Followers: {followersMockData.totalFollowers}</p>
        </div>
        {/* TEMP TOGGLE BUTTON */}
        <div className="flex justify-between my-auto">
          <span className="text-sm font-bold __text-secondary mr-2">Dark Mode</span>
          <span class="border rounded-full border-grey flex items-center cursor-pointer w-10 __bg-toggle-gradient justify-end">
            <span class="rounded-full border w-4 h-4 m-0.5 border-grey shadow-inner bg-white shadow">
            </span>
          </span>
        </div>
      </div>

      {/* Followers Cards Array */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 text-center mb-5">
        {followersCardComponents}
      </div>

      {/* Overview Section Title */}
      <div className="py-5">
        <h1 className="__section-title">Overview - Today</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 text-center mb-5">
        {overviewCardComponents}
      </div>

    </div>
  );
}

export default App;
