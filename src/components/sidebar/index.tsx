"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constant";
import clsx from "clsx";
import { Separator } from "../ui/separator";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col items-center justify-between gap-10 px-2 py-6">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link href="/" className="flex flex-row font-bold">
          fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "bg-[#EEE0FF] dark:bg-[#2F006B]":
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-black/10 backdrop-blur-xl text-xs"
                  side="right"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 px-2 py-4 rounded-full h-56 overflow-scroll border-[1px] dark:bg-[#353346]/30">
          <div className="relative dark:bg-[#353346]/70 rounded-full p-2 border-[1px] dark:border-t-[2px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full p-2 border-[1px] dark:border-t-[2px] dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full p-2 border-[1px] dark:border-t-[2px] dark:border-t-[#353346]">
            <Database className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full p-2 border-[1px] dark:border-t-[2px] dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default MenuOptions;
