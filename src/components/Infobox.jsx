import React from "react";

/**
 * Infobox Component
 *
 * @param {string} title
 * @param {string} content
 * @param {string} parentClassname
 * @param {string} titleClassname
 * @param {string} contentClassname
 */

export default function Infobox({ title, content, parentClassname, titleClassname, contentClassname }) {
  return (
    <div data-testid="infobox-parent"
      className={`space-y-2  px-6 py-4 mb-6 rounded-lg border-4 ${parentClassname}`}
    >
      <p className={`text-3xl font-bold ${titleClassname}`}>{title}</p>
      <p className={`text-lg ${contentClassname}`}>{content}</p>
    </div>
  );
}
