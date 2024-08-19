import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Job {
  id: string;
  title: string;
  description: string;
}

const jobsDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/jobs/${id}`).then((response) => {
        setJob(response.data);
      });
    }
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
};

export default jobsDetailsPage;
