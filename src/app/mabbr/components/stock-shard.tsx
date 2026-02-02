"use client";

import { FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface StockShardProps {
    symbol: string;
    price?: number;
    changePercent?: number;
}

export function StockShard({
    symbol,
    price = 182.45,
    changePercent = 1.24,
}: StockShardProps) {
    const isUp = changePercent >= 0;

    const generateStockSeries = (symbol: string, lastPrice: number, points = 12) => {
        const data = [];
        let price = lastPrice;

        for (let i = points; i > 0; i--) {
            const open = parseFloat((price + (Math.random() - 0.5)).toFixed(2));
            const high = parseFloat((open + Math.random() * 1).toFixed(2));
            const low = parseFloat((open - Math.random() * 1).toFixed(2));
            const close = parseFloat((low + Math.random() * (high - low)).toFixed(2));

            data.push({
                x: new Date(Date.now() - i * 60 * 1000),
                y: [open, high, low, close],
            });

            price = close;
        }

        data.push({
            x: new Date(),
            y: [price, price + Math.random() * 0.5, price - Math.random() * 0.5, lastPrice],
        });

        return [
            {
                name: symbol,
                data,
            },
        ];
    };

    const series = generateStockSeries("AAPL", 183.5);

    const chartOptions: any = {
        chart: {
            type: "candlestick",
            height: "100%",
            background: "transparent",
            toolbar: { show: false },
            zoom: { enabled: false },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#10b981",  
                    downward: "#ef4444" 
                },
                wick: {
                    useFillColor: true
                }
            }
        },
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            strokeDashArray: 3,
            position: 'back',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        xaxis: {
            type: "datetime",
            labels: {
                show: true,
                style: {
                    colors: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px'
                }
            },
            axisBorder: {
                show: true,
                color: 'rgba(255, 255, 255, 0.1)'
            },
            axisTicks: {
                show: true,
                color: 'rgba(255, 255, 255, 0.1)'
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px'
                },
                formatter: (value: number) => `$${value.toFixed(1)}`
            },
            opposite: true,
        },
        tooltip: {
            theme: "dark",
            x: {
                format: "HH:mm"
            },
            y: {
                formatter: (value: number) => `$${value.toFixed(2)}`
            }
        }
    };// #1F2937

    return (
        <div className="relative w-full h-full overflow-hidden bg-slate-900">
            <div className="relative h-full p-2 flex flex-col text-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg ${isUp ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                            <FaChartLine className={`text-sm ${isUp ? "text-emerald-400" : "text-red-400"}`} />
                        </div>
                        <div>
                            <span className="text-base font-bold block">{symbol}</span>
                            <span className="text-xs text-slate-400">NASDAQ</span>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-lg font-bold">${price.toFixed(2)}</div>
                        <div
                            className={`flex items-center gap-1 text-sm font-medium ${isUp ? "text-emerald-400" : "text-red-400"
                                }`}
                        >
                            {isUp ? <FaArrowUp /> : <FaArrowDown />}
                            {changePercent.toFixed(2)}%
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-0 mb-3">
                    <div className="h-full rounded-lg bg-slate-800/30 border border-white/5 p-3">
                        <Chart
                            options={chartOptions}
                            series={series}
                            type="candlestick"
                            height="100%"
                            width="100%"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center mb-3">
                    {[
                        { label: "Low", value: "$178.20" },
                        { label: "High", value: "$184.10" },
                        { label: "Vol", value: "58M" },
                        { label: "Mkt Cap", value: "$3.2T" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-lg bg-slate-800/50 px-2 py-1.5"
                        >
                            <div className="text-[10px] text-slate-400">
                                {item.label}
                            </div>
                            <div className="text-xs font-semibold">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {[
                        { label: "P/E Ratio", value: "32.4" },
                        { label: "52W High", value: "$199.62" },
                        { label: "52W Low", value: "$164.08" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-lg bg-slate-800/50 px-2 py-1.5"
                        >
                            <div className="text-[10px] text-slate-400">
                                {item.label}
                            </div>
                            <div className="text-xs font-semibold">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}