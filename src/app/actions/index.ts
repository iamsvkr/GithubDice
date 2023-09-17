import { ICard } from "../../components/Card";
import token from "../../token";
import { receiveData } from "../slices/githubData";
import {setLoading} from "../slices/loading";
import { AppDispatch } from "../store";

export const fetchData = (searchText: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`https://api.github.com/search/repositories?q=${searchText}`,{
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    const data: Array<ICard> = result.items.map((item: any) => {
      return {
        imgUrl: item.owner.avatar_url,
        repoName: item.name,
        starCount: item.watchers_count,
        description: item.description,
        language: item.language,
        created_at: (new Date(item.created_at)).getTime(),
        updated_at: (new Date(item.updated_at)).getTime(),
      }
    })
    dispatch(receiveData(data)) 
    dispatch(setLoading(false));
  } catch (error) {
    console.log('Error fetching the data : ', error);
    setLoading(false);
  }
};
