export const getDateFormat = (date) => `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`;

export const getMapping = (primary, secondary) => {
    if ( secondary.length > 0 ) {
        const combinedArray = [];

        primary.forEach(originElement => {
            secondary.forEach(returnElement => {
                const originDate = new Date(originElement.arrival),
                    departureDate = new Date(originElement.departure);

                if ( originDate >= departureDate ) {
                    combinedArray.push(Object.assign({}, originElement, { returningDetails: returnElement } ));
                }
                
            });
        });

        return combinedArray;
    }
    else {
        return primary;
    }
}

