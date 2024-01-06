import React from "react";
import { GoTriangleDown } from "react-icons/go";
function HeaderTop() {
  const menus = [
    { id: 1, title: "Trink! Sat" },
    { id: 2, title: "Araç Al" },
    { id: 3, title: "Araç Sat" },
    { id: 4, title: "Hizmetlerimiz" },
    { id: 5, title: "Kampanyalarımız" },
    { id: 6, title: "Arabam Blog" },
    { id: 7, title: "Kurumsal" },
    { id: 8, title: "Garaj" },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <div className="h-[30px] mx-auto container items-center flex justify-center">
          <div className="flex gap-[10px] items-center justify-center">
            {menus.map((item, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="font-semibold text-[#484848] flex items-center hover:text-red"
                >
                  <span className="text-[12px] font-semibold">
                    {item.title}
                  </span>
                  <GoTriangleDown />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
