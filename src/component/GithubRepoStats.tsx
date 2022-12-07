import React, { useEffect, useState } from "react";

interface Props {
  repoName: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repoName }) => {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoName}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setStargazersCount(jsonData.stargazers_count);
      });
  }, [repoName]);

  return (
    <div>
      Stargazers of {repoName}: {stargazersCount}
    </div>
  );
};

export default GithubRepoStats;
