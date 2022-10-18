import { ScheduleParamsType } from "@app-types/settings.types"
import { getCurrentWeek, getWeekPart } from "@utils/getSemesterInfo"
import { atom } from "jotai"

export const currentWeekAtom = atom<number>(getCurrentWeek())

/** false: mon, tue, wed; true: thu, fri, sat */
export const currentWeekPartAtom = atom<boolean>(getWeekPart())

export const groupAtom = atom<string>("")

export const scheduleParamsAtom = atom<ScheduleParamsType>({
  showLectures: true,
  showLate: true,
  showBreaks: true,
  showEmpty: true
})
