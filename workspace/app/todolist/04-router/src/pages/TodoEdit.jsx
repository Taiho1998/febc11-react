import { Link, useNavigate, useOutletContext } from "react-router-dom";

function TodoEdit() {
  // const props = useOutletContext();
  const { item } = useOutletContext(); //위와 아래 둘 중 아무거나 괜찮음

  const navigate = useNavigate();

  const onSubmit = (event) => {
    try {
      event.preventDefault();
      alert("할일이 수정 되었습니다.");

      //할일 상세보기 (한 폴더 위로 이동하라)
      // navigate("..", { relative: true }); // 상대 경로로 이동
      // navigate(`/list/${item._id}`, { replace: true }); // window.history.replaceState()
      navigate(-1); //window.history.back(-1)
    } catch (err) {
      console.error(err);
      alert("할일 수정에 실패했습니다.");
    }
  };

  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={item.title} autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            defaultValue={item.content}
          />

          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={item.done} />
          <br />
          <button type="submit">수정</button>
          <Link to="/list/1">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;
