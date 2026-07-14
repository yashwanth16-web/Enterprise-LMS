"use client";

import { useState } from "react";
import useCreateInstructor from "@/hooks/useCreateInstructor";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddInstructorModal({
  open,
  onClose,
}: Props) {
  const createInstructor = useCreateInstructor();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    status: "Active",
  });

  if (!open) return null;

  const submit = async () => {
    await createInstructor.mutateAsync(form);

    alert("Instructor Added Successfully ✅");

    onClose();

    setForm({
      name: "",
      email: "",
      phone: "",
      specialization: "",
      status: "Active",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-[#171717] w-[700px] rounded-xl p-10">

        <h1 className="text-5xl font-bold text-white mb-8">
          Add New Instructor
        </h1>

        <div className="space-y-6">

          <input
            placeholder="Instructor Name"
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Phone"
            className="w-full bg-black border border-gray-700 p-4 text-white"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            placeholder="Specialization"
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
            Save Instructor
          </button>

        </div>

      </div>

    </div>
  );
}