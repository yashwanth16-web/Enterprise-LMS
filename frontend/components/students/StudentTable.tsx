"use client";

import Link from "next/link";
import { useState } from "react";

import useStudents from "@/hooks/useStudents";
import useDeleteStudent from "@/hooks/useDeleteStudent";
import EditStudentModal from "./EditStudentModal";

export default function StudentTable() {
  const { data, isLoading } = useStudents();

  const { mutate: deleteStudent } = useDeleteStudent();

  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    deleteStudent(id, {
      onSuccess: () => {
        alert("Student deleted successfully ✅");
      },
      onError: () => {
        alert("Failed to delete student ❌");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="text-white text-lg">
        Loading students...
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#171717] rounded-xl border border-[#2A2A2A] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#111111]">
            <tr>
              <th className="text-left p-4 text-gray-300">ID</th>
              <th className="text-left p-4 text-gray-300">Name</th>
              <th className="text-left p-4 text-gray-300">Email</th>
              <th className="text-left p-4 text-gray-300">Phone</th>
              <th className="text-left p-4 text-gray-300">Course</th>
              <th className="text-left p-4 text-gray-300">Status</th>
              <th className="text-left p-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.length ? (
              data.map((student: any) => (
                <tr
                  key={student.id}
                  className="border-t border-[#2A2A2A] hover:bg-[#222222]"
                >
                  <td className="p-4 text-white">
                    {student.id}
                  </td>

                  <td className="p-4 text-white">
                    <Link
                      href={`/dashboard/students/${student.id}`}
                      className="hover:underline"
                    >
                      {student.name}
                    </Link>
                  </td>

                  <td className="p-4 text-gray-300">
                    {student.email}
                  </td>

                  <td className="p-4 text-gray-300">
                    {student.phone}
                  </td>

                  <td className="p-4 text-gray-300">
                    {student.course}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-600 px-3 py-1 rounded-full text-white text-sm">
                      {student.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setOpenEdit(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition"
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="p-8 text-center text-gray-400"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <EditStudentModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        student={selectedStudent}
      />
    </>
  );
}