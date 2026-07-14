"use client";

import { useRouter } from "next/navigation";

import useDeleteEnrollment from "@/hooks/useDeleteEnrollment";

type Props = {
  open: boolean;
  onClose: () => void;
  enrollmentId: number;
};

export default function DeleteEnrollmentDialog({
  open,
  onClose,
  enrollmentId,
}: Props) {
  const router = useRouter();

  const deleteEnrollment = useDeleteEnrollment();

  if (!open) return null;

  const handleDelete = async () => {
    try {
      await deleteEnrollment.mutateAsync(enrollmentId);

      alert("Enrollment Deleted Successfully ✅");

      router.push("/dashboard/enrollments");
    } catch {
      alert("Failed to delete enrollment");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#171717] rounded-xl w-[600px] p-10">

        <h1 className="text-5xl font-bold text-white mb-8">
          Delete Enrollment
        </h1>

        <p className="text-gray-300 text-xl">
          Are you sure you want to delete this enrollment?
        </p>

        <p className="text-red-500 mt-4">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            Delete Enrollment
          </button>

        </div>

      </div>

    </div>
  );
}