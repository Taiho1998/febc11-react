import CommentListItem from "@pages/boards/CommentListItem";
import CommentListNew from "@pages/boards/CommentNew";

export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      <CommentListItem />
      <CommentListNew />
    </section>
  );
}
