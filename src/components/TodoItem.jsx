import UpdateModal from "./UpdateModal";

function TodoItem({
  sentTodo,
  sentTime,
  sentFun,
  indexValue,
  handleupdate,

  handleonchange,
}) {
  return (
    <div className="card w-50 m-auto mt-4">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="card-title">{sentTodo}</h5>
        <h5 className="card-title">{sentTime}</h5>
        <div className="d-flex gap-1">
          <UpdateModal
            currTodo={sentTodo}
            currTime={sentTime}
            updateFun={handleupdate}
            // handleatChange={handleonchange}
            inde={indexValue}
          ></UpdateModal>
          <button
            className="btn btn-danger"
            onClick={() => sentFun(indexValue)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
