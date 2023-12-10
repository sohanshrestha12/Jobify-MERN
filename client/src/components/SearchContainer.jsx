import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Form, Link } from 'react-router-dom'
import {FormRow,FormRowSelect, SubmitBtn }from './'
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants'

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow type="search" name='search' defaultValue='a'/>
          <FormRowSelect labelText='job status' list={['all',...Object.values(JOB_STATUS)]} name='jobStatus' defaultValue='all'/>
          <FormRowSelect labelText='job type' list={['all',...Object.values(JOB_TYPE)]} name='jobType' defaultValue='all'/>
          <FormRowSelect name='sort' defaultValue='newest' list={[...Object.values(JOB_SORT_BY)]} />
          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>Reset search values</Link>
          <SubmitBtn formBtn/> 
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchContainer