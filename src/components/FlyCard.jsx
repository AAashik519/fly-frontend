import React from 'react'

const FlyCard = () => {
    const cardsData = [
        {
          id: 1,
          image: "/cardimg.png", // Replace with the path to your image
          title: "Singapore",
          description: "Economy Starts From",
          price: 'BDT 50,000',
        },
        {
          id: 2,
          image: "/cardimg.png",// Replace with the path to your image
          title: "Singapore",
          description: "Economy Starts From",
          price: 'BDT 50,000',
        },
        {
          id: 3,
          image: "/cardimg.png", // Replace with the path to your image
          title: "Singapore",
          description: "Economy Starts From",
          price: 'BDT 50,000',
        },
      ];
  return (
    <div>
    <div className=" max-w-[1200px] mx-auto pt-20 pb-10">
        <h1 className='text-3xl text-[#3D3A49] font-medium mb-4'>Flight Deals</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3  gap-8">
        {cardsData.map((card) => (
            <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img className="w-full h-[240px] object-cover" src={card.image} alt={card.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#3D3A49] mb-2">{card.title}</h2>
              <p className="mb-2 text-[#8A8781]">{card.description}</p>
              <p className="text-xl font-semibold text-[#3D3A49]">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FlyCard