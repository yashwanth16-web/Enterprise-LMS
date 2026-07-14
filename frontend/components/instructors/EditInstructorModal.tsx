"use client";

import { useEffect, useState } from "react";
import useUpdateInstructor from "@/hooks/useUpdateInstructor";

type Props = {
  open: boolean;
  onClose: () => void;
  instructor: any;
};

export default function EditInstructorModal({
  open,
  onClose,
  instructor,
}: Props) {
  const updateInstructor = useUpdateInstructor();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    status: "",
  });

  useEffect(() => {
    if (instructor) {
      setForm({
        name: instructor.name,
        email: instructor.email,
        phone: instructor.phone,
        specialization: instructor.specialization,
        status: instructor.status,
      });
    }
  }, [instructor]);

  if (!open) return null;

  const submit = async () => {
    await updateInstructor.mutateAsync({
      id: instructor.id,
      instructor: form,
    });

    alert("Instructor Updated Successfully ✅");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-[#171717] w-[700px] rounded-xl p-10">

        <h1 className="text-5xl font-bold text-white mb-8">
          Edit Instructor
        </h1>

        <div className="space-y-6">

          <input
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <input
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.specialization}
            onChange={(e) =>
              setForm({
                ...form,
                specialization: e.target.value,
              })
            }
          />

          <select
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="bg-gray-700 px-6 py-3 text-white rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="bg-white text-black px-6 py-3 rounded-lg font-bold"
          >
            Update Instructor
          </button>

        </div>

      </div>

    </div>
  );
}