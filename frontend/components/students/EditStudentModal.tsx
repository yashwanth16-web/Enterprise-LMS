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
      setForm(student);
    }
  }, [student]);

  if (!open || !student) return null;

  const handleSave = () => {
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
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#171717] rounded-xl w-[650px] p-8">

        <h2 className="text-4xl font-bold text-white mb-8">
          Edit Student
        </h2>

        <div className="space-y-5">

          <input
            value={form.name}
            onChange={(e)=>
              setForm({...form,name:e.target.value})
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            value={form.email}
            onChange={(e)=>
              setForm({...form,email:e.target.value})
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            value={form.phone}
            onChange={(e)=>
              setForm({...form,phone:e.target.value})
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <input
            value={form.course}
            onChange={(e)=>
              setForm({...form,course:e.target.value})
            }
            className="w-full bg-[#111] border border-[#333] p-4 rounded-lg text-white"
          />

          <select
            value={form.status}
            onChange={(e)=>
              setForm({...form,status:e.target.value})
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
            className="bg-[#222] px-6 py-3 rounded-lg text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
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