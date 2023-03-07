import { useEffect, useContext } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getPosts, updatePosts } from "../../lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AdminContext } from "../../store/admin-context";

const AdminMenagePosts = (props) => {
  const {
    sendRequest: sendRequestForFetch,
    data: loadedPosts,
    status,
  } = useHttp(getPosts);
  const { sendRequest: sendRequestForUpdate } = useHttp(updatePosts);

  const adminCtx = useContext(AdminContext);

  useEffect(() => {
    sendRequestForFetch();
  }, [sendRequestForFetch, adminCtx.onAddPost, sendRequestForUpdate]);

  const deletePostHandler = (id) => {
    sendRequestForUpdate({
      active: false,
      id: id,
    });
    props.noti();
    props.text();
  };

  return (
    <ul className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] pb-[20px] px-[20px] customMargin flex flex-col customBoxShadow rounded">
      {status == (null || "pending") && <LoadingSpinner />}
      {status == "completed" &&
        loadedPosts.map((post) => {
          return post.active ? (
            <li
              key={Math.floor(Math.random() * 10000)}
              className="w-[100%] h-[60px] mt-[20px] px-[10px] md:px-[20px] flex justify-between items-center customBoxShadow rounded"
            >
              <p className="text-[16px]  md:ml-[20px] ">
                Tytuł: <span className="font-medium">{post.title}</span>
              </p>
              <div className="h-[100%] w-[10%]  flex items-center">
                <DeleteForeverIcon
                  style={{
                    fontSize: "30px",
                    color: "#F58445",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    deletePostHandler(post.id);
                  }}
                />
              </div>
            </li>
          ) : (
            <div key={Math.floor(Math.random() * 10000)}></div>
          );
        })}
    </ul>
  );
};

export default AdminMenagePosts;
