import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await axios.get("https://api.sampleapis.com/coffee/hot");
      console.log(data.data);
      setCoffee(data.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="bg-[#1F3933] text-white  flex justify-between px-32 py-6">
        <h1 className="text-xl">Rewards are pouring. Sing up now!</h1>
        <button className="border border-white rounded-full px-6 py-1">
          Know more
        </button>
      </div>
      <div className="px-32">
        <h1 className="text-2xl font-bold mt-6">Latest Offerings</h1>

        <div className="flex items-center gap-20">
          {coffee.slice(7, 14).map((item) => {
            return (
              <div key={item.id} className="py-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-28 cursor-pointer rounded-full object-cover scale-110"
                />
                <h1 className="text-center font-bold mt-4">{item.title}</h1>
              </div>
            );
          })}
        </div>
        <h1 className="text-2xl font-bold">Handcrafted Curations</h1>
        <div className="flex items-center gap-24">
          {coffee.slice(0, 6).map((item) => {
            return (
              <div key={item.id} className="py-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 cursor-pointer rounded-full object-cover"
                />
                <h1 className="text-center font-bold mt-4">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between bg-[#EDEAE8] px-32 py-8">
          <h1 className="text-2xl font-bold">Learn more about the world of coffee!</h1>
          <p className="text-sm text-green-900">Discover more</p>
        </div>
      </div> 
    </div>
  );
}

export default Home;
