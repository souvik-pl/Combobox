export type SuggesstionData = {
  id: string;
  label: string;
};

export type ComboboxProp = {
  suggestionList: SuggesstionData[];
  onSelect: (id: string) => void;
};
