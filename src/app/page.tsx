import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
        
          Click &nbsp;<Link href="/documents" ><span className="text-blue-500 underline">here</span></Link>&nbsp; to direct to Document
        
    </div>
  );
}
