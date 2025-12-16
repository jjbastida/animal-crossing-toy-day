import { useState, useCallback } from "react";

interface UseDragReturn<T> {
  draggedItem: T | null;
  draggedOverTarget: number | null;
  handleDragStart: (item: T, e: React.DragEvent, canDrag?: boolean) => void;
  handleDragEnd: () => void;
  handleDragOver: (targetId: number, e: React.DragEvent, canDrop?: boolean) => void;
  handleDragLeave: () => void;
  handleDrop: (targetId: number, onDrop: (item: T, targetId: number) => void) => void;
}

function useDrag<T>(): UseDragReturn<T> {
  const [draggedItem, setDraggedItem] = useState<T | null>(null);
  const [draggedOverTarget, setDraggedOverTarget] = useState<number | null>(null);

  const handleDragStart = useCallback(
    (item: T, e: React.DragEvent, canDrag: boolean = true): void => {
      if (!canDrag) {
        e.preventDefault();
        return;
      }
      setDraggedItem(item);
    },
    [],
  );

  const handleDragEnd = useCallback((): void => {
    setDraggedItem(null);
    setDraggedOverTarget(null);
  }, []);

  const handleDragOver = useCallback(
    (targetId: number, e: React.DragEvent, canDrop: boolean = true): void => {
      if (!canDrop || !draggedItem) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDraggedOverTarget(targetId);
    },
    [draggedItem],
  );

  const handleDragLeave = useCallback((): void => {
    setDraggedOverTarget(null);
  }, []);

  const handleDrop = useCallback(
    (targetId: number, onDrop: (item: T, targetId: number) => void): void => {
      if (!draggedItem) return;
      onDrop(draggedItem, targetId);
      setDraggedItem(null);
      setDraggedOverTarget(null);
    },
    [draggedItem],
  );

  return {
    draggedItem,
    draggedOverTarget,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}

export default useDrag;
