import React from "react";
import { todoTypes, todoSchedules } from "../Options";

function EditModal({
  closeModal,
  editTodo,
  editName,
  setEditName,
  editDate,
  setEditDate,
  editDescription,
  setEditDescription,
  editSchedule,
  setEditSchedule,
  editType,
  setEditType,
}) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="">
              <div className="flex justify-between items-center p-5">
                <div className="w-2/5">
                  <label>Todo: </label>
                  <input
                    className="border-b-2 border-blue-300 w-full outline-none pt-4"
                    placeholder="Todo name ..."
                    onChange={(e) => setEditName(e.target.value)}
                    value={editName}
                    type="text"
                  />
                </div>
                <div className="w-2/5">
                  <label>Todo Created :</label>
                  <input
                    className="border-b-2 border-blue-300 w-full outline-none pt-4"
                    placeholder="Todo name ..."
                    onChange={(e) => setEditDate(e.target.value)}
                    value={editDate}
                    type="date"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="w-2/5">
                  <label>Todo Schedule:</label>
                  <select
                    className="border-b-2 border-blue-300 w-full outline-none pt-4"
                    placeholder="Todo name ..."
                    onChange={(e) => setEditSchedule(e.target.value)}
                    value={editSchedule}
                    type="text"
                  >
                    <option hidden>Choose schedule</option>
                    {todoSchedules &&
                      todoSchedules.map((schedule, index) => (
                        <option value={schedule.value} key={index}>
                          {schedule.label}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="w-2/5">
                  <label>Todo Types :</label>
                  <select
                    className="border-b-2 border-blue-300 w-full outline-none pt-4"
                    placeholder="Todo name ..."
                    onChange={(e) => setEditType(e.target.value)}
                    value={editType}
                    type="text"
                  >
                    <option hidden>Choose type depends on todo</option>
                    {todoTypes &&
                      todoTypes.map((type, index) => (
                        <option value={type.value} key={index}>
                          {type.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="p-5">
                <label>Todo Description :</label>
                <textarea
                  className="border-b-2 border-blue-300 w-full outline-none"
                  onChange={(e) => setEditDescription(e.target.value)}
                  value={editDescription}
                  placeholder="Description here ..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => editTodo()}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              onClick={() => closeModal()}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
