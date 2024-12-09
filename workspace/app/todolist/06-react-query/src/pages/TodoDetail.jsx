import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

// const dummyData = {
//   item: {
//     _id: 3,
//     title: "Promise 복습",
//     content: "열심히 하자",
//     done: false,
//     createdAt: "2024.11.19 17:49:00",
//     updatedAt: "2024.11.19 21:49:00",
//   },
// };

function TodoDetail() {
  const { _id } = useParams();
  console.log(_id);

  const axios = useAxiosInstance();
  const navigate = useNavigate();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["todolist", _id],
    queryFn: () => axios.get(`/todolist/${_id}`),
    select: (res) => res.data,
    staleTime: 1000 * 60,
  });

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      {data && (
        <>
          <div className="todo">
            <div>제목 : {data.item.title}</div>
            <div>내용 : {data.item.content}</div>
            <div>상태 : {data.item.done ? "완료" : "미완료"}</div>
            <div>작성일 : {data.item.createdAt}</div>
            <div>수정일 : {data.item.updatedAt}</div>
            <Link to="./edit">수정</Link>
            <button type="button" onClick={() => navigate(-1)}>
              목록
            </button>
          </div>

          <Outlet context={{ item: data.item }} />
        </>
      )}
    </div>
  );
}

export default TodoDetail;
