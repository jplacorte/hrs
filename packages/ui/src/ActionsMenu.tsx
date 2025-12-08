'use client'
import { faCircleInfo, faEllipsis, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function ActionsMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-200 data-open:bg-gray-200">
        <FontAwesomeIcon icon={faEllipsis} color="black"/>
      </MenuButton>

     <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border  bg-white p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
        <div className="py-1">
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-200 text-blue-500">
            <FontAwesomeIcon icon={faCircleInfo} />
            View Details
          </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-200 text-amber-500">
            <FontAwesomeIcon icon={faPenToSquare} />
            Edit
          </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-200 text-red-500">
              <FontAwesomeIcon icon={faTrashCan} />
            Delete
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}


