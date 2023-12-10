import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Form, Link, useSubmit } from 'react-router-dom'
import {FormRow,FormRowSelect, SubmitBtn }from './'
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants'
import { useAllJobsContext } from '../pages/AllJob'

const SearchContainer = () => {
  const {searchValues} = useAllJobsContext();
  const {search,jobStatus,jobType, sort} = searchValues;
  const submit = useSubmit()
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job status"
            list={["all", ...Object.values(JOB_STATUS)]}
            name="jobStatus"
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job type"
            list={["all", ...Object.values(JOB_TYPE)]}
            name="jobType"
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset search values
          </Link>
          {/* <SubmitBtn formBtn /> */}
        </div>
      </Form>
    </Wrapper>
  );
}

export default SearchContainer