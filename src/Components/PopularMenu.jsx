import { useEffect, useState } from "react"; // <-- Added useState
import MenuItem from "../Shared/MenuTem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]); // <-- Correctly initialized useState

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-24">
      <div className="mt-24 text-center">
        <p className="text-[#D99904] italic font-semibold text-xl">
          ---Check it Out---
        </p>
        <h2 className="text-4xl font-bold p-6 border-t-2 border-b-2 border-[#E8E8E8] max-w-sm mx-auto mt-4 mb-5">
          FROM OUR MENU
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
