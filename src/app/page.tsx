import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <section>
        <div className="top-0 flex justify-between items-center border-b p-3 ">
          <h1 className="py-1 px-1 cursor-pointer inline">HELLO</h1>
          <ModeToggle />
        </div>
      </section>
    </div>
  );
}
