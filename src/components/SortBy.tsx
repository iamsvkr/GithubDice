export enum SortType {
  STARS = 'starCount',
  WATCHERS_COUNT = 'starCount',
  SCORE = 'Score',
  NAME = 'repoName',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
};

interface ISortByProps {
  onClickHandler: (sortType: SortType) => void;
}

const SortBy = (props: ISortByProps) => {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-wrap">
        <p className="py-2 mr-4 my-4 text-white">SortBy</p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.STARS)}>Stars</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.WATCHERS_COUNT)}>Watchers count</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.SCORE)}>Score</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.NAME)}>Name</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.CREATED_AT)}>Created at</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full mx-4 my-4" onClick={() => props.onClickHandler(SortType.UPDATED_AT)}>Updated at</button>
      </div>
    </div>
  );
};

export default SortBy;
