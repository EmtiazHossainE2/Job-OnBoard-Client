import { BsTelephoneForward } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
// Plugins
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
// import { Worker } from "@react-pdf-viewer/core"; // install this library
const RecruitmentRow = ({
  applicant,
  index,
  refetch,
  setApplicantData,
  status,
}) => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const navigate = useNavigate();
  console.log(applicant);
  // const seeResume = applicant?.candidateResume;
  const handleUpdateStatus = async (id) => {
    const candidates = {
      fullName: applicant?.displayName,
      employeId: "",
      employeEmail: applicant?.email,
      designation: applicant?.job?.category,
      gender: "",
      age: "",
      joiningDate: "",
      bloodGroup: "",
      location: "",
      phoneNumber: applicant?.number,
      photoLink: applicant?.profileUrl,
      additionInfo: "",
      hrUserEmail: applicant?.hrEmail,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Hire!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${BASE_API}/applicants/status?id=${id}`, {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: true }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
              fetch(`${BASE_API}/addEmployees`, {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                body: JSON.stringify(candidates),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data?.insertedId) {
                    Swal.fire({
                      text: "Your Candidate is Hired Successfully",
                      icon: "success",
                      confirmButtonText: "Okay",
                    });
                    refetch();
                    navigate("/dashboard/employee");
                  }
                });
            }
          });
      }
    });
  };

  // const { data } = useQuery(["candidateSubmission"], () =>
  //   axios.get(`${BASE_API}/submittedTask`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  // );

  // const submissionData = data?.data;

  // console.log(submissionData)

  // const filtered = submissionData?.filter((data) => {
  //   return data?.email === applicant?.email;
  // });
  // console.log(filtered);
  /**
   * Display a base64 URL inside an iframe in another window.
   */
  //  function debugBase64(base64URL){
  //   var win = window.open();
  //   win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  // }

  // // e.g This will open an image in a new window
  // debugBase64({applicant?.candidateResume});
  return (
    <>
      <tr className="bg-base-100 border-b transition duration-300 ease-in-out">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {index + 1}
        </td>
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
          <div className="space-y-1">
            <div className="font-normal">{applicant?.displayName}</div>
            <div className="text-sm font-semibold">{applicant?.email}</div>
            <div className="text-sm font-semibold flex space-x-2 items-center">
              <BsTelephoneForward />
              <span>{applicant?.number}</span>
            </div>
          </div>
        </td>

        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap">
          {applicant?.jobTitle}
          <br />
          <span className="badge badge-ghost ">{applicant?.category}</span>
        </td>

        <td className="text-sm font-light px-14 py-4 whitespace-nowrap">
          <button
            className="btn btn-outline btn-xs capitalize "
            onClick={() =>
              navigate(`/dashboard/cndidatsResume/${applicant?._id}`)
            }
          >
            View Resume
          </button>
        </td>

        <td className="text-sm font-normal px-6 py-4 text-center whitespace-nowrap">
          <label
            onClick={() => setApplicantData(applicant)}
            htmlFor="task-modal"
            className={`${
              status
                ? "hidden"
                : "btn btn-outline btn-xs cursor-pointer capitalize"
            }`}
          >
            Send Task
          </label>
        </td>

        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-center">
          {/* <span
            className={`btn btn-outline btn-xs capitalize ${filtered?.map(
              (stat) => (stat?.status === true ? "" : "btn-disabled")
            )}`}
            onClick={() =>
              navigate(`/dashboard/submittedTask/candidate/${applicant?._id}`)
            }
          >
            View Submission
          </span> */}
          <span
            className="btn btn-outline btn-xs capitalize "
            onClick={() =>
              navigate(`/dashboard/submittedTask/candidate/${applicant?._id}`)
            }
          >
            View Submission
          </span>
        </td>

        <td className="text-sm font-light px-6 py-4 ">
          <div className="text-sm font-semibold flex gap-1">
            <button
              onClick={() => handleUpdateStatus(applicant?._id)}
              disabled={applicant?.status === true && true}
              className={`flex btn btn-xs bg-[#0d5bae] hover:bg-[#0d77e8] text-white`}
            >
              {applicant?.status === true ? "Hired" : "Hire "}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RecruitmentRow;
