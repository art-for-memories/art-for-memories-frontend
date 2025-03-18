export interface Stories {
    id: string;
    title: string;
    author: string;
    date: string;
    files: string[];
    status: string;
    storyType: string;
    image: string;
}

export interface PublicStory {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string;
    type: string;
    role: string;
}

export interface TableProps {
    headers: string[];
    data: Stories[];
    onDelete: (email: string) => void;
    onPreview?: (Stories: Stories) => void;
    onApproved?: (id: string) => void;
}