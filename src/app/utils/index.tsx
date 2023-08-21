export const DAY_NAMES: { [key: number]: string; } = Object.freeze({
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export const toDate = (dt: number) => {
    return new Date(dt * 1000);
};

export const toDayNumber = (dt: number): number => {
    const d = new Date(dt * 1000);
    // Sunday - Saturday : 0 - 6
    let day = d.getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    day = day === 0 ? 7 : day;

    return day;
};

export const toDayName = (dt: number): string => {
    const day = toDayNumber(dt);
    return DAY_NAMES[day];
};

export const toMonthName = (dt: number): string => {
    const date = toDate(dt);
    return months[date.getMonth()];
};