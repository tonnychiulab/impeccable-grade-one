import {
  BoxLabel,
  DepartureCard,
  NameCard,
  PlantCard,
  PourReadout,
  ReturnCard,
  SeatCard,
  SplitCard,
  TodayCard,
  WeekCalendar,
} from "@/components/grade-one";
import type { ReactNode } from "react";

const results: { name: string; title: string; result: ReactNode }[] = [
  {
    name: "今日三件事",
    title: "做出「回信、買牛奶、把書放回架上」這張今日卡片",
    result: <TodayCard />,
  },
  {
    name: "手沖一杯",
    title: "做出停在 4:00 的手沖讀數",
    result: <PourReadout />,
  },
  {
    name: "《島嶼》這一筆借閱",
    title: "做出《島嶼》還有 5 天的還書卡",
    result: <ReturnCard />,
  },
  {
    name: "小會議室這一小時",
    title: "做出小會議室 14:00 空位 4 的座位卡",
    result: <SeatCard />,
  },
  {
    name: "午餐這一張帳單",
    title: "做出午餐 900 元、兩人各 450 的分攤卡",
    result: <SplitCard />,
  },
  {
    name: "窗台這一盆薄荷",
    title: "做出窗台薄荷、間隔 4 天、上次 4 月 3 日的植物卡",
    result: <PlantCard />,
  },
  {
    name: "市區線這兩站",
    title: "做出市區線學校門口 08:40 的班次卡",
    result: <DepartureCard />,
  },
  {
    name: "林可這一張名片",
    title: "做出林可、02、2345-6789、分機 12 的名片",
    result: <NameCard />,
  },
  {
    name: "紙箱 K-03",
    title: "做出紙箱 K-03「廚房・易碎」的標籤",
    result: <BoxLabel />,
  },
  {
    name: "琴房 A 這一週",
    title: "做出琴房 A 週三 15:00–16:00 已塗色的週曆",
    result: <WeekCalendar />,
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-line pb-8">
        <p className="text-sm text-muted">impeccable-lab</p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight">一年級</h1>
      </header>
      <ol className="mt-12 flex flex-col gap-16">
        {results.map((item, index) => (
          <li key={item.name} id={`result-${index + 1}`}>
            <p className="text-sm text-muted">
              {index + 1}　{item.name}
            </p>
            <h2 className="mt-1 text-lg leading-relaxed">{item.title}</h2>
            <div className="mt-4">{item.result}</div>
          </li>
        ))}
      </ol>
    </main>
  );
}
