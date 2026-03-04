"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dragStartYRef = useRef(0);
  const dragStartScrollTopRef = useRef(0);
  const thumbHeightRef = useRef(0);

  const updateThumb = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    const ratio = el.clientHeight / el.scrollHeight;
    const newThumbHeight = Math.max(ratio * el.clientHeight, 40);
    const scrollRatio =
      el.scrollTop / (el.scrollHeight - el.clientHeight) || 0;
    const maxTop = el.clientHeight - newThumbHeight;
    thumbHeightRef.current = newThumbHeight;
    setThumbHeight(newThumbHeight);
    setThumbTop(scrollRatio * maxTop);
  }, []);

  const showThumb = useCallback(() => {
    setIsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setIsVisible(false), 1500);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    updateThumb();

    const onScroll = () => {
      updateThumb();
      showThumb();
      window.dispatchEvent(
        new CustomEvent("pagewrapper:scroll", { detail: { target: el } })
      );
    };

    const resizeObserver = new ResizeObserver(updateThumb);
    resizeObserver.observe(el);
    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [updateThumb, showThumb]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      dragStartYRef.current = e.clientY;
      dragStartScrollTopRef.current = contentRef.current?.scrollTop ?? 0;
      setIsDragging(true);

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setIsVisible(true);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const el = contentRef.current;
      if (!el) return;
      const delta = e.clientY - dragStartYRef.current;
      const trackHeight = el.clientHeight;
      const scrollRange = el.scrollHeight - el.clientHeight;
      const thumbRange = trackHeight - thumbHeightRef.current;
      if (thumbRange <= 0) return;
      const scrollDelta = (delta / thumbRange) * scrollRange;
      el.scrollTop = Math.max(
        0,
        Math.min(scrollRange, dragStartScrollTopRef.current + scrollDelta)
      );
    },
    [isDragging]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setIsDragging(false);
      hideTimerRef.current = setTimeout(() => setIsVisible(false), 1500);
    },
    []
  );

  const onTrackClick = useCallback((e: React.MouseEvent) => {
    const el = contentRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    if ((e.target as HTMLElement) === thumbRef.current) return;
    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const ratio = clickY / track.clientHeight;
    el.scrollTop = ratio * (el.scrollHeight - el.clientHeight);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={contentRef}
        data-scroll-container
        className="h-full w-full overflow-y-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        onMouseEnter={showThumb}
        onMouseMove={showThumb}
      >
        {children}
      </div>

      <div
        ref={trackRef}
        onClick={onTrackClick}
        className="absolute top-0 right-0 w-2 h-full z-50 cursor-pointer"
        onMouseEnter={showThumb}
      >
        <div
          ref={thumbRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="absolute left-0 w-full rounded-full"
          style={{
            height: `${thumbHeight}px`,
            top: `${thumbTop}px`,
            backgroundColor: "var(--md-sys-color-primary)",
            opacity: isDragging ? 1 : isVisible ? 0.7 : 0,
            transition: isDragging ? "none" : "opacity 0.3s ease",
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "none",
          }}
        />
      </div>
    </div>
  );
};

export default PageWrapper;