"use client";

import { useState } from "react";
import useCreateStudent from "@/hooks/useCreateStudent";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddStudentModal({
  open,
  onClose,
}: Props) {
  const { mutate, isPending } = useCreateStudent();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    status: "Active",
  });

  if (!open) return null;

  const handleSubmit = () => {
    mutate(student, {
      onSuccess: () => {
        alert("Student Added Successfully ✅");

        setStudent({
          name: "",
          email: "",
          phone: "",
          course: "",
          status: "Active",
        });

        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#171717] rounded-xl w-[650px] p-8">

        <h2 className="text-4xl font-bold text-white mb-8">
          Add New Student
        </h2>

        <div className="space-y-5">

          <input
            placeholder="Student Name"
            value={student.name}
            onChange={(e) =>
              setStudent({
                ...student,
                name: e.target.value,
              })
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            placeholder="Email"
            value={student.email}
            onChange={(e) =>
              setStudent({
                ...student,
                email: e.target.value,
              })
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            placeholder="Phone Number"
            value={student.phone}
            onChange={(e) =>
              setStudent({
                ...student,
                phone: e.target.value,
              })
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            placeholder="Course"
            value={student.course}
            onChange={(e) =>
              setStudent({
                ...student,
                course: e.target.value,
              })
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <select
            value={student.status}
            onChange={(e) =>
              setStudent({
                ...student,
                status: e.target.value,
              })
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-[#222] text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            {isPending ? "Saving..." : "Save Student"}
          </button>

        </div>

      </div>
    </div>
  );
}