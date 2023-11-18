import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <>
      <h2>Course List</h2>
      <Link href="/admin/courses/new">
        <button className="btn">Add a new course</button>
      </Link>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Id
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Course
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Total Units
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Description
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Course Id
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Course Name
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Total Units
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Description
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
            <Link href='/Courses'>
                    <button className="btn bg-green-400"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    className="btn  bg-red-500"
                    /* onClick={() => handleDelete(course.id)} */
                  >
                    Delete
                  </button>
                
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Courses;
