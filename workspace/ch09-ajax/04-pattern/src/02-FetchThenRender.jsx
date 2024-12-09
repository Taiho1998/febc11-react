import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function fetchData() {
  return Promise.all([fetchPost(), fetchReplies()]).then(([post, replies]) => ({
    post: post.data,
    replies: replies.data,
  }));
}

const promise = fetchData();

function fetchPost() {
  return axios.get("https://11.fesp.shop/posts/1?delay=3000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

function FetchThenRender() {
  const [post, setPost] = useState();
  const [replies, setReplies] = useState();

  useEffect(() => {
    promise.then((res) => {
      setPost(res.post);
      setReplies(res.replies);
    });
  }, []);

  if (!post) {
    return <div>게시물 목록 로딩중...</div>;
  }

  return (
    <>
      <h4>{post.item.title}</h4>
      <Replies replies={replies} />
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

Replies.propType = {
  replies: PropTypes.object.isRequired,
};

function Replies({ replies }) {
  if (!replies) {
    return <div>댓글 로딩중...</div>;
  }

  const list = replies.item.map((item) => (
    <li key={item._id}>{item.content}</li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default FetchThenRender;
