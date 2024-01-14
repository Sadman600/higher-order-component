import Avatar from "./components/Avatar/Avatar";
import Select from "./components/Select/Select";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      {/* <Avatar /> */}
      {/* <Users /> */}
      <Select>
        <Select.SelectOption value="volvo">Volvo</Select.SelectOption>
        <Select.SelectOption value="bmw">BMW</Select.SelectOption>
        <Select.SelectOption value="toyots">Toyota</Select.SelectOption>
      </Select>
    </>
  );
}

export default App;
