import useAxiosInstance from "@hooks/useAxiosInstance";
import useFetch from "@hooks/useFetch";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../Pagination.css";

// const dummyData = {
//   items: [{
//     _id: 1,
//     title: '잠자기',
//   }, {
//     _id: 2,
//     title: '자바스크립트 복습',
//     done: true,
//   }]
// };

function TodoList() {
  const [data, setData] = useState();
  const searchRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    keyword: searchParams.get("keyword"),
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

  const fetchList = async () => {
    const res = await axios.get("/todolist", { params });
    setData(res.data);
  };

  useEffect(() => {
    fetchList();
  }, [searchParams]);

  // 삭제 작업
  const handleDelete = async (_id) => {
    try {
      // TODO: API 서버에 삭제 요청
      await axios.delete(`/todolist/${_id}`);
      alert("할일이 삭제 되었습니다.");

      // TODO: 목록을 다시 조회
      const res = await axios.get("/todolist");
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert("할일 삭제에 실패했습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(new URLSearchParams(`keyword=${searchRef.current.value}`));
  };
  const current = params.page;
  let pageList = [];

  for (let page = 1; page < data?.pagination.totalPages; page++) {
    searchParams.set("page", page);
    let search = searchParams.toString();

    pageList.push(
      <li>
        <Link
          className={current === page ? "active" : ""}
          to={`/list?${search}`}
        >
          {page}
        </Link>
      </li>
    );
  }

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search" onSubmit={handleSearch}>
          <input type="text" autoFocus defaultValue="hello" ref={searchRef} />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
      <div className="pagination">
        {" "}
        <ul>{pageList}</ul>
      </div>

      <Outlet />
    </div>
  );
}

export default TodoList;
