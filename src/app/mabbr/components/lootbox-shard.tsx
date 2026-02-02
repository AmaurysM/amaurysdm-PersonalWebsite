"use client";

import { useState } from "react";
import { Shield, Gem, Star, Leaf, Package } from "lucide-react";

const mockLootboxes = [
  {
    id: "1",
    name: "Starter Pack",
    price: 25,
    rarity: "Common",
    color: "from-gray-400 to-gray-500",
    borderColor: "border-gray-500",
    accentBg: "bg-gray-700",
    textColor: "text-gray-400",
    buttonColor: "bg-gray-500 hover:bg-gray-600",
    icon: <Package className="w-6 h-6 text-gray-400" />,
    stocks: ["AAPL", "MSFT", "GOOGL"]
  },
  {
    id: "2",
    name: "Tech Bundle",
    price: 75,
    rarity: "Uncommon",
    color: "from-green-400 to-green-600",
    borderColor: "border-green-500",
    accentBg: "bg-green-900",
    textColor: "text-green-400",
    buttonColor: "bg-green-500 hover:bg-green-600",
    icon: <Leaf className="w-6 h-6 text-green-400" />,
    stocks: ["NVDA", "AMD", "INTC", "TSM"]
  },
  {
    id: "3",
    name: "Elite Collection",
    price: 150,
    rarity: "Rare",
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500",
    accentBg: "bg-blue-900",
    textColor: "text-blue-400",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    stocks: ["TSLA", "META", "NFLX", "AMZN"]
  },
  {
    id: "4",
    name: "Fortune Vault",
    price: 600,
    rarity: "Legendary",
    color: "from-yellow-400 to-orange-500",
    borderColor: "border-yellow-400",
    accentBg: "bg-yellow-900",
    textColor: "text-yellow-400",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    stocks: ["BRK.A", "JPM", "V", "MA", "GS"]
  },
];

export function LootboxPreview() {
  const [selectedBox, setSelectedBox] = useState(mockLootboxes[0]);

  return (
    <div className="w-full h-full bg-background overflow-hidden">
      <div className="bg-linear-to-r bg-[#171e29] border-b border-gray-500 p-4">
        <h3 className="text-lg font-bold text-foreground">Market Lootboxes</h3>
        <p className="text-xs text-muted-foreground">Select a case to reveal potential stocks</p>
      </div>

      <div className="p-6 bg-[#1F2937]">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {mockLootboxes.map((box) => {
            const tokenCost = Math.ceil(box.price / 2);
            return (
              <div
                key={box.id}
                onClick={() => setSelectedBox(box)}
                className={`relative group rounded-md overflow-hidden shadow-md border-2 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 ${
                  selectedBox.id === box.id
                    ? `${box.borderColor} ring-1 ring-gray-500 ring-offset-2 ring-offset-background ${box.borderColor.replace('border-', 'ring-')}`
                    : box.borderColor
                }`}
              >
                <div className="absolute top-2 left-2 text-[8px] font-bold uppercase bg-yellow-500 text-black px-1.5 py-0.5 rounded z-10">
                  Sale
                </div>

                <div className={`h-3 w-16 mx-auto rounded-b-md border-b-2 border-l-2 border-r-2 ${box.borderColor}`}></div>
                
                <div className={`px-3 py-2 ${box.accentBg} flex items-center justify-between border-b-2 ${box.borderColor}`}>
                  <div className="flex items-center space-x-1.5">
                    {box.icon}
                    <span className={`font-bold uppercase text-[10px] truncate max-w-20 ${box.textColor}`}>
                      {box.rarity}
                    </span>
                  </div>
                  <div className="bg-black/50 rounded px-1.5 py-0.5">
                    <span className={`text-[9px] font-bold ${box.textColor}`}>
                      {tokenCost}
                    </span>
                  </div>
                </div>
                
                <div className="p-2.5">
                  <p className="text-[10px] text-gray-300 font-medium mb-2 truncate">{box.name}</p>
                  
                  <div
                    className={`w-full py-1.5 rounded text-white font-bold text-[10px] uppercase ${box.buttonColor}`}
                  >
                    Buy ({tokenCost})
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className={`rounded-lg border-2 ${selectedBox.borderColor} bg-[#171e29] p-4 transition-all duration-300 `}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {selectedBox.icon}
              <h4 className="text-sm font-bold text-foreground">{selectedBox.name}</h4>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full bg-linear-to-r ${selectedBox.color} text-white font-semibold`}>
              {selectedBox.rarity}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-xs text-muted-foreground font-medium">Potential Drops:</p>
            <div className="grid grid-cols-3 gap-2">
              {selectedBox.stocks.map((stock, i) => (
                <div
                  key={i}
                  className={`text-xs px-2 py-1.5 rounded border ${selectedBox.borderColor} bg-muted/50 text-center font-medium hover:bg-muted transition-colors`}
                  style={{
                    animation: `fadeIn 0.3s ease-out ${i * 0.1}s both`
                  }}
                >
                  {stock}
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`w-full py-2 rounded-lg bg-linear-to-r ${selectedBox.color} text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg`}
          >
            Open for {Math.ceil(selectedBox.price / 2)} tokens
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}