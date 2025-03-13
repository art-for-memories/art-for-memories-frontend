export interface Stories {
    id: string;
    title: string;
    author: string;
    date: string;
    files: string[];
    status: string;
    storyType: string;
}

export interface TableProps {
    headers: string[];
    data: Stories[];
    onDelete: (email: string) => void;
    onPreview?: (Stories: Stories) => void;
    onApproved?: (id: string) => void;
}