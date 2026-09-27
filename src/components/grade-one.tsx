function Lines({
  rows,
}: {
  rows: { label: string; value: string; prominent?: boolean }[];
}) {
  return (
    <dl className="border border-line bg-card px-5 sm:px-6">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-4 last:border-b-0"
        >
          <dt className="shrink-0 text-sm text-muted">{row.label}</dt>
          <dd
            className={
              row.prominent
                ? "text-right text-5xl font-medium tabular-nums tracking-tight"
                : "text-right text-xl"
            }
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function TodayCard() {
  const lines = ["回信", "買牛奶", "把書放回架上"] as const;

  return (
    <div className="border border-line bg-card px-5 sm:px-6">
      <ol>
        {lines.map((line) => (
          <li
            key={line}
            className="border-b border-line py-4 text-2xl last:border-b-0"
          >
            {line}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PourReadout() {
  return (
    <div className="border border-line bg-card px-6 py-10 text-center">
      <p className="text-base">手沖</p>
      <p className="mt-4 text-7xl font-medium tabular-nums tracking-tight sm:text-8xl">
        4:00
      </p>
      <p className="mt-6 text-2xl tabular-nums">240 秒</p>
    </div>
  );
}

export function ReturnCard() {
  return (
    <Lines
      rows={[
        { label: "書名", value: "《島嶼》" },
        { label: "索書號", value: "843.57" },
        { label: "應還日", value: "4 月 12 日" },
        { label: "剩下", value: "5 天", prominent: true },
      ]}
    />
  );
}

export function SeatCard() {
  return (
    <Lines
      rows={[
        { label: "房間", value: "小會議室" },
        { label: "時段", value: "14:00–15:00" },
        { label: "上限", value: "6" },
        { label: "已坐", value: "2" },
        { label: "空位", value: "4", prominent: true },
      ]}
    />
  );
}

export function SplitCard() {
  return (
    <Lines
      rows={[
        { label: "項目", value: "午餐" },
        { label: "總額", value: "900" },
        { label: "人數", value: "2" },
        { label: "每人", value: "450", prominent: true },
      ]}
    />
  );
}

export function PlantCard() {
  return (
    <Lines
      rows={[
        { label: "名稱", value: "薄荷" },
        { label: "位置", value: "窗台" },
        { label: "間隔", value: "4 天" },
        { label: "上次澆水", value: "4 月 3 日" },
      ]}
    />
  );
}

export function DepartureCard() {
  return (
    <Lines
      rows={[
        { label: "路線", value: "市區" },
        { label: "停靠站", value: "學校門口" },
        { label: "發車", value: "08:40", prominent: true },
      ]}
    />
  );
}

export function NameCard() {
  const segments = [
    { label: "姓名", value: "林可" },
    { label: "區碼", value: "02" },
    { label: "號碼", value: "2345-6789" },
    { label: "分機", value: "12" },
  ] as const;

  return (
    <div className="border border-line bg-card">
      <ol className="grid grid-cols-1 sm:grid-cols-4">
        {segments.map((segment, index) => (
          <li
            key={segment.label}
            className={
              index === 0
                ? "px-5 py-4"
                : "border-t border-line px-5 py-4 sm:border-t-0 sm:border-l"
            }
          >
            <p className="text-sm text-muted">{segment.label}</p>
            <p className="mt-2 text-2xl tabular-nums">{segment.value}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BoxLabel() {
  const lines = ["K-03", "廚房", "易碎"] as const;

  return (
    <div className="mx-auto max-w-xs border-4 border-double border-foreground bg-card px-6 py-8 text-center">
      <ul>
        {lines.map((line) => (
          <li key={line} className="py-1 text-2xl">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

const weekDays = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"] as const;
const weekHours = ["15:00", "16:00"] as const;

export function WeekCalendar() {
  return (
    <div className="overflow-x-auto border border-line bg-card">
      <table className="w-full min-w-[40rem] table-fixed border-collapse text-left">
        <caption className="sr-only">琴房 A 這一週</caption>
        <thead>
          <tr>
            <th className="w-16 border-b border-line p-2" />
            {weekDays.map((day) => (
              <th
                key={day}
                scope="col"
                className="border-b border-line p-2 text-center text-sm font-medium"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekHours.map((hour) => (
            <tr key={hour}>
              <th
                scope="row"
                className="border-t border-line p-2 align-top text-sm tabular-nums text-muted"
              >
                {hour}
              </th>
              {weekDays.map((day) => {
                const reserved = day === "週三" && hour === "15:00";
                return (
                  <td
                    key={day}
                    className={
                      reserved
                        ? "h-28 border-t border-l border-line bg-reserved p-2 align-top text-reserved-ink"
                        : "h-28 border-t border-l border-line p-2 align-top"
                    }
                  >
                    {reserved ? (
                      <>
                        <p className="text-sm font-medium">琴房 A</p>
                        <p className="mt-1 text-sm">4 月 8 日</p>
                        <p className="mt-1 text-sm tabular-nums">15:00–16:00</p>
                      </>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
