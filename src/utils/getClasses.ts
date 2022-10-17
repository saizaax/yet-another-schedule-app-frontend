import { BreakType, SubjectType } from "@app-types/schedule.types"
import { getIsLate, getMinutesDiff } from "@utils/getSemesterInfo"

export const getClasses = (
  classes: SubjectType[],
  week: number,
  date: string,
  showLate: boolean = true,
  showLectures: boolean = true
) => {
  if (!classes) return []

  const filtered = classes
    .filter((item) => item.weeks.includes(week))
    .filter((item) => showLectures || item.type !== "Лекция")
    .sort((a, b) => a.index - b.index)
    .map((item) => ({ ...item, isLate: getIsLate(date, item.timeEnd) }))
    .filter((item) => showLate || !item.isLate)

  const res: (BreakType | SubjectType)[] = []

  for (let i = 0; i < filtered.length; i++) {
    const current = filtered[i]
    res.push(current)

    if (i < filtered.length - 1) {
      const next = filtered[i + 1]

      if (current.timeEnd && next.timeStart) {
        const minutesDiff = getMinutesDiff(current.timeEnd, next.timeStart)
        const h = Math.floor(minutesDiff / 60)
        const m = minutesDiff % 60

        if (minutesDiff >= 30) {
          res.push({
            type: "BREAK",
            minutes: m,
            hours: h
          })
        }
      }
    }
  }

  return res
}

export const getProfessorClasses = (
  classes: SubjectType[],
  weekType: "Чётная" | "Нечётная"
) => {
  if (!classes) return []

  const filtered = classes
    .filter((item) =>
      weekType === "Чётная"
        ? item.weeks.some((i) => i % 2 === 0)
        : item.weeks.some((i) => i % 2 !== 0)
    )
    .sort((a, b) => a.index - b.index)

  return filtered
}
