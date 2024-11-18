import React from "react";
import LocationIcon from "./Icons/LocationIcon";
import WebsiteIcon from "./Icons/WebsiteIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import CompanyIcon from "./Icons/CompanyIcon";

const UserDisplay = ({ results }) => {
  // Format the website URL for display and linking
  const formatWebsite = (url) => {
    if (!url) return "Not Available";
    let displayUrl = url;
    if (url.startsWith("http://")) displayUrl = url.slice(7);
    if (url.startsWith("https://")) displayUrl = url.slice(8);
    if (displayUrl.endsWith("/")) displayUrl = displayUrl.slice(0, -1);
    return (
      <a
        href={url.startsWith("http") ? url : `https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-inherit"
      >
        {displayUrl}
      </a>
    );
  };

  // Format company name (remove @ if present)
  const formatCompany = (company) => {
    if (!company) return "Not Available";
    return company.startsWith("@") ? company.slice(1) : company;
  };

  return (
    <section className="w-full md:w-[700px] lg:w-[800px] mx-auto px-5 sm:px-8 my-6">
      <div className="w-full bg-[#1E2A47] rounded-xl p-5 md:p-12">
        {/* First div for image and name */}
        <div className="flex items-center">
          <div>
            <img
              src={results.avatar_url}
              alt={`${results.login}'s profile picture`}
              className="rounded-full size-20 sm:size-28 mr-16"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-center sm:flex-row space-y-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {results.name || results.login}
              </h1>
              <p className="text-blue-500">@{results.login}</p>
            </div>
            <div>
              <p className="text-sm sm:text-base">
                Joined{" "}
                {new Date(results.created_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[82%] md:ml-28 lg:ml-32">
          {/* Second div for bio and stats */}
          <div className="pt-6">
            <p className="pl-2 text-gray-300">
              {results.bio || "This profile has no bio"}
            </p>
            <div className="bg-[#141D2F] px-3 sm:px-5 py-5 flex justify-between items-center mt-5 rounded-lg shadow-lg">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm text-gray-300">Repos</span>
                <span className="text-lg font-bold">{results.public_repos}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm text-gray-300">Followers</span>
                <span className="text-lg font-bold">{results.followers}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm text-gray-300">Following</span>
                <span className="text-lg font-bold">{results.following}</span>
              </div>
            </div>
          </div>

          {/* Third div for social media */}
          <div className="flex flex-col sm:flex-row justify-between md:justify-around md:items-center pt-6">
            <div className="flex flex-col space-y-3">
              <span className={!results.location ? "opacity-50" : ""}>
                <LocationIcon />{" "}
                {results.location || "Not Available"}
              </span>
              <span className={!results.blog ? "opacity-50" : "pb-3 sm:pb-0"}>
                <WebsiteIcon /> {formatWebsite(results.blog)}
              </span>
            </div>
            <div className="flex flex-col space-y-3">
              <span className={!results.twitter_username ? "opacity-50" : ""}>
                <TwitterIcon />{" "}
                {results.twitter_username || "Not Available"}
              </span>
              <span className={!results.company ? "opacity-50" : ""}>
                <CompanyIcon /> {formatCompany(results.company)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDisplay;