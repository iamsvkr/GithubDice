export interface ICard {
  imgUrl: string;
  repoName: string;
  starCount: number;
  description: string;
  language: string;
};

export default function Card(props: ICard) {
  return (
    <div className="my-4 grid place-items-center">
      <div className="p-4 w-full max-w-screen-xl rounded overflow-hidden shadow-lg dark:bg-slate-600 bg-slate-100">
        <img className="w-24 h-24 rounded-full mx-auto" src={props.imgUrl} alt="" width="384" height="512" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-sky-500">{props.repoName}</div>
            <div className="flex justify-between text-gray-600">
                <div className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a.75.75 0 01.666.391l1.882 3.772 4.21.612a.75.75 0 01.416 1.28l-3.046 2.97.719 4.195a.75.75 0 01-1.088.791L10 13.347l-3.773 1.988a.75.75 0 01-1.088-.79l.72-4.195L2.805 7.753a.75.75 0 01.415-1.28l4.21-.611L9.334 2.39A.75.75 0 0110 2zm0 2.445L8.615 6.94a.75.75 0 01-.564.41l-3.692.537 2.672 2.607a.75.75 0 01.216.664l-.631 3.678 3.306-1.74a.75.75 0 01.698 0l3.306 1.74-.63-3.677a.75.75 0 01.216-.664l2.672-2.608-3.691-.536a.75.75 0 01-.564-.41L10 4.445V4z"></path>
                    </svg>
                    <span className="text-sm text-yellow-500">{props.starCount} Stars</span>
                </div>
                {props.language && <div>
                    <span className="text-sm text-white">Language: {props.language}</span>
                </div>}
            </div>
            <p className="mt-2 text-white">{props.description}</p>
        </div>
    </div>
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-2 dark:bg-slate-600"> */}
      {/*   <img className="w-24 h-24 md:rounded-full rounded-full mx-auto" src={props.imgUrl} alt="" width="384" height="512" /> */}
      {/*   <div className="pt-6 md:p-2 md:w-full text-center space-y-4"> */}
      {/*     <blockquote> */}
      {/*       <p className="text-lg font-medium text-white"> */}
      {/*         {`${props.repoName}`} */}
      {/*       </p> */}
      {/*     </blockquote> */}
      {/*     <figcaption className="font-medium"> */}
      {/*       <div className="text-sky-500 dark:text-sky-400"> */}
      {/*         {props.description} */}
      {/*       </div> */}
      {/*       <div className="text-yellow-500 dark:text-yellow-400"> */}
      {/*         Stars: {props.starCount} */}
      {/*       </div> */}
      {/*       <div className="text-slate-700 dark:text-slate-500"> */}
      {/*         Language: {props.language} */}
      {/*       </div> */}
      {/*     </figcaption> */}
      {/*   </div> */}
      {/* </figure> */}
    </div>
  )
}
