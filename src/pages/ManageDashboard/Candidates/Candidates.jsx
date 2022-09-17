import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../components/Loading/Loading";
import { BASE_API } from "../../../config";
import useCandidate from "../../../hooks/useCandidate";
import useTitle from "../../../hooks/useTitle";
import Candidate from "./Candidate";
import "./CandidateCss/Candidate.css";

const Candidates = () => {
  useTitle("Candidates");
  const { getApplicants, isLoading } = useCandidate();

  const { data } = useQuery(["AllredyGiven"], () =>
    axios.get(`${BASE_API}/AllredyGiven?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  const allreadyGiven = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5 bg-base-100">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Candidates</h3>
        <span>
          You can manage all the Candidates which are applied your jobs
        </span>
      </div>
      {getApplicants?.length > 0 ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-primary">
                    <tr>
                      <th scope="col"></th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Candidates
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Applied For
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Resume/Link
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Task
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Details
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {getApplicants?.map((applicant, index) => (
                      <Candidate
                        applicant={applicant}
                        index={index}
                        key={applicant._id}
                        allreadyGiven={allreadyGiven}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              Not Candidates yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Candidates;
