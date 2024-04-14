import dayjs from "dayjs";
import { useState } from "react";

export default function Jobcard({ jobsdata }) {
  const date1 = dayjs(Date.now());
  // const date2 = Date.now();
  let postedon1 = date1.diff(jobsdata.postedon, "day");

  return (
    <div>
      <div className="bg-white rounded-lg m-10 p-5 hover:-translate-y-[4px] duration-300">
        <div>
          <p className="text-black font-semibold text-xl">
            {jobsdata.title}-{jobsdata.company}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="my-2 text-zinc-500 font-semibold">
              {jobsdata.type} . {jobsdata.experience} . {jobsdata.location}
            </p>
            <div className="flex mt-4">
              <p className="bg-purple-100 text-black border px-3 py-1 rounded me-2 hover:bg-blue-300">
                {jobsdata.skills[0]}
              </p>{" "}
              <p className="bg-purple-100 text-black border px-3 py-1 rounded me-2 hover:bg-blue-300">
                {jobsdata.skills[1]}
              </p>
              <p className="bg-purple-100 text-black border px-3 py-1 rounded me-2 hover:bg-blue-300">
                {jobsdata.skills[2]}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="my-2 text-zinc-500 font-semibold">
              Posted {postedon1} {postedon1 > 1 ? "days " : "day "} ago
            </p>
            <a href={jobsdata.job_link}>
              <button className="border-2 bg-blue-600 px-3 text-white py-1 rounded-md mx-3 hover:bg-blue-700">
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
