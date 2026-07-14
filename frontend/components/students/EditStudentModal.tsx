"use client";

import { useEffect, useState } from "react";
import useUpdateStudent from "@/hooks/useUpdateStudent";

type Props = {
  open: boolean;
  onClose: () => void;
  student: any;
};

export default function EditStudentModal({
  open,
  onClose,
  student,
}: Props) {
  const { mutate, isPending } = useUpdateStudent();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    status: "Active",
  });

  useEffect(() => {
    if (student) {
      setForm({
        name: student.name || "",
        email: student.email || "",
        phone: student.phone || "",
        course: student.course || "",
        status: student.status || "Active",
      });
    }
  }, [student]);

  if (!open) return null;

  const handleUpdate = () => {
    mutate(
      {
        id: student.id,
        student: form,
      },
      {
        onSuccess: () => {
          alert("Student Updated Successfully ✅");
          onClose();
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#171717] w-[650px] rounded-xl p-8 border border-[#2A2A2A]">

        <h2 className="text-3xl font-bold text-white mb-8">
          Edit Student
        </h2>

        <div className="space-y-5">

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white"
            placeholder="Course"
            value={form.course}
            onChange={(e) =>
              setForm({
                ...form,
                course: e.target.value,
              })
            }
          />

          <select
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            disabled={isPending}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            {isPending ? "Updating..." : "Update Student"}
          </button>

        </div>

      </div>

    </div>
  );
}