import { findJobById, findJobs } from '../services/jobs.js';

export const getJobsController = async (req, res) => {
  const { title } = req.query;
  const query = title ? { title: new RegExp(title, 'i') } : {};
  const jobs = await findJobs(query);
  res.json(jobs);
};
export const getJobByIdController = async (req, res) => {
  const job = await findJobById(req.params.id);
  res.json(job);
};
