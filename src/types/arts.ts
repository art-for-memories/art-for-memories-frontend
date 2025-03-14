export interface Art {
    id: string;
    name: string;
    age: string;
    oldPhoto: string;
    preservedPhoto: string;
    killedOn?: string;
    submittedBy?: string;
    preview?: boolean;
}

export interface ArtTableProps {
    data: Art[];
    headers: string[];
    onDelete: (id: string) => void;
    onPreview: (data: Art) => void;
}