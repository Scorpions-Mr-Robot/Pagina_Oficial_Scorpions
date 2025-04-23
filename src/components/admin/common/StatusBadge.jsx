
import React from "react";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/lib/utils/adminHelpers";

/**
 * StatusBadge Component
 * 
 * Renders a styled badge for status or priority indicators
 * 
 * @param {Object} props - Component props
 * @param {string} props.status - Status or priority value
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Rendered component
 */
export function StatusBadge({ status, className }) {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        getStatusColor(status),
        className
      )}
    >
      {status}
    </span>
  );
}
