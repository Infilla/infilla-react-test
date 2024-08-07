export interface ParcelNumberInputProps {}

export const ParcelNumberInput: React.FC<ParcelNumberInputProps> = () => {
    return <input type="text"
        placeholder="Parcel number"
        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2"/>
}
