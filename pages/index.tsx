import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Job {
  id: string;
  title: string;
}
const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();

  const handleSearch = async () => {
    try {
      await axios.get(`/api/jobs?title=${searchQuery}`).then((response) => {
        setJobs(response.data);
      });
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobClick = (id: string) => {
    router.push(`/jobs/${id}`);
  };

  return (
    <div>
      <h1>Search job</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter job"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {jobs.map((job) => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <button onClick={() => handleJobClick(job.id)}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
