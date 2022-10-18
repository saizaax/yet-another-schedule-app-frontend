export type ScheduleType = {
  MONDAY: {
    day: "Понедельник"
    dayShort: "ПН"
    classes: SubjectType[]
  }
  TUESDAY: {
    day: "Вторник"
    dayShort: "ВТ"
    classes: SubjectType[]
  }
  WEDNESDAY: {
    day: "Среда"
    dayShort: "СР"
    classes: SubjectType[]
  }
  THURSDAY: {
    day: "Четверг"
    dayShort: "ЧТ"
    classes: SubjectType[]
  }
  FRIDAY: {
    day: "Пятница"
    dayShort: "ПТ"
    classes: SubjectType[]
  }
  SATURDAY: {
    day: "Суббота"
    dayShort: "СБ"
    classes: SubjectType[]
  }
}

export type SubjectType = {
  id: string
  type: "Лекция" | "Практика" | "Лабораторная"
  subject: string
  weeks: number[]
  index: number
  timeStart: string
  timeEnd: string
  location: string
  professor: string
  isLate?: boolean
}

export enum DayEnum {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}

export type BreakType = {
  type: "BREAK"
  hours: number
  minutes: number
}

export type ProfessorType = {
  id: string
  name: string
  locations: string[]
  days: string[]
}
