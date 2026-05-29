import Image from "next/image";
import { cn } from "@/lib/utils";

type IllustrationProps = {
  className?: string;
};

export default function Illustration({ className }: IllustrationProps) {
   return (
     <div className="relative hidden md:block md:w-1/2 dark:bg-gray-900">
       <div className="absolute mt-[15rem] inset-0 flex items-center justify-center">
         <Image
           src="/img/hotels.png"
           alt="Hotels"
           width={1500}
           height={1200}
           className={cn(
             "object-contain dark:opacity-20 transition-opacity duration-300",
             className,
           )}
           priority
         />
       </div>
     </div>
   );
}
