import { useState } from "react";
import InputComp from "./InputComp";
function UpdateModal({ currTime, currTodo, updateFun, inde }) {
  const [update, setUpdate] = useState({ todo: "", time: "" });

  const handleatChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleClick = () => {
    updateFun(inde, update.todo, update.time);
    setUpdate({ todo: "", time: "" });
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Update
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Update Todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body ">
              <p className="mb-1 text-danger">Previous Values</p>
              <div className="card w-100 mb-3 m-auto ">
                <div className="card-body py-1 d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{currTodo}</h5>
                  <h5 className="card-title">{currTime}</h5>
                </div>
              </div>
              <p className="mb-1 text-danger">Update Todo</p>
              <div className="d-flex m-auto">
                <InputComp
                  type={"text"}
                  name={"todo"}
                  klass="w-100 m-auto"
                  onFunction={handleatChange}
                  value={update.todo}
                  placeholder="Update Todo"
                ></InputComp>
                <InputComp
                  type={"time"}
                  name={"time"}
                  onFunction={handleatChange}
                  klass="w-100  ms-2 m-auto"
                  value={update.time}
                ></InputComp>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
