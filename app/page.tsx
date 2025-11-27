import App from "@/components/Tes";
import { redirect } from "next/navigation";

export default function Home() {
    return (
        redirect("/beranda")
    );
}
