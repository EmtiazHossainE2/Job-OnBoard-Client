import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../components/Loading/Loading";
import { BASE_API } from "../../../config";
import useTitle from "../../../hooks/useTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../hooks/useAdmin";
import useHrManager from "../../../hooks/useHrManager";
import { FiEdit } from "react-icons/fi";
import { BsFolderSymlink, BsLink45Deg } from "react-icons/bs";
import useCandidateInfo from "../../../hooks/useCandidateInfo";

const Profile = () => {
  useTitle("Profile");
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [hr] = useHrManager(user);
  const [editProfile, setEditProfile] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState("false");
  const onSubmit = (data) => {
    setLoading(false);
    saveProfileDataOnMongodb(data);
    setLoading(true);
  };

  const saveProfileDataOnMongodb = async (data) => {
    const profileData = {
      displayName: data?.displayName,
      address: data?.address,
      resume: data?.resume,
      number: data?.number,
      gender: data?.gender,
      linkedinUrl: data?.linkedinUrl,
      portfolioUrl: data?.portfolioUrl,
      githubUrl: data?.githubUrl,
      profileUrl: data?.profileUrl,
      dateOfBirth: data?.dateOfBirth,
      bloodGroup: data?.bloodGroup,
      createdAt:
        new Date().toDateString() + " " + new Date().toLocaleTimeString(),
    };
    await fetch(`${BASE_API}/users/all?uid=${auth?.currentUser?.uid}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          toast.success("Profile Updated Successfully");
          reset();
          refetch();
          setEditProfile(false);
        }
      });
  };

  const { data, isLoading, refetch } = useCandidateInfo();
  if (isLoading)
    return (
      <div className="md:p-80">
        <Loading />
      </div>
    );

  const {
    displayName,
    address,
    resume,
    gender,
    portfolioUrl,
    linkedinUrl,
    githubUrl,
    profileUrl,
    number,
    dateOfBirth,
    bloodGroup,
  } = data?.data?.result;

  return (
    <div className="lg:h-screen">
      <div className=" border-b-2 border-primary py-3">
        <h2 className="text-center text-2xl font-semibold ">Profile</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-12 my-10 px-1 md:px-10">
        <div className="shadow-xl border-l-4 border-primary rounded-lg relative p-4 order-1 my-8 md:my-0">
          <h2 className="text-xl mb-4 px-4 font-bold">Your Information</h2>
          <label
            htmlFor="editProfile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() =>
              setEditProfile({
                displayName,
                gender,
                number,
                dateOfBirth,
                bloodGroup,
                address,
                resume,
                githubUrl,
                portfolioUrl,
                linkedinUrl,
                profileUrl,
              })
            }
          >
            <FiEdit className="text-white" />
          </label>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Name</span>

            <span>
              {displayName ? displayName : auth?.currentUser?.displayName}
            </span>
          </div>
          <hr className="border-dashed" />

          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Designation</span>
            <span className="badge bg-primary border-primary text-white">
              {!admin && hr ? "HR" : admin && !hr ? "Admin" : "Candidate"}
            </span>
          </div>
          <hr className="border-dashed" />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Email</span>

            <span>{auth?.currentUser?.email}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Contact Number</span>

            <span>{number ? number : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Gender</span>

            <span>{gender ? gender : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Location</span>

            <span>{address ? address : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Date Of Birth</span>

            <span>{dateOfBirth ? dateOfBirth : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />

          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Blood Group</span>

            <span>{bloodGroup ? bloodGroup : "Not Available"}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
            <span>Resume/CV</span>

            <span>
              {resume ? (
                <a target="_blank" href={resume} rel="noreferrer">
                  <BsFolderSymlink className="text-lg" />
                </a>
              ) : (
                "Not Available"
              )}
            </span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-center items-center py-4">
            <span>Social Links</span>
          </div>
          <div className="flex justify-center items-center px-4">
            {portfolioUrl || linkedinUrl ? (
              <div className="flex items-center gap-2">
                <a target="_blank" href={linkedinUrl} rel="noreferrer">
                  <FaLinkedin className="text-xl" />
                </a>
                <a target="_blank" href={portfolioUrl} rel="noreferrer">
                  <BsLink45Deg className="text-xl" />
                </a>
                <a target="_blank" href={githubUrl} rel="noreferrer">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            ) : (
              <span className="label-text-alt">Not available</span>
            )}
          </div>
        </div>

        <div className="text-center md:order-1">
          <div className="avatar mx-auto border-4 border-primary p-3 rounded-xl bg-base-300 shadow-xl">
            <div className=" w-60 rounded-xl">
              {auth?.currentUser?.photoURL && !profileUrl ? (
                <img src={auth?.currentUser?.photoURL} alt="profile" />
              ) : !auth?.currentUser?.photoURL && profileUrl ? (
                <img src={profileUrl} alt="profile" />
              ) : (
                <img src="https://i.ibb.co/xY0rfV4/avatar.jpg" alt="profile" />
              )}
            </div>
          </div>

          {/* <h2 className="mt-4 font-bold text-xl">
            {auth?.currentUser?.displayName}
          </h2>
          <small className="mt-4 font-bold">{auth?.currentUser?.email}</small> */}

          <div className="mt-3">
            <button className="btn btn-primary text-white">
              Change Profile
            </button>
          </div>
        </div>
      </div>
      {editProfile && (
        <>
          <input type="checkbox" id="editProfile" className="modal-toggle " />
          <div className="modal">
            <div className="modal-box relative w-10/12 max-w-3xl">
              <label
                htmlFor="editProfile"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="another-info flex items-center justify-center flex-col gap-2 my-3"
              >
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                    required
                    defaultValue={displayName || auth?.currentUser?.displayName}
                    {...register("displayName", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Profile Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Profile Image Link"
                    className="input input-bordered w-full"
                    required
                    defaultValue={profileUrl}
                    {...register("profileUrl", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full"
                    required
                    defaultValue={address}
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Resume/CV</span>
                  </label>
                  <input
                    type="link"
                    placeholder="Resume/CV"
                    className="input input-bordered w-full"
                    required
                    defaultValue={resume}
                    {...register("resume", { required: true })}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="my-2 w-full">
                    <label className="label">
                      <span className="label-text-alt">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      defaultValue={number}
                      required
                      className="input input-bordered w-full"
                      {...register("number", { required: true })}
                    />
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text-alt">Gender</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      required
                      defaultValue={gender}
                      {...register("gender", { required: true })}
                    >
                      <option disabled selected>
                        Select one
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                <p className="mt-2 text-center">Social Media Links</p>
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="w-full">
                    <label htmlFor="linkedin" className="my-2">
                      <span className="label-text-alt">LinkedIn</span>
                    </label>
                    <input
                      type="link"
                      placeholder="LinkedIn Link"
                      defaultValue={linkedinUrl}
                      className="input input-bordered w-full"
                      {...register("linkedinUrl", { required: true })}
                    />
                    {errors.linkedinUrl?.type === "required" && (
                      <span className="text-error">
                        LinkedIn URL is required
                      </span>
                    )}
                  </div>
                  <div className="my-2 w-full">
                    <label htmlFor="facebook" className="my-2">
                      <span className="label-text-alt">Portfolio</span>
                    </label>
                    <input
                      type="link"
                      placeholder="Portfolio Link"
                      defaultValue={portfolioUrl}
                      className="input input-bordered w-full"
                      {...register("portfolioUrl", { required: true })}
                    />
                    {errors.portfolioUrl?.type === "required" && (
                      <span className="text-error">
                        Portfolio URL is required
                      </span>
                    )}
                  </div>
                  <div className="my-2 w-full">
                    <label htmlFor="github" className="my-2">
                      <span className="label-text-alt">GitHub</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Github Link"
                      defaultValue={githubUrl}
                      className="input input-bordered w-full"
                      {...register("githubUrl", { required: true })}
                    />
                    {errors.githubUrl?.type === "required" && (
                      <span className="text-error">Github URL is required</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text-alt">Date of Birth</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      defaultValue={dateOfBirth}
                      required
                      className="input input-bordered w-full"
                      {...register("dateOfBirth", { required: true })}
                    />
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text-alt">Blood Group</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      required
                      defaultValue={bloodGroup}
                      {...register("bloodGroup", { required: true })}
                    >
                      <option disabled selected>
                        Select one
                      </option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>A-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </select>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary text-white"
                    disabled={!loading && true}
                  >
                    {!loading ? "Updating Profile..." : "Update Profile"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
