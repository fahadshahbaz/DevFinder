import React from "react";
import LocationIcon from "./Icons/LocationIcon";
import WebsiteIcon from "./Icons/WebsiteIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import CompanyIcon from "./Icons/CompanyIcon";

const UserDisplay = () => {
  return (
    <section className="w-full md:w-[700px] lg:w-[800px] mx-auto px-5 sm:px-12 mt-8">
      <div className="w-full bg-[#1E2A47] rounded-xl p-5 md:p-8">
        {/* First div for image and name */}
        <div className="flex items-center">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="profile picture"
              className="rounded-full size-20 sm:size-28 mr-16"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-center sm:flex-row space-y-2">
            <div>
            <h1 className="text-2xl sm:text-3xl font-bold">The Octoat</h1>
            <p className="text-blue-500">@username</p>
            </div>
            <div>
            <p className="text-sm sm:text-base">Joined 25 Jan 2011</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[82%] md:ml-28 lg:ml-32">
        {/* Second div for bio and stats */}
        <div className="pt-6">
          <p className="pl-2">This profile has no bio</p>
          <div className="bg-[#141D2F] space-x-3 px-3 sm:px-5 py-5 flex justify-between items-center mt-5 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <span className="text-sm">Repos</span>
              <span className="text-lg font-bold">8</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Followers</span>
              <span className="text-lg font-bold">155757</span>
            </div>
            <div className="flex flex-col pr-12">
              <span className="text-sm">Following</span>
              <span className="text-lg font-bold">9</span>
            </div>
          </div>
        </div>

        {/* Third div for social media */}
        <div className="flex flex-col sm:flex-row justify-between md:justify-around md:items-center pt-6">
          <div className="flex flex-col space-y-3">
            {/* location and github*/}
            <span>
              <LocationIcon /> San Francisco
            </span>
            <span className="pb-3 sm:pb-0">
              <WebsiteIcon /> https://github.blog
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <span>
              <TwitterIcon /> Not available
            </span>
            <span>
              <CompanyIcon /> @github
            </span>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default UserDisplay;
