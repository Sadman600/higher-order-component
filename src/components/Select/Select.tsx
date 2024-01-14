import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);
const Select = ({ children }) => {
  const [selectOption, setSelectOption] = useState("");
  console.log(selectOption);

  return (
    <SelectContext.Provider value={{ selectOption, setSelectOption }}>
      <select
        onChange={(e) => setSelectOption(e.target.value)}
        name="cars"
        id="cars"
      >
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectOption } = useContext(SelectContext);
  const isActiveSelect = selectOption === value;
  return (
    <option
      style={{ color: isActiveSelect ? "tomato" : "seagreen" }}
      value={value}
    >
      {children}
    </option>
  );
};
Select.SelectOption = SelectOption;
export default Select;
