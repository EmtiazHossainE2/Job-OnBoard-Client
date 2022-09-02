import React, { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import RecruitmentCard from "./RecruitmentCard";
// import useHrJob from "../../../hooks/useHrJob";
import Loading from "../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchHrJobs } from "../../../Features/HrJobs/HrJobsSlice";


const Recruitment = () => {
  useTitle("Recruitment");
  // const [hrJobs, hrJobsLoading] = useHrJob();
  const { isLoading, hrJobs } = useSelector((state) => state.hrJobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHrJobs());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div data-testId="recuitment-1" className="p-5 h-screen">
      <div className="title my-2 mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">
          Manage Recruitment Jobs
        </h3>
        <span>
          You can see job details and applied candidate which job post by you .
        </span>
      </div>
      {hrJobs?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
          {hrJobs?.map((job, index) => (
            <RecruitmentCard job={job} key={index} index={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              No Job Found.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Recruitment;
