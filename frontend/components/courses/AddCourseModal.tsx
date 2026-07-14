"use client";

import { useState } from "react";
import useCreateCourse from "@/hooks/useCreateCourse";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddCourseModal({
  open,
  onClose,
}: Props) {
  const { mutate, isPending } = useCreateCourse();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  if (!open) return null;

  const handleSave = () => {
    if (
      !title ||
      !description ||
      !category ||
      !price ||
      !thumbnail
    ) {
      alert("Please fill all fields.");
      return;
    }

    mutate(
      {
        title,
        description,
        category,
        price: Number(price),
        thumbnail,
      },
      {
        onSuccess: () => {
          alert("Course Added Successfully ✅");

          setTitle("");
          setDescription("");
          setCategory("");
          setPrice("");
          setThumbnail("");

          onClose();
        },

        onError: () => {
          alert("Failed to create course.");
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="w-[650px] rounded-xl bg-[#171717] border border-[#2A2A2A] p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold text-white">
            Add New Course
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 text-2xl hover:text-white"
          >
            ×
          </button>

        </div>

        <div className="mt-8 space-y-5">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Course Title"
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white outline-none"
          />

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course Description"
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white outline-none"
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white outline-none"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white outline-none"
          />

          <input
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Thumbnail (example: ai.png)"
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 text-white outline-none"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg bg-[#222222] text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={isPending}
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Course"}
          </button>

        </div>

      </div>

    </div>
  );
}