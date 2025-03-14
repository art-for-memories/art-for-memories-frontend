export interface Art {
    id: string;
    name: string;
    age: string;
    oldPhoto: string;
    preservedPhoto: string;
}

export interface ArtTableProps {
    data: Art[];
    headers: string[];
    onDelete: (id: string) => void;
    onPreview: (data: Art) => void;
}