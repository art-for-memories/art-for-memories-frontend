import Header from "./Header";
import TopHero from "./TopHero";

interface HopHeaderProps {
    title: string;
    path?: string;
}

export default function TopHeader({ title, path }: HopHeaderProps) {
    return (<>
        <Header />
        <TopHero title={title} path={path} />
    </>);
}