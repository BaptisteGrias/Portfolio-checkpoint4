import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    const getReposAnswers = async () => {
      try {
        const reposData = await axios.get('http://localhost:8000/projects');
        setRepos(reposData.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setLoadingRepos(false);
      }
    };
    getReposAnswers();
  }, []);
  return (
    <div>
      <h1>All my projects</h1>
    </div>
  );
};

export default ProjectsRepos;
