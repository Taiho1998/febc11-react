import axios from "axios";
import { useEffect, useState } from "react";

function fetchPost() {
  return axios.get("https://11.fesp.shop/posts/1?delay=3000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

function FetchOnRender() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchPost().then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return <div>게시물 목록 로딩중...</div>;
  }

  return (
    <>
      <h4>{data.item.title}</h4>
      <Replies />
    </>
  );
}

function fetchReplies() {
  return axios.get("https://11.fesp.shop/posts/1/replies?delay=2000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

function Replies() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchReplies().then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return <div>댓글 로딩중...</div>;
  }

  const list = data.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default FetchOnRender;
