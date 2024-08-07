import { json, LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({params}: LoaderFunctionArgs) => {
    if (!params.parcel) {
        throw new Error('Missing params.parcel');
    }

    const errorMessage = await validateParcelNumber(params.parcel);

    return json({
        value: params.parcel,
        isValid: !!errorMessage,
        error: errorMessage
    })
}

/**
 * Check if a parcel number is valid
 * 
 * @returns `null` if the number is valid, or an error message describing the issue
 */
const validateParcelNumber = async (parcelNumber: string): Promise<string | null> =>  {
    const match = parcelNumber.match(/^([0-9]{3})-([0-9]{3})-([0-9]{3})$/);

    // Simulate a 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1_000))

    if (!match) {
        return 'Incorrect format';
    }

    for (const segment of parcelNumber.split('-')) {
        if (parseInt(segment) % 2 != 1) {
            return 'Parcel segments must be odd numbers'
        }
    }

    return null;
}