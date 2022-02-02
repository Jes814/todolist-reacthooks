import React from "react";
import { todoTypes, todoSchedules } from "../Options";

function AddTodo({
  onSubmit,
  name,
  description,
  schedule,
  type,
  date,
  setDate,
  setDescription,
  setName,
  setSchedule,
  setType,
}) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="flex justify-between items-center p-5">
        <div className="w-2/5">
          <label>Todo: </label>
          <input
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="w-2/5">
          <label>Todo Created :</label>
          <input
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => setDate(e.target.value)}
            value={date}
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
            onChange={(e) => setSchedule(e.target.value)}
            value={schedule}
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
            onChange={(e) => setType(e.target.value)}
            value={type}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description here ..."
        ></textarea>
      </div>
      <div className="p-5 flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="border rounded-xl bg-green-700 text-white font-bold border-green-300 py-1 px-8"
        />
      </div>
    </form>
  );
}

export default AddTodo;
