import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
export const action = async({params})=>{
    try {
        await customFetch.delete(`/jobs/${params.id}`)
        toast.success('Job deleted successfully');
    } catch (error) {
        toast.error(error?.response?.data);
    }
    return redirect('/dashboard/all-jobs');
}
