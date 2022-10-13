import React from "react"
import styles from "@styles/pages/ProfessorsPage.module.scss"

import debounce from "lodash.debounce"

import { Header } from "@components/Header"
import { Professor } from "@components/Professor"

import { ReactComponent as SearchIcon } from "@icons/search.svg"
import { useProfessors } from "@api/useProfessors"
import { ProfessorType } from "@app-types/schedule.types"
import { useSearchParams } from "react-router-dom"
import { useAtom } from "jotai"
import { professorPopup } from "@atoms/popupsAtom"
import { Empty } from "@components/Empty"

const ProfessorsPage: React.FC = () => {
  const [, setPopup] = useAtom(professorPopup)
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchValue, setSearchValue] = React.useState<string>("")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const { data, isLoading, isError } = useProfessors(searchQuery)

  React.useEffect(() => {
    if (searchParams.get("id")) setPopup(true)
    else setPopup(false)
  }, [searchParams])

  React.useEffect(() => {
    setSearch(searchValue)
  }, [searchValue])

  const setSearch = React.useCallback(
    debounce((q) => {
      setSearchQuery(q)
    }, 300),
    []
  )

  const professors = data
    ? data
        .slice(0, 49)
        .map((item: ProfessorType) => <Professor key={item.id} {...item} />)
    : null

  return (
    <div className={styles.professors}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              name="search"
              placeholder="Поиск преподавателей"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon width={22} height={22} />
          </div>
          {professors && professors.length ? (
            <div className={styles.container}>{professors}</div>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  )
}

export { ProfessorsPage }
