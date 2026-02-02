"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface ResumeTitleProps {
  initialTitle?: string;
  onSave?: (newTitle: string) => void;
  isSaving?: boolean;
}

export default function ResumeTitle({
  initialTitle = "Untitled",
  onSave,
  isSaving = false,
}: ResumeTitleProps) {
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus and select text when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = title.trim() || "Untitled";
    setTitle(trimmed);
    onSave?.(trimmed);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setIsEditing(false);
  };

  // Display mode (non-editing)
  if (!isEditing) {
    return (
      <div
        className="h-9 w-50 sm:ml-20 lg:ml-40 flex justify-center items-center font-medium cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
        onClick={() => setIsEditing(true)}
      >
        <span className="truncate max-w-[300px]">{title}</span>
      </div>
    );
  }

  // Editing mode (minimal: just the input, no save button or icons)
  return (
    <Input
      ref={inputRef}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSave();
        } else if (e.key === "Escape") {
          handleCancel();
        }
      }}
      onBlur={handleSave} // Save automatically on blur
      disabled={isSaving} // Optional: disable while saving
      className="h-9 w-50 ml-40 text-base font-medium"
      placeholder="Enter resume title..."
    />
  );
}