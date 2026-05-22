import Content from '@/components/Content';
import Sidebar from '@/components/Sidebar';

export const dynamic = 'force-static';

export default function Home() {
    return (
        <>
            <Content />
            <Sidebar />
        </>
    );
}
