import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="bg-purple-500 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-white hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
      >
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              {/* Username */}
              <div className="sm:col-span-4">
                <label
                  for="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="username"
                      type="text"
                      name={props.name}
                      placeholder={props.name}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* Role */}
              <div className="sm:col-span-4">
                <label
                  for="position"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Position
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="position"
                      type="text"
                      name={props.position}
                      placeholder={props.position}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white active:bg-red-700"
          >
            Close
          </button>
          <button
            onClick={handleShow}
            className="bg-purple-500 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-white hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
