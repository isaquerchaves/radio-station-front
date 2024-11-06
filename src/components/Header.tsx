import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Queue from "./Queue/Queue";

const Header = () => {
  return ( 
    <header className="flex flex-row justify-between">
      <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Fila</SheetTitle>
              <SheetDescription>
                <Queue />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <h3>Radio BestaFera</h3>

        <p></p>
    </header>
   );
}
 
export default Header;