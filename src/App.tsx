import Combobox from "./Combobox/Combobox";
import { SuggesstionData } from "./Combobox/common/common.type";

const SUGGESTIONS: SuggesstionData[] = [
  {
    id: "1",
    label: "Fan",
  },
  {
    id: "2",
    label: "Apple",
  },
  {
    id: "3",
    label: "Banana",
  },
  {
    id: "4",
    label: "Cat",
  },
  {
    id: "5",
    label: "Dog",
  },
  {
    id: "6",
    label: "Elephant baby",
  },
];

function App() {
  function selectHandler(id: string) {
    console.log(id);
  }

  return (
    <div style={{ padding: "100px" }}>
      <Combobox suggestionList={SUGGESTIONS} onSelect={selectHandler} />
    </div>
  );
}

export default App;
