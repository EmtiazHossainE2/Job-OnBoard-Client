import React from 'react';
import EmptyJob from '../../components/EmptyJob/EmptyJob';
import Loading from '../../components/Loading/Loading';
import Job from './Job';
import Pagination from './Pagination/Pagination';

const Jobs = ({ getJobs, lastPage, page, pageHandle, isLoading }) => {

  if(isLoading){
    return <Loading/>
  }
  
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl md:text2xl text-center font-mono font-bold'>Most Popular Job</h2>

        <div>
          <Pagination lastPage={lastPage} page={eval(page)} pageHandle={pageHandle} />
        </div>
      </div>

      {/* Display Products  */}
      {
        getJobs?.length ?
          <>
            <div>
              {getJobs?.map((job) => <Job
                key={job?.id}
                job={job}
              ></Job>)}
            </div>
          </>
          :
          <div >
            <EmptyJob />
          </div>
      }
    </div>
  );
};

export default Jobs;