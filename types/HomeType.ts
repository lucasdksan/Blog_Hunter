import { FiltedRepoTypes } from './RepoType';

export type HomeTypes = {
    link: string;
    company: string;
    reposUrl: string;
    githubLink: string;
    location: string;
    reposQt: number;
    repos: FiltedRepoTypes[];
};