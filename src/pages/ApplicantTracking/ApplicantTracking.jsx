import React from 'react';
import CandidateEngaged from './CandidateEngaged';
import JobOnBoardTrial from './JobOnBoardTrial';
import ManageOpeningJobs from './ManageOpeningJobs';
import ResumeScreening from './ResumeScreening';
import SmartCandidate from './SmartCandidate';
import MakeOffers from './MakeOffers';
import './ApplicantsTracking.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const ApplicantTracking = () => {
  const navigate = useNavigate()
  return (
    <>
    <section className='applicants_tracking bg-base-100'>
      <div className="tracking text-center my-20 mx-5 md:mx-52">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold my-3">Modern Applicants Tracking Software</h1>
        <h3 className="text-sm md:text-xl my-3">Start with a 21-days free trial of Job OnBoard applicant tracking software, pick any plan. Decide later if you want to upgrade or continue with the free version.</h3>
        <button className='my-4 px-3 py-2 bg-indigo-600 text-white font-bold rounded' onClick={() => navigate(`/signUp/hr`)}>GET YOUR FREE ATS ACCOUNT</button>
      </div>
    </section>
    <div className="space-y-5">
    <ManageOpeningJobs />
    <SmartCandidate />
    <ResumeScreening />
    <JobOnBoardTrial />
    <CandidateEngaged />
    <MakeOffers />
    </div>
    <Footer />
    </>
  );
};

export default ApplicantTracking;