import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

interface MyPDFViewerProps {
    pdfUrl: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`;

const MyPDFViewer = ({ pdfUrl }: MyPDFViewerProps) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ height: '500px' }}>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>

            <div>
                <button
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                >
                    Prev
                </button>
                <span>{`Page ${pageNumber} of ${numPages}`}</span>
                <button
                    disabled={numPages !== null && pageNumber >= numPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyPDFViewer;
