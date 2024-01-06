import HomeSideBar from "@/components/HomeSideBar";
import Slider from "@/components/Slider/Slider";
import React from "react";

function HomePage() {
  return (
    <div className="mt-5">
      <div className="container mx-auto">
        <div className="flex gap-10">
          <div className="w-1/6">
            <HomeSideBar />
          </div>
          <div className="w-4/6 min-h-full">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
