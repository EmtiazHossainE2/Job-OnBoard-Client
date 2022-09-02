import { configureStore } from "@reduxjs/toolkit";
import AllEmployeDetailsReducer from "../Features/AllEmployeDetails/AllEmployeDetailsSlice";
import AllTasksReducer from "../Features/AllTasks/AllTasksSlice";
import AppliedJobsReducer from "../Features/AppliedJobs/AppliedJobsSlice";
import BlogReducer from "../Features/Blogs/BlogSlice";
import HrChartReducer from "../Features/HrChart/HrChartSlice";
import HrJobsReducer from "../Features/HrJobs/HrJobsSlice";

const store = configureStore({
  reducer: {
    blogs: BlogReducer,
    charts: HrChartReducer,
    allTasks: AllTasksReducer,
    appliedJobs: AppliedJobsReducer,
    allEmployeDetails: AllEmployeDetailsReducer,
    hrJobs: HrJobsReducer,
  },
});

export default store;
