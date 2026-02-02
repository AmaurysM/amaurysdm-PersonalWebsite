"use client";

import { Virtuoso } from "react-virtuoso";
import { useRef, useState } from "react";
import DiscordCommentCard from "./comment-card";

type Comment = {
  id: string;
  content: string;
  userId: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  parentId: string | null;
};

/* ------------------ DUMMY DATA ------------------ */

const generateDummyMessages = (
  count: number,
  offset = 0
): Comment[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: `msg-${offset + i}`,
    content:
      i % 3 === 0
        ? "Watching #AAPL and #TSLA closely today 👀"
        : i % 3 === 1
          ? "Market feels bullish 🚀 what do you think?"
          : "Anyone loading dips right now?",
    userId: i % 2 === 0 ? "user-1" : "user-2",
    image: null,
    createdAt: new Date(Date.now() - (offset + i) * 1000 * 60),
    updatedAt: new Date(),
    parentId: null,
  }));

/* ------------------ COMPONENT ------------------ */

export default function SocialShard() {
  const virtuosoRef = useRef<any>(null);

  const [messages, setMessages] = useState<Comment[]>(
    generateDummyMessages(15)
  );

  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isPrependingRef = useRef(false);

  /* -------- Load older messages -------- */
  const loadMoreMessages = async () => {
    if (isPrependingRef.current || isLoadingMore) return;

    isPrependingRef.current = true;
    setIsLoadingMore(true);

    await new Promise((res) => setTimeout(res, 800));

    const older = generateDummyMessages(10, messages.length);

    setMessages((prev) => [...older, ...prev]);
    setFirstItemIndex((prev) => prev - older.length);

    setHasMore(messages.length + older.length < 50);
    setIsLoadingMore(false);

    // Reset the prepending flag after Virtuoso adjusts
    setTimeout(() => {
      isPrependingRef.current = false;
    }, 100);
  };

  return (
    <div className="h-full w-full">
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: "100%" }}
        data={messages}
        firstItemIndex={firstItemIndex}
        initialTopMostItemIndex={messages.length - 1}
        followOutput={false}
        startReached={() => {
          if (!isLoadingMore && hasMore && !isPrependingRef.current) {
            loadMoreMessages();
          }
        }}
        components={{
          Scroller: (props) => (
            <div
              {...props}
              className="scrollbar-modern overflow-y-auto"
            />
          ),
          Header: () =>
            isLoadingMore ? (
              <div className="p-4 text-center text-gray-400 text-sm">
                Loading earlier messages…
              </div>
            ) : hasMore ? null : (
              <div className="p-2 text-center text-gray-500 text-xs">
                You&apos;ve reached the beginning
              </div>
            ),
        }}
        itemContent={(index, message) => (
          <div className="px-4 py-2 hover:bg-gray-800/50">
            <DiscordCommentCard
              message={message}
              groupedWithPrevious={
                index > 0 &&
                messages[index - 1]?.userId === message.userId
              }
              isFirstInThread={
                index === 0 ||
                messages[index - 1]?.userId !== message.userId
              }
            />
          </div>
        )}
      />
    </div>
  );
}