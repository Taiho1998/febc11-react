import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function TodoEdit() {
  // const props = useOutletContext();
  const { item } = useOutletContext(); //위와 아래 둘 중 아무거나 괜찮음

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  const axios = useAxiosInstance();

  const queryClient = useQueryClient();

  const editItem = useMutation({
    mutationFn: (formData) => axios.patch(`/todolist/${item._id}`, formData),
    onSuccess: () => {
      alert("할 일 수정이 완료되었습니다");
      queryClient.invalidateQueries({ queryKey: ["todolist"] });
      navigate(-1);
    },
    onError: (err) => {
      console.log("서버에서 에러 응답");
      alert(err?.message || "할 일 수정에 실패했습니다.");
    },
  });

  // const onSubmit = async (formData) => {
  //   try {
  //     // event.preventDefault();
  //     // useAxios({
  //     //   url: "/todolist",
  //     //   method: "PATCH",
  //     //   body: { title: "", content: "" },
  //     // });

  //     await axios.patch(`/todolist/${item._id}`, formData);
  //     alert("할일이 수정 되었습니다.");

  //     //할일 상세보기 (한 폴더 위로 이동하라)
  //     // navigate("..", { relative: true }); // 상대 경로로 이동
  //     // navigate(`/list/${item._id}`, { replace: true }); // window.history.replaceState()
  //     navigate(-1); //window.history.back(-1)
  //     // refetch();
  //   } catch (err) {
  //     console.error(err);
  //     alert("할일 수정에 실패했습니다.");
  //   }
  // };

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(editItem.mutate)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register("title", { required: "제목을 입력하세요" })}
          />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            {...register("content", {
              required: "내용을 입력하세요.",
            })}
          />

          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register("done")} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
