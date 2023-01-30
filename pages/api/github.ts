import { useFilterData } from "../../libs/useFilterData";
import { FiltedRepoTypes, RepoTypes } from "../../types/RepoType";

const urlRequest = "https://api.github.com/users/lucasdksan/repos";

export const gitHubAPI = async (key: string)=>{
  const result = await fetch(urlRequest);
  const arrResultRepos:RepoTypes[] = await result.json();
  const arrFiltedRepos:FiltedRepoTypes[] = [];

  for(let i in arrResultRepos){
    if(arrResultRepos[i].language === key){
      arrFiltedRepos.push(useFilterData(arrResultRepos[i]));
    }
  }
  
  return arrFiltedRepos;
}