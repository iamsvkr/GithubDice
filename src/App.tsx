import { useEffect, useState } from "react";
import { fetchData } from "./app/actions";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Cards from "./components/Cards";
import Loader from "./components/Loader";
import SearchField from "./components/SearchField";
import SortBy, {SortType} from "./components/SortBy";

function dynamicSort(property: string) {
    var sortOrder = -1;
    if(property[0] === "-") {
        sortOrder = 1;
        property = property.substr(1);
    }
    return function (a: any, b: any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export default function App() {
  const {
    githubData: { data },
    loading: { isLoading }
  } = useAppSelector(s => s);
  const dispatch = useAppDispatch();

  const [filteredItems, setFilteredItems] = useState([]);

  const onSearchSubmitHandler = (searchText: string) => {
    dispatch(fetchData(searchText));
  }

  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  const onSortTypeClickHandler = (sortType: SortType) => {
    const items = structuredClone(filteredItems);
    items.sort(dynamicSort(sortType));
    setFilteredItems(items);
  }

  return (
    <div className="bg-white dark:bg-slate-800 font-sans min-h-screen w-screen p-8">
      <SearchField
        onSubmit={onSearchSubmitHandler}
      />
      {filteredItems.length ? <SortBy onClickHandler={onSortTypeClickHandler} /> : null}
      {isLoading
        ? <div className="grid place-items-center bg-white dark:bg-slate-800 font-sans min-h-screen w-screen p-8">
            <Loader />
          </div>
        : <Cards data={filteredItems} />}
    </div>
  )
}

