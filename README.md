# React Combobox Component

The `Combobox` component provides an interactive and accessible dropdown for selecting items from a static list of suggestions. It supports both mouse and keyboard interactions, ensuring a seamless user experience.

## Usage

```typescript
const SUGGESTIONS: SuggesstionData[] = [
  { id: '1', label: 'Fan' },
  { id: '2', label: 'Apple' },
  { id: '3', label: 'Banana' },
  { id: '4', label: 'Cat' },
  { id: '5', label: 'Dog' },
  { id: '6', label: 'Elephant baby' },
];

function App() {
  function selectHandler(id: string) {
    console.log('Selected ID:', id);
  }

  return (
    <div style={{ padding: '100px' }}>
      <Combobox suggestionList={SUGGESTIONS} onSelect={selectHandler} />
    </div>
  );
}

```

## Props

The `Combobox` component accepts the following props:

1.  `suggestionList: SuggesstionData[]`

    - An array of suggestion objects, each containing an `id` and a `label`.

      ```typescript
      type SuggesstionData = {
        id: string;
        label: string;
      };
      ```

2.  `onSelect: (id: string) => void`

    - A callback function that is triggered when a suggestion is selected. The function receives the `id` of the selected suggestion.

## Characteristics

The Combobox component includes the following features:

- Static List of Data: The suggestions are provided as a static list via the suggestionList prop.

- Dropdown on Typing: As the user types, a dropdown with matching suggestions will appear.

- Dropdown Closing: The dropdown can be closed by clicking outside the combobox or by pressing the Escape key.

- Keyboard Navigation:

  - ArrowDown: Navigate to the next suggestion.

  - ArrowUp: Navigate to the previous suggestion.

  - Enter: Select the highlighted suggestion.
