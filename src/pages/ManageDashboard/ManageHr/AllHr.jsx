import React from "react";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../../components/Loading/Loading";
import HrRow from "./HrRow";
import { BASE_API } from "../../../config";

const AllHr = () => {
  useTitle("Manage All HR");
  const { data, isLoading, refetch } = useQuery(["hr"], () =>
    fetch(`${BASE_API}/users/all`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const allHr = data?.result;

  if (isLoading || !allHr || !allHr.length) {
    return <Loading />;
  }
  
  return (
    <div className="lg:px-10 py-10 bg-base-100 rounded-md">
      <div className="overflow-x-auto shadow-lg border-l-4 border-primary rounded-2xl">
        <table className="table w-full">
          <thead className="bg-base-300">
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Uid</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allHr?.map((hrData, index) => (
              <HrRow
                index={index}
                key={hrData._id}
                hrData={hrData}
                refetch={refetch}
              ></HrRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHr;
