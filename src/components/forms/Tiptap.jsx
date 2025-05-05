"use client";

import { useEditor, EditorContent, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";

// Custom Underline Extension
const Underline = Extension.create({
  name: "underline",
  addCommands() {
    return {
      toggleUnderline:
        () =>
        ({ chain }) => {
          return chain().focus().toggleMark("underline").run();
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          underline: {
            default: false,
            renderHTML: (attributes) => {
              if (attributes.underline) {
                return ["u", 0];
              }
              return {};
            },
            parseHTML: (element) => element.tagName === "U",
          },
        },
      },
    ];
  },
});

const Tiptap = ({ onContentChange, value = "" }) => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Strike, Underline],
    content: value,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="p-4 bg-white border rounded-lg">
      {/* Toolbar */}
      <div className="flex gap-2 mb-10">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2 border rounded"
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2 border rounded"
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="p-2 border rounded"
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className="p-2 border rounded"
        >
          <FaStrikethrough />
        </button>
      </div>

      {/* Text Editor */}
      <EditorContent
        editor={editor}
        className="bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Tiptap;
