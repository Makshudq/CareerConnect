import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import Jobcard from "./components/JobCard";
// import jobsdata from "../src/jobData";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect, useState } from "react";

function App() {
  const [alljobs, setjobs] = useState([]);

  const fetchjob = async () => {
    const tempjobs = [];
    const jobref = query(collection(db, "jobs"));
    const q = query(jobref, orderBy("postedon", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());

      tempjobs.push({
        ...job.data(),
        id: job.data().id,
        postedon: job.data().postedon.toDate(),
      });
    });

    setjobs(tempjobs);
  };

  const fetchcustomjob = async (jobcriteria) => {
    const tempjobs = [];
    const jobref = query(collection(db, "jobs"));
    const q = query(
      jobref,
      where("title", "==", jobcriteria.title),
      where("type", "==", jobcriteria.type),
      where("experience", "==", jobcriteria.experience),
      where("location", "==", jobcriteria.location),
      orderBy("postedon", "desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());

      tempjobs.push({
        ...job.data(),
        id: job.data().id,
        postedon: job.data().postedon.toDate(),
      });

      // console.log(tempjobs.map((item) => item.postedon));
    });

    setjobs(tempjobs);
  };

  useEffect(() => {
    fetchjob();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Searchbar fetchcustomjob={fetchcustomjob} fetchjob={fetchjob} />
      {alljobs.length ? (
        alljobs.map((jobsdata) => (
          <Jobcard key={jobsdata.id} jobsdata={jobsdata} />
        ))
      ) : (
        <div>
          <h2 className="flex justify-center text-2xl text-white font-semibold mt-20">
            No jobs available for your search, try another
          </h2>
        </div>
      )}
    </>
  );
}

export default App;
