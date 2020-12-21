import React from "react";

import useTrackGoal from "../hooks/useTrackGoal";

import illustration from "../icons/mentor_illustration.svg";

const MentorBanner = () => {
  const track = useTrackGoal();

  return (
    <div className="flex flex-col p-5 rounded-lg shadow-2xl bg-gray-50 sm:flex-row">
      <img src={illustration} alt="" className="self-center w-3/5 sm:w-1/3" />
      <div className="mt-4 space-y-4 sm:ml-8 sm:mt-0">
        <p className="text-xl font-extrabold text-center text-gray-800 uppercase sm:text-2xl sm:text-left">
          Boost your career through mentoring
        </p>
        <p className="font-semibold text-center text-gray-700 sm:text-lg sm:text-left">
          Whether you're learning front-end development, building a web
          application or trying to get a job, I can help. Get me as your
          front-end mentor and level-up your skills.
        </p>
        <a
          href="https://mentorcruise.com/mentor/ThomasLombart/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-3 font-bold text-gray-100 transition-all transform bg-gray-800 rounded-lg shadow sm:text-lg sm:px-6 sm:w-auto hover:bg-gray-900"
          onClick={() => track("Mentor link")}
        >
          <img
            src="https://cdn.mentorcruise.com/img/cruise_white_small.png"
            className="w-7 h-7 sm:w-8 sm:h-8"
            alt=""
          />
          <span className="ml-3">Become my mentee</span>
        </a>
      </div>
    </div>
  );
};

export default MentorBanner;
