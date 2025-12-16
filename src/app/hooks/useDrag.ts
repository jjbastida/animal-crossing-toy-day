import { useState, useEffect, useRef } from "react";

interface DragPreview {
  imageURL: string;
  x: number;
  y: number;
}

interface UseDragReturn<T> {
  draggedItem: T | null;
  draggedOverTarget: number | null;
  dragPreview: DragPreview | null;
  handleMouseDown: (item: T, imageURL: string, canDrag?: boolean, e?: React.MouseEvent) => void;
  handleMouseEnter: (targetId: number, canDrop?: boolean) => void;
  handleMouseLeave: () => void;
  handleMouseUp: (targetId: number, onDrop: (item: T, targetId: number) => void) => void;
}

function useDrag<T>(): UseDragReturn<T> {
  const [draggedItem, setDraggedItem] = useState<T | null>(null);
  const [draggedOverTarget, setDraggedOverTarget] = useState<number | null>(null);
  const [dragPreview, setDragPreview] = useState<DragPreview | null>(null);
  const isDraggingRef = useRef(false);
  const isDroppingRef = useRef(false);

  useEffect(() => {
    function handleGlobalMouseMove(e: MouseEvent) {
      if (isDraggingRef.current && dragPreview) {
        setDragPreview({
          ...dragPreview,
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    function handleGlobalMouseUp() {
      if (isDraggingRef.current && !isDroppingRef.current) {
        setDraggedItem(null);
        setDraggedOverTarget(null);
        setDragPreview(null);
        isDraggingRef.current = false;
      }
      isDroppingRef.current = false;
    };

    if (draggedItem) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [draggedItem, dragPreview]);

  function handleMouseDown(item: T, imageURL: string, canDrag: boolean = true, e?: React.MouseEvent) {
    if (!canDrag) return;
    setDraggedItem(item);
    isDraggingRef.current = true;
    setDragPreview({
      imageURL,
      x: e?.clientX ?? 0,
      y: e?.clientY ?? 0,
    });
  };

  function handleMouseEnter(targetId: number, canDrop: boolean = true) {
    if (!canDrop || !draggedItem) return;
    setDraggedOverTarget(targetId);
  };

  function handleMouseLeave() {
    setDraggedOverTarget(null);
  };

  function handleMouseUp(targetId: number, onDrop: (item: T, targetId: number) => void) {
    if (!draggedItem) return;
    isDroppingRef.current = true;
    onDrop(draggedItem, targetId);
    setDraggedItem(null);
    setDraggedOverTarget(null);
    setDragPreview(null);
    isDraggingRef.current = false;
    isDroppingRef.current = false;
  };

  return {
    draggedItem,
    draggedOverTarget,
    dragPreview,
    handleMouseDown,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseUp,
  };
}

export default useDrag;
