const subtractMonthsFromCurrentDate = (
    currentDate: Date,
    numberOfSubtractMonth: number,
) => {
    currentDate.setMonth(currentDate.getMonth() - numberOfSubtractMonth);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const date = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
};

const addOneDayWithCurrentDate = (currentDate: Date) => {
    currentDate.setDate(currentDate.getDate() + 1);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const date = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
};

export const dateHelpers = {
    subtractMonthsFromCurrentDate,
    addOneDayWithCurrentDate,
};
