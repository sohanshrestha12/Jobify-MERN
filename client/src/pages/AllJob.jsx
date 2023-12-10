import React, { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { SearchContainer, JobsContainer } from "../components";

export const loader = async ({request}) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ]);
  console.log(params);
  try {
    const { data } = await customFetch.get("/jobs",{
      params
    });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
  return null;
};
const AllJobsContext = createContext();

const AllJob = () => {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{data}}>
      <SearchContainer></SearchContainer>
      <JobsContainer></JobsContainer>
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJob;
