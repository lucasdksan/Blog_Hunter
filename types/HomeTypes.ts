import { FiltedRepoTypes } from './RepoTypes';
export type HomeTypes = {
    link: string;
    company: string;
    reposUrl: string;
    githubLink: string;
    location: string;
    reposQt: number;
    repos: FiltedRepoTypes[];
};