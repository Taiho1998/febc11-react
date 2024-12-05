import useAxiosInstance from "@hooks/useAxiosInstance";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../Pagination.css";
import Pagination from "@components/Pagination";
import { useMutation, useQuery } from "@tanstack/react-query";

function TodoList() {
  const searchRef = useRef("");

  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    keyword: searchParams.get("keyword") || "",
    page: searchParams.get("page") || 1,
    limit: 5,
  };
  // useEffect(() => {
  //   setData(dummyData);
  // }, []); // 마운트된 후에 한번만 호출

  // API 서버에서 목록 조회
  // const { data } = useFetch({ url: "/todolist" });

  // axios 인스턴스
  const axios = useAxiosInstance();

  // const [data, setData] = useState();
  // const fetchList = async () => {
  //   const res = await axios.get("/todolist", { params });
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   fetchList();
  // }, [searchParams]);

  const { data, refetch } = useQuery({
    queryKey: ["todolist", params],
    queryFn: () => axios.get("/todolist", { params }),
    select: (res) => res.data,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });

  // 삭제 작업
  // const handleDelete = async (_id) => {
  //   try {
  //     // TODO: API 서버에 삭제 요청
  //     await axios.delete(`/todolist/${_id}`);
  //     alert("할일이 삭제 되었습니다.");

  //     // TODO: 목록을 다시 조회
  //     refetch();
  //   } catch (err) {
  //     console.error(err);
  //     alert("할일 삭제에 실패했습니다.");
  //   }
  // };

  const deleteItem = useMutation({
    mutationFn: (_id) => {
      axios.delete(`/todolist/${_id}`);
    },
    onSuccess: () => {
      alert("할 일이 삭제되었습니다.");
      refetch();
    },
    onError: (err) => {
      console.error(err);
      alert("할일 삭제에 실패했습니다");
    },
  });

  const itemList = data?.items.map((item) => (
    <TodoListItem
      key={item._id}
      item={item}
      handleDelete={() => deleteItem.mutate(item._id)}
    />
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(new URLSearchParams(`keyword=${searchRef.current.value}`));
  };

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            autoFocus
            defaultValue={params.keyword}
            ref={searchRef}
          />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
      {data && (
        <Pagination
          totalPages={data.pagination.totalPages}
          current={data.pagination.page}
        />
      )}
    </div>
  );
}

export default TodoList;
