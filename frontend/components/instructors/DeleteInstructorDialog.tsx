"use client";

import { useRouter } from "next/navigation";
import useDeleteInstructor from "@/hooks/useDeleteInstructor";

type Props = {
  open: boolean;
  onClose: () => void;
  instructorId: number;
};

export default function DeleteInstructorDialog({
  open,
  onClose,
  instructorId,
}: Props) {
  const router = useRouter();

  const deleteInstructor = useDeleteInstructor();

  if (!open) return null;

  const remove = async () => {
    await deleteInstructor.mutateAsync(instructorId);

    alert("Instructor Deleted Successfully ✅");

    router.push("/dashboard/instructors");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-[#171717] w-[500px] rounded-xl p-8">

        <h1 className="text-4xl font-bold text-white mb-6">
          Delete Instructor
        </h1>

        <p className="text-gray-300">
          Are you sure you want to delete this instructor?
        </p>

        <p className="text-red-500 mt-3">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="bg-gray-700 px-6 py-3 rounded-lg text-white"
          >
            Cancel
          </button>

          <button
            onClick={remove}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-bold"
          >
            Delete Instructor
          </button>

        </div>

      </div>

    </div>
  );
}