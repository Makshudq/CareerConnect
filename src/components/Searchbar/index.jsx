import React, { useEffect } from "react";
import { useState } from "react";

function Searchbar({ fetchcustomjob, fetchjob }) {
  const [jobcriteria, setjobcriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  function handlechange(e) {
    setjobcriteria((previousstate) => ({
      ...previousstate,
      [e.target.name]: e.target.value,
    }));
    console.log(jobcriteria);
  }

  const [reset, setreset] = useState(false);

  const search = async () => {
    await fetchcustomjob(jobcriteria);
    setreset(true);
  };

  const refresh = () => {
    fetchjob();
    setjobcriteria({
      title: "",
      location: "",
      experience: "",
      type: "",
    });
    setreset(false);
  };

  return (
    <div className="flex gap-10 justify-center mt-10">
      <select
        onChange={handlechange}
        name="title"
        value={jobcriteria.title}
        className="px-4 py-2 bg-zick-500 font-semibold rounded-md w-64"
      >
        <option value="" disabled selected>
          Job Title
        </option>
        <option value="IOS Developer">IOS Developer</option>
        <option value="Front End Developer">Front End Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      <select
        onChange={handlechange}
        name="type"
        value={jobcriteria.type}
        className="px-4 py-2 bg-zick-500 font-semibold rounded-md w-64"
      >
        <option value="" disabled selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select
        onChange={handlechange}
        name="location"
        value={jobcriteria.location}
        className="px-4 py-2 bg-zick-500 font-semibold rounded-md w-64"
      >
        <option value="" disabled selected>
          Location
        </option>
        <option value="In Office">In Office</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        onChange={handlechange}
        name="experience"
        value={jobcriteria.experience}
        className="px-4 py-2 bg-zick-500 font-semibold rounded-md w-64"
      >
        <option value="" disabled selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button
        className="bg-blue-500 text-white font-bold hover:bg-blue-700  px-4 rounded-md"
        onClick={search}
      >
        Search
      </button>

      {reset ? (
        <button
          className="bg-blue-500 text-white font-bold hover:bg-blue-700  px-4 rounded-md"
          onClick={refresh}
        >
          All Jobs
        </button>
      ) : null}
    </div>
  );
}

export default Searchbar;
