import Link from "next/link";
import { Button } from "@/components/ui/button"

const HomeButton: React.FC = () => {
    return (
        <div className="absolute top-4 left-4">
            <Link href="/">
                <Button variant="ghost" className="font-bold text-lg">Murtaza&apos;s Blog</Button>
            </Link>
        </div>
    );
};

export default HomeButton;