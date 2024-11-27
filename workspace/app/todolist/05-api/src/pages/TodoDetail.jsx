import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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

  const [data, setData] = useState();

  // useEffect(() => {
  //   setData(dummyData);
  // }, []);

  // const { data } = useAxios({ url: `/todolist/${_id}` });

  const axios = useAxiosInstance();

  const fetchDetail = async () => {
    const res = await axios.get(`/todolist/${_id}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

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
            <Link to="/list">목록</Link>
          </div>

          <Outlet context={{ item: data?.item, refetch: fetchDetail }} />
        </>
      )}
    </div>
  );
}

export default TodoDetail;
