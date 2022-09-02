import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppliedCandidates from "../../../../hooks/useAppliedCandidates";
import useJob from "../../../../hooks/useJob";
import RecruitmentRow from "../RecruitmentRow";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImArrowLeft2 } from "react-icons/im";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import TaskModal from "../../Candidates/TaskModal";

const SingleJobCandidates = () => {
  const [applicantData, setApplicantData] = useState(null);
  const { jobId } = useParams();
  const [job] = useJob(jobId);
  const navigate = useNavigate();

  const { data, refetch } = useAppliedCandidates(job);
  const countData = data?.data;
  // console.log(job);

  //  Candidate Info To Excel
  const [candidateData, setCandidateData] = useState([]);
  const fileName = job?.jobTitle;
  // console.log(candidateData?.header)

  useEffect(() => {
    const header = countData?.map((candidate, index) => ({
      CandidateId: index + 1,
      "Candidate Name": candidate?.displayName,
      "Candidate Email": candidate?.email,
      "Candidate Phone": candidate?.number,
    }));
    setCandidateData(header);
  }, [countData]);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (candidateData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(candidateData);
    XLSX.utils.sheet_add_aoa(
      ws,
      [["Index", "DisplayName", "Email", "Number"]],
      { origin: "A1" }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  // const { data: singleTask } = useQuery(["getJobTask"], () =>
  //   fetch(`${BASE_API}/singleTask/${taskId}`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );

  // console.log(singleTask);

  const singleCandidates = (id) => {
    navigate(`/dashboard/recruitment/mail/${id}`);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen">
      {/* Job Description  */}
      <div className="">
        <div className="shadow-md py-10 space-y-5 px-5">
          <div className="space-y-2">
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-1 justify-between">
              <div className="flex lg:justify-center lg:items-center gap-2 pb-4 lg:pb-0">
                <div
                  onClick={back}
                  className="flex justify-center items-center gap-x-2 cursor-pointer hover:text-primary"
                >
                  <span className="font-extrabold text-xl">
                    <ImArrowLeft2 />
                  </span>
                  <h2 className="text-xl md:text-xl font-bold ">
                    {job?.jobTitle}
                  </h2>
                </div>
                <h2 className="text-xl md:text-lg lg:text-xl font-mono md:mt-1 lg:mt-0  font-bold  hidden md:block">
                  {" "}
                  | Vacancy : {job?.openingPosition}
                </h2>
              </div>
              <p className="text-md md:text-xl lg:text-2xl md:font-bold  font-mono">
                {job?.companyName}
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row space-y-2 gap-3 lg:gap-0  justify-between">
              <p className="flex ">
                {" "}
                <span className="px-1 pt-1">
                  <HiOutlineLocationMarker />
                </span>{" "}
                {job?.location}{" "}
              </p>
              <p className="">
                Salary : ${job?.salary}
                <small>/m</small>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-1">
            <span className="lg:pt-4 font-semibold">
              Applied Candidates : {countData?.length}
            </span>

            {/* Download All Candidates Info In Excel  */}
            <div>
              <button
                className="btn btn-sm btn-outline capitalize"
                onClick={(e) => exportToCSV(candidateData, fileName)}
              >
                download excel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Info  */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      No
                    </th>
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
                      className="text-sm font-medium text-white px-6 py-4 "
                    >
                      Resume
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 "
                    >
                      Send Task
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 "
                    >
                      Applicant Assignment
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countData?.map((applicant, index) => (
                    <RecruitmentRow
                      applicant={applicant}
                      key={index}
                      index={index}
                      refetch={refetch}
                      singleCandidates={singleCandidates}
                      setApplicantData={setApplicantData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {applicantData && (
        <TaskModal
          applicantData={applicantData}
          setApplicantData={setApplicantData}
        />
      )}

      {/*Dashboard Footer  */}
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default SingleJobCandidates;
