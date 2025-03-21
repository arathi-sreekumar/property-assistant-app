import { useEffect, useState } from "react"
import { EditableInputUI, EditableText, EditableTextIconWrapper } from "./EditableInput.css"
import { Input } from "../Input"
import { CheckCircle, PenCircle } from "../../icons"
import { IconButton } from "../IconButton"
import { UnitTypes } from "../../../types/state"
import { getValueWithUnit } from "../../../utils/unitPosition"
import { Select } from "../Select"
import { SelectOptionType } from "../../../types/form"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export type FieldState = {
  unit: UnitTypes
  value: string | number
}
type OwnProps = {
  onSave: (fieldValues: FieldState) => void
  value: number | string
  unit: UnitTypes,
  additionalInfo?: string
  unitOptions?: Array<SelectOptionType>,
  getValueForUnitChange?: (fieldValues: FieldState) => number
}
type Props = InputProps & OwnProps

export const EditableInput = ({
  onSave,
  value,
  additionalInfo = '',
  unit,
  unitOptions,
  getValueForUnitChange,
  ...rest
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [unitValue, setUnitValue] = useState(unit)

  useEffect(() => {
    setUnitValue(unit)
    setInputValue(value)
  }, [unit, value])

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      save()
    }
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.valueAsNumber)
  }

  const save = () => {
    const fieldValues = {
      unit: unitValue,
      value: inputValue
    }
    onSave(fieldValues)
    setIsEditing(false)
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnitValue = event.target.value
    setUnitValue(newUnitValue as UnitTypes)

    if (getValueForUnitChange) {
      const fieldValues = {
        unit: newUnitValue as UnitTypes,
        value: inputValue
      }
      const newInputValue = getValueForUnitChange(fieldValues)
      setInputValue(newInputValue)
    } else {
      console.log('no method specified')
      // todo: handle options available and no conversion method case
    }

  }

  const showUnitSelection = () => {
    if (unitOptions) {
      const options = unitOptions.map(option => (
        <option
          value={option.optionValue}
          selected={option.optionValue === unitValue}
        >
          {option.displayValue}
        </option>
      ))
      return (
        <Select onChange={handleUnitChange} width='50px'>
          {options}
        </Select>
      )
    }

    return null
  }

  const valueWithUnit = getValueWithUnit(unitValue, inputValue as string)

  return (
    <EditableInputUI>
      {
        isEditing
          ? (<>
            {showUnitSelection()}
            <Input
              value={inputValue}
              onChange={onInputChange}
              onBlur={save}
              onKeyDown={keyDownHandler}
              {...rest}
            />
            <IconButton onClick={save}>
              <CheckCircle />
            </IconButton>
          </>)
          : (
            <EditableTextIconWrapper>
              <EditableText onClick={startEditing}>
                {`${valueWithUnit} ${additionalInfo}`}
              </EditableText>
              <IconButton onClick={startEditing}>
                <PenCircle />
              </IconButton>
            </EditableTextIconWrapper>
          )
      }
    </EditableInputUI>
  )
}