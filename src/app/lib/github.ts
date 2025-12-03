// src/app/lib/github.ts
import axios from 'axios';

export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  fork: boolean;               
  forks_count?: number;        // optional, nice to have
  open_issues_count?: number;  // optional
}

export async function getRepos(): Promise<Repo[]> {
  const username = 'Paliga'; 
  const response = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  return response.data
    .filter((repo) => !repo.fork && repo.description) // now works perfectly
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 9);
}