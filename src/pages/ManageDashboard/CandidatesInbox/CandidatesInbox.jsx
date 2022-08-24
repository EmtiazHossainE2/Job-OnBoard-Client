import React from "react";
import { IoIosSend } from "react-icons/io";
import { RiMessage3Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import "./CandidateInboxCss/CandidateInbox.css";
const CandidatesInbox = () => {
  return (
    <section className="bg-[#f7f7f787] h-[80vh] rounded-[10px] mt-4">
      <div className="text-center candidateInbox py-8 flex justify-center">
        <NavLink
          to="/dashboard/CandidateMail/Send"
          className="NavButton bg-[#FCFCFD] p-[10px] mr-2 text-[18px] rounded-[6px] text-[#36395a] flex items-center font-bold "
        >
          <IoIosSend className="text-green-500 mr-2 text-xl" /> Send
        </NavLink>
        <NavLink
          to="/dashboard/CandidateMail/Incoming"
          className="NavButton bg-[#FCFCFD] p-[10px] ml-2 text-[18px] rounded-[6px] text-[#36395a] flex items-center font-bold"
        >
          <RiMessage3Fill className="text-rose-600 mr-2 text-xl " /> Inbox
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default CandidatesInbox;
