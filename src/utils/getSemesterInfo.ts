import moment from "moment"
import { DayEnum } from "@app-types/schedule.types"

import {
  SEMESTER_1_END_DATE,
  SEMESTER_1_START_DATE,
  SEMESTER_2_END_DATE,
  SEMESTER_2_START_DATE
} from "@config"

const FORMAT = "DD-MM-YYYY"
const TODAY = moment()

const SEMESTER_1_START = `${SEMESTER_1_START_DATE}.` + TODAY.year()
const SEMESTER_1_END = `${SEMESTER_1_END_DATE}.` + (TODAY.year() + 1)

const SEMESTER_2_START = `${SEMESTER_2_START_DATE}.` + TODAY.year()
const SEMESTER_2_END = `${SEMESTER_2_END_DATE}.` + TODAY.year()

const SEM = TODAY.month() > 1 && TODAY.month() < 7 ? 1 : 0

const SEMESTER_START = moment(SEM ? SEMESTER_2_START : SEMESTER_1_START, FORMAT)
const SEMESTER_END = moment(SEM ? SEMESTER_2_END : SEMESTER_1_END, FORMAT)

export const getSemesterInfo = (name: string) => {
  const groupInfo = name.split("-")

  const date = new Date()
  const cy = Number(date.getFullYear())
  const cm = Number(date.getMonth())

  const year = cy - Number("20" + groupInfo[2]) + 1
  const cs = cm > 1 && cm < 7 ? 0 : -1

  const semester = year * 2 + cs

  return {
    year,
    semester
  }
}

const formatISODay = (day: DayEnum) => {
  const days = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6
  }

  return days[day]
}

export const getWeeksNumber = () => {
  return SEMESTER_END.week() - SEMESTER_START.week() + 2
}

export const getCurrentWeek = () => {
  return moment().week() - SEMESTER_START.week() + 1
}

export const getDate = (week: number, day: DayEnum) => {
  return moment(SEMESTER_START)
    .add(week - 1, "weeks")
    .isoWeekday(formatISODay(day))
    .format("DD.MM.YYYY")
}

export const getIsLate = (date: string, time: string) => {
  const today = moment()
  const target = moment(`${date}, ${time}`, "DD.MM.YYYY, hh:mm")

  return today.diff(target, "minute") > 0 ? true : false
}

export const getShortDay = (day: DayEnum) => {
  const days = {
    MONDAY: "ПН",
    TUESDAY: "ВТ",
    WEDNESDAY: "СР",
    THURSDAY: "ЧТ",
    FRIDAY: "ПТ",
    SATURDAY: "СБ"
  }

  return days[day]
}

export const getMinutesDiff = (timeStart: string, timeEnd: string) => {
  const ch = moment(timeStart, "HH:mm")
  const nh = moment(timeEnd, "HH:mm")

  const diff = nh.diff(ch, "minutes")
  return diff
}
