export interface ParcelNumberInputProps {}

/**
 * Input for editing a parcel number. 
 */
export const ParcelNumberInput: React.FC<ParcelNumberInputProps> = () => {
  return (
    <div>
      <input type="text"
        placeholder="Parcel number"
        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2"/>
    </div>
  );
}
