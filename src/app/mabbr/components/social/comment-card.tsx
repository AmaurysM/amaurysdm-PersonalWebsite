"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MoreHorizontal,
  Trash,
  Share,
  UserCircle,
  PlusCircle,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

/* ---------------------------------
   DUMMY DATA
---------------------------------- */

const DUMMY_USERS = {
  "user-1": {
    name: "Amaurys",
    image: null,
    role: "verified",
  },
  "user-2": {
    name: "MarketWatcher",
    image: null,
  },
};

const COMMON_REACTIONS = ["👍", "❤️", "😂", "🔥", "🚀"];

const DUMMY_REACTIONS = [
  { emoji: "👍", count: 3, me: false },
  { emoji: "🚀", count: 1, me: false },
];

/* ---------------------------------
   HELPERS
---------------------------------- */

function useOutsideClick(callback: () => void) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [callback]);

  return ref;
}

/* ---------------------------------
   COMPONENT
---------------------------------- */

export default function DiscordCommentCard({
  message,
  groupedWithPrevious = false,
  isFirstInThread = true,
}: any) {
  const poster = DUMMY_USERS[message.userId];
  const [reactions, setReactions] = useState(DUMMY_REACTIONS);
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const reactionPickerRef = useOutsideClick(() =>
    setShowReactionPicker(false)
  );
  const optionsMenuRef = useOutsideClick(() => setShowOptions(false));

  const toggleReaction = (emoji: string) => {
    setReactions((prev) => {
      const found = prev.find((r) => r.emoji === emoji);
      if (found) {
        return prev.map((r) =>
          r.emoji === emoji ? { ...r, count: r.count + 1 } : r
        );
      }
      return [...prev, { emoji, count: 1, me: true }];
    });
  };

  const formatTime = (date: Date) =>
    formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <div
      className={`relative flex ${groupedWithPrevious ? "mt-0.5 pt-0" : "mt-3 pt-1"
        }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Avatar */}
      {isFirstInThread && (
        <div className="shrink-0 mt-0.5">
          {poster?.image ? (
            <Image
              src={poster.image}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-gray-300" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col ml-2 grow">
        {/* Header */}
        {isFirstInThread && (
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-gray-100">
              {poster?.name || "User"}
            </span>
            <span className="text-xs text-gray-400">
              {formatTime(message.createdAt)}
            </span>
          </div>
        )}

        {/* Message */}
        <div className="text-gray-200 text-sm md:text-base whitespace-pre-wrap">
          {message.content}
        </div>

        {/* Image */}
        {message.image && (
          <Image
            src={message.image}
            alt="attachment"
            width={400}
            height={300}
            className="mt-2 rounded-md max-w-sm"
          />
        )}

        {/* Reactions */}
        {reactions.length > 0 && (
          <div className="flex gap-1 mt-2">
            {reactions.map((r) => (
              <div
                key={r.emoji}
                className="px-2 py-0.5 rounded-full text-xs bg-gray-800 border border-gray-700 hover:bg-gray-700"
              >
                {r.emoji} {r.count}
              </div>
            ))}
          </div>
        )}

        {/* Hover Actions */}
        <div
          className={`absolute right-0 top-0 flex gap-1 z-10 ${isHovering ? "opacity-100" : "opacity-0"
            } transition-opacity`}
        >
          <div className="relative">
            <div
              onClick={() => setShowReactionPicker(!showReactionPicker)}
              className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400"
            >
              <PlusCircle size={16} />
            </div>

            {/* Reaction Picker */}
            {showReactionPicker && (
              <div
                ref={reactionPickerRef}
                className="absolute top-full right-0 mt-1 p-2 bg-gray-800 border border-gray-700 rounded shadow-lg flex gap-1 z-50"
              >
                {COMMON_REACTIONS.map((emoji) => (
                  <div
                    key={emoji}
                    onClick={() => toggleReaction(emoji)}
                    className="text-lg hover:bg-gray-700 rounded px-1 cursor-pointer"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div ref={optionsMenuRef} className="relative">
            <div
              onClick={() => setShowOptions(!showOptions)}
              className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400"
            >
              <MoreHorizontal size={16} />
            </div>

            {showOptions && (
              <div className="absolute right-0 mt-1 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
                <div className="w-full px-3 py-2 text-sm text-red-400 hover:bg-gray-700 flex gap-2">
                  <Trash size={14} /> Delete
                </div>
                <div className="w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 flex gap-2">
                  <Share size={14} /> Share
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}