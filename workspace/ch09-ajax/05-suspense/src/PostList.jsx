import { useSuspenseQuery } from "@tanstack/react-query";
import FetchAsYouRender from "./03-FetchAsYouRender";
import axios from "axios";

function fetchPostList() {
  return axios.get("https://11.fesp.shop/posts?type=brunch&delay=4000", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

function PostList() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPostList(),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  return (
    <>
      <h2>게시물 {data.item.length}건이 있습니다</h2>
      <h3>Fetch-as-you-render 방식</h3>
    </>
  );
}

export default PostList;
