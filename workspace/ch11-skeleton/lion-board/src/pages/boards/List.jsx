import ListItem from "@pages/boards/ListItem";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { Helmet } from "react-helmet-async";
import Spinner from "@components/Spinner";
import { Suspense } from "react";

export default function List() {
  const axios = useAxiosInstance();

  const { type } = useParams();

  const { user } = useUserStore();

  const { data } = useQuery({
    queryKey: ["posts", type],
    queryFn: () => axios.get("/posts", { params: { type } }),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  console.log(type);

  if (!data) {
    return <Spinner.WithHeader />;
  }

  const list = data.item.map((item) => <ListItem key={item._id} item={item} />);

  return (
    <>
      {type === "info" && (
        <Helmet>
          <title>정보 공유 - 멋사컴</title>
          <meta property="og:title" content="정보 공유 게시판" />
          <meta
            property="og:description"
            content="유용한 정보를 나누고 공유하세요."
          />
        </Helmet>
      )}
      {type === "free" && (
        <Helmet>
          <title>자유 게시판 - 멋사컴</title>
          <meta property="og:title" content="자유 게시판" />
          <meta
            property="og:description"
            content="자유롭게 이야기를 나눌 수 있는 공간입니다."
          />
        </Helmet>
      )}
      {type === "brunch" && (
        <Helmet>
          <title>브런치스토리 - 멋사컴</title>
          <meta property="og:title" content="브런치스토리 게시판" />
          <meta
            property="og:description"
            content="커피 한 잔과 나누는 브런치 스토리 게시판입니다."
          />
        </Helmet>
      )}

      <main className="min-w-80 p-10">
        <div className="text-center py-4">
          <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
            정보 공유
          </h2>
        </div>
        <div className="flex justify-end mr-4">
          <form action="#">
            <input
              className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
              type="text"
              name="keyword"
            />
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              검색
            </button>
          </form>
          {user && (
            <Link
              to="new"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              글작성
            </Link>
          )}
        </div>
        <section className="pt-10">
          <table className="border-collapse w-full table-fixed">
            <colgroup>
              <col className="w-[10%] sm:w-[10%]" />
              <col className="w-[60%] sm:w-[30%]" />
              <col className="w-[30%] sm:w-[15%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-solid border-gray-600">
                <th className="p-2 whitespace-nowrap font-semibold">번호</th>
                <th className="p-2 whitespace-nowrap font-semibold">제목</th>
                <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  조회수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  댓글수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
          <hr />

          <div>
            <ul className="flex justify-center gap-3 m-4">
              <li className="font-bold text-blue-700">
                <Link to="/info?page=1">1</Link>
              </li>
              <li>
                <Link to="/info?page=2">2</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
