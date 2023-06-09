import { useEffect, useState } from "react";
import style from "./Home.module.scss";
import clsx from "clsx";
import { songs } from "../Songs";

function Home() {
  const count_songs = 20;
  const count_page = Math.ceil(songs.length / count_songs);
  const [page, setPage] = useState(1);
  const [dataSongs, setDataSongs] = useState(() => {
    let newSongs = [];
    for (let i = (page - 1) * count_songs; i <= page * count_songs - 1; i++) {
      if (i < songs.length) {
        newSongs = [...newSongs, songs[i]];
      }
    }
    return newSongs;
  });
  let listPage = [];

  for (let i = 1; i <= count_page; i++) {
    listPage = [...listPage, i];
  }

  const handleSetPage = (item) => {
    setPage(item);
    setDataSongs((prev) => {
      prev = [];
      for (let i = (item - 1) * count_songs; i <= item * count_songs - 1; i++) {
        if (i < songs.length) {
          prev = [...prev, songs[i]];
        }
      }
      return [...prev];
    });
  };
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-center items-center">
        {listPage.map((item, index) => {
          return (
            <button
              key={index}
              className={
                page === index + 1
                  ? clsx(style.buttonScss, style.active)
                  : clsx(style.buttonScss)
              }
              onClick={() => handleSetPage(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên bài hát
            </th>
            <th scope="col" className="px-6 py-3">
              Nhạc
            </th>
            <th scope="col" className="px-6 py-3">
              Nghệ sĩ
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSongs.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name_singer}
                </td>
                <th scope="row" className="px-6 py-4">
                  {item.name_song}
                </th>
                <td className="px-6 py-4">
                  <video controls name="media">
                    <source src={item.source} type="audio/mpeg" />
                  </video>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
