export interface MemoryImage {
    memoryId: string;
    image: string;
}
export interface Memory {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  memory: string;
  status: string;
  art: string;
  images: string[];
  MemoriesImage: MemoryImage[];
}

export interface TableProps {
  headers: string[];
  data: Memory[];
  onDelete: (email: string) => void;
  onPreview?: (memory: Memory) => void;
  onApproved?: (id: string) => void;
}
