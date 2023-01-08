import { RepoTypes } from './../types/RepoTypes';

export const useFilterData = (data: RepoTypes)=> {
    return {
        link: data.html_url,
        name: data.name,
        type: data.language
    }
}