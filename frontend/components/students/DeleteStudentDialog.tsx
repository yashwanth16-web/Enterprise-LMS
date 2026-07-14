"use client";

import { useRouter } from "next/navigation";
import useDeleteStudent from "@/hooks/useDeleteStudent";

type Props = {
  open: boolean;
  onClose: () => void;
  studentId: number;
};

export default function DeleteStudentDialog({
  open,
  onClose,
  studentId,
}: Props) {
  const router = useRouter();

  const { mutate, isPending } = useDeleteStudent();

  if (!open) return null;

  const handleDelete = () => {
    mutate(studentId, {
      onSuccess: () => {
        alert("Student Deleted Successfully ✅");
        onClose();
        router.push("/dashboard/students");
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="w-[500px] bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">

        <h2 className="text-3xl font-bold text-white">
          Delete Student
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Are you sure you want to delete this student?
        </p>

        <p className="text-red-500 mt-2">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={isPending}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            {isPending ? "Deleting..." : "Delete Student"}
          </button>

        </div>

      </div>

    </div>
  );
}