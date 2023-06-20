import { RepoTypes } from '../types/RepoType';

export const filterData = (data: RepoTypes)=> {
    return {
        link: data.html_url,
        name: data.name,
        type: data.language
    }
}