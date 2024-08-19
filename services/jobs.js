// import Job from '../db/models/Job.js';

export const findJobs = (filter) => Job.find(filter);

export const findJobById = (filter) => Job.findById(filter);
