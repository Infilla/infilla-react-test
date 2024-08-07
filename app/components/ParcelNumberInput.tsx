export interface ParcelNumberInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

/**
 * Controlled input for editing a parcel number. 
 */
export const ParcelNumberInput: React.FC<ParcelNumberInputProps> = ({
  value,
  onChange
}: ParcelNumberInputProps) => {
  return (
    <div>
      <input type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Parcel number"
        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2"/>
    </div>
  );
}
