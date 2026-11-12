// lib/format.ts
// Small helpers for showing numbers and units in Bangla

// 1850 -> "১,৮৫০"
export const toBnPrice = (value: number | string) =>
	Number(value).toLocaleString("bn-BD");

// -2.9 -> "২.৯"  (always positive, one decimal; the ▲/▼ shows the direction)
export const toBnPercent = (value: number | string) =>
	Math.abs(Number(value)).toLocaleString("bn-BD", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1,
	});

// "kg" -> "প্রতি কেজি"
const units: Record<string, string> = {
	kg: "প্রতি কেজি",
	litre: "প্রতি লিটার",
	dozen: "প্রতি ডজন",
	piece: "প্রতি পিস",
};
export const unitLabel = (unit: string) => units[unit] ?? `প্রতি ${unit}`;
