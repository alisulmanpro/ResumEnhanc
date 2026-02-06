'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

interface EditableGhostTextProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    className?: string;
    textClassName?: string; // e.g., text-4xl font-bold
}

const EditableGhostText: React.FC<EditableGhostTextProps> = ({
    value,
    onChange,
    placeholder = 'Click to edit',
    className = '',
    textClassName = '',
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(value);

    const inputRef = useRef<HTMLInputElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const [inputWidth, setInputWidth] = useState<number | undefined>(undefined);

    // Measure exact width (including padding) for zero layout shift
    useLayoutEffect(() => {
        if (measureRef.current) {
            setInputWidth(measureRef.current.offsetWidth);
        }
    }, [value, editValue]);

    // Focus + select all when entering edit mode
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const startEditing = () => {
        setEditValue(value);
        setIsEditing(true);
    };

    const save = () => {
        onChange(editValue.trim());
        setIsEditing(false);
    };

    const cancel = () => {
        setEditValue(value);
        setIsEditing(false);
    };

    const displayText = value || placeholder;
    const isPlaceholder = !value;

    return (
        <div className={`relative inline-block ${className}`}>
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={save}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            save();
                        }
                        if (e.key === 'Escape') cancel();
                    }}
                    style={{ width: inputWidth ? `${inputWidth}px` : undefined }}
                    className="px-1 bg-transparent focus:outline-none focus:bg-base-200/50 text-center focus:border-primary transition-all"
                    placeholder={placeholder}
                />
            ) : (
                <div
                    onClick={startEditing}
                    className="px-1 cursor-text hover:underline inline-block text-center"
                    style={{ width: inputWidth ? `${inputWidth}px` : undefined }}
                >
                    <span
                        className={`${textClassName} ${isPlaceholder ? 'text-base-content/40 italic' : ''}`}
                    >
                        {displayText}
                    </span>
                </div>
            )}

            {/* Hidden measurer – matches exact padding + text styles */}
            <span
                ref={measureRef}
                className={`invisible absolute left-0 top-0 whitespace-nowrap pointer-events-none px-1 text-center ${textClassName}`}
            >
                {isEditing ? editValue : displayText}
            </span>
        </div>
    );
};

export default EditableGhostText;