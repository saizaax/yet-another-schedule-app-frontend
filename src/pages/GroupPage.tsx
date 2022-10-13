import React from "react"
import styles from "@styles/pages/GroupPage.module.scss"

import debounce from "lodash.debounce"

import { ReactComponent as GitHubIcon } from "@icons/github.svg"
import { Selector } from "@components/Selector"
import { useAtom } from "jotai"
import { groupAtom } from "@atoms/scheduleAtom"
import { useGroups } from "@api/useGroups"
import { Navigate, useNavigate } from "react-router-dom"

const GroupPage: React.FC = () => {
  const navigate = useNavigate()

  const { data, isLoading, isError } = useGroups()
  const [group, setGroup] = useAtom(groupAtom)

  const [variants, setVariants] = React.useState<string[]>([])
  const [focused, setFocused] = React.useState<boolean>(false)
  const [groupValue, setGroupValue] = React.useState<string>("")
  const [isGroupValid, setIsGroupValid] = React.useState<boolean>(false)

  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  const updateVariants = React.useCallback(
    debounce((data, value) => {
      const v = data
        .map((item: { id: string; name: string }) => item.name)
        .filter((item: string) => item.includes(value))
      setVariants(v)
    }, 200),
    []
  )

  const updateIsGroupValid = React.useCallback(
    debounce(
      (variants, groupValue) =>
        setIsGroupValid(checkGroupValid(variants, groupValue)),
      200
    ),
    []
  )

  const checkGroupValid = (variants: string[], value: string) => {
    if (variants.length === 1) {
      const [g] = variants

      if (g === value) {
        return true
      }
    }
    return false
  }

  React.useEffect(() => {
    if (data) updateVariants(data, groupValue)
  }, [data, groupValue])

  React.useEffect(() => {
    updateIsGroupValid(variants, groupValue)
  }, [variants, groupValue])

  const handleGroupSet = () => {
    setGroup(groupValue)
    localStorage.setItem("schedule-group", groupValue)
  }

  if (group) return <Navigate to="/schedule" />

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h1>Yet Another Schedule App</h1>
          <p>Просмотр расписания РТУ МИРЭА</p>
        </div>
        <div className={styles.group}>
          <label>👋🏻 Введите вашу учебную группу</label>
          <div className={styles.input}>
            <div className={styles.box}>
              <input
                type="text"
                placeholder="ИКБО-01-20"
                autoFocus={true}
                onFocus={onFocus}
                onBlur={onBlur}
                value={groupValue}
                onChange={(e) => setGroupValue(e.target.value)}
              />
              <div className={styles.select}>
                <Selector
                  isOpen={focused}
                  variants={variants}
                  onChange={(value) => setGroupValue(value)}
                />
              </div>
            </div>
            <button
              className={styles.set}
              disabled={!isGroupValid}
              onClick={handleGroupSet}
            >
              Выбрать
            </button>
          </div>
        </div>
        <hr />
        <a
          href="https://github.com/saizaax/studify"
          className={styles.contribute}
        >
          <p>Contribute on GitHub</p>
          <GitHubIcon width={20} height={20} />
        </a>
      </div>
    </div>
  )
}

export { GroupPage }
