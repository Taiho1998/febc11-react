import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

function fetchPost() {
  return axios.get("https://11.fesp.shop/posts/1?delay=3000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

function FetchAsYouRender() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts", 1],
    queryFn: () => fetchPost(),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  return (
    <>
      <h4>{data.item.title}</h4>
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

export function Replies() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts", 1, "replies"],
    queryFn: () => fetchReplies(),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  const list = data.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default FetchAsYouRender;
