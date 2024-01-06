"use client";
import LeftSideMenuItem from "./item";
import React from "react";

const HomeSideBar = () => {
  const [menuItems, setMenuItems] = React.useState([
    { title: "Son 24 Saat / 48 Saat" },
    { title: "Acil İlanlar" },
    { title: "Fiyatı Düşenler" },
    { title: null, hr: true },
    { title: "Tüm İlanlar" },
    { title: "Otomobil" },
    { title: "Arazi, SUV, Pick-up" },
    { title: "Motosiklet" },
    { title: "Minivan & Panelvan" },
    { title: "Ticari Araçlar" },
    { title: "Kiralık Araçlar" },
    { title: "Hasarlı Araçlar" },
    { title: "Traktör" },
    { title: "Tarım & İş Makineleri" },
    { title: "Klasik Araçlar" },
    { title: "Elektrikli Araçlar" },
    { title: "ATV & UTV" },
    { title: "Karavan" },
    { title: "Engelli Araçları" },
    { title: "Modifiyeli Araçlar" },
  ]);
  return (
    <div className="flex flex-col bg-white shadow-lg">
      {menuItems.map((item, index) => {
        return <LeftSideMenuItem key={index} item={item} />;
      })}
    </div>
  );
};

export default HomeSideBar;
