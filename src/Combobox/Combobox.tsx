import { ComboboxProp, SuggesstionData } from "./common/common.type";
import styles from "./Combobox.module.css";
import { useRef, useState } from "react";
import useOutsideClick from "./common/useOutsideClick";

function Combobox(props: ComboboxProp) {
  const { suggestionList, onSelect } = props;
  const [list, setList] = useState(suggestionList);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useOutsideClick(ref, clickOutsideHandler);

  function clickOutsideHandler() {
    setIsSuggestionOpen(false);
    setFocusedIndex(null);
  }

  function openSuggestion() {
    setIsSuggestionOpen(true);
  }

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery((event.target as HTMLInputElement).value);

    setIsSuggestionOpen(true);
    if ((event.target as HTMLInputElement).value.length === 0) {
      setList(suggestionList);
      return;
    }

    const updatedList = suggestionList.filter((item) =>
      item.label.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
    );
    setList(updatedList);
  }

  function selectionHandler(item: SuggesstionData) {
    onSelect(item.id);
    setSearchQuery(item.label);
    setIsSuggestionOpen(false);
    setFocusedIndex(null);
  }

  function keyboardNavigationHandler(event: React.KeyboardEvent) {
    switch (event.key) {
      case "ArrowDown":
        if (focusedIndex === null) {
          setFocusedIndex(0);
        } else {
          const index = (focusedIndex + 1) % list.length;
          setFocusedIndex(index);
        }
        break;
      case "ArrowUp":
        if (focusedIndex === null) {
          setFocusedIndex(list.length - 1);
        } else {
          const index = (focusedIndex + list.length - 1) % list.length;
          setFocusedIndex(index);
        }
        break;
      case "Enter":
        if (focusedIndex !== null) selectionHandler(list[focusedIndex]);
        break;
      case "Escape":
        clickOutsideHandler();
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container} ref={ref} onKeyDown={keyboardNavigationHandler}>
      <input
        className={styles.input}
        onClick={openSuggestion}
        onChange={inputChangeHandler}
        value={searchQuery}
      />
      {isSuggestionOpen && (
        <ul className={styles.ul}>
          {list.map((suggestion, index) => (
            <li
              className={focusedIndex === index ? `${styles.li} ${styles.li_focused}` : styles.li}
              key={suggestion.id}
              onClick={() => selectionHandler(suggestion)}
            >
              {suggestion.label}
            </li>
          ))}

          {list.length === 0 && <li className={styles.li_empty}>No Options</li>}
        </ul>
      )}
    </div>
  );
}

export default Combobox;
