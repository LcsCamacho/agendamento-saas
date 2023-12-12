"use client";
import { Listbox, ListboxItem, Link } from "@/components/next-ui";
import { BiCalendar, BiSolidDashboard } from "react-icons/bi";

export const ListSidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav className="mt-4">
      <Listbox aria-label="Actions">
        <ListboxItem key={"dashboard"}>
          <Link className="dark:text-white  text-black" href="/dashboard">
            {isOpen ? "Dashboard" : <BiSolidDashboard size={22} />}
          </Link>
        </ListboxItem>
        <ListboxItem key={"calendar"}>
          <Link className="dark:text-white text-black" href="/calendar">
            {isOpen ? "Calendário" : <BiCalendar size={22} />}
          </Link>
        </ListboxItem>
      </Listbox>
    </nav>
  );
};
