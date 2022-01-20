export const isNeededAnUpdate = (last_update_unix,
	minutesSinceLastUpdate = null,
	secondsSinceLastUpdate = null
) => {
	let timeSinceLastUpdate;
	const one_minute_unix = 60;
	if (!!secondsSinceLastUpdate) {
		timeSinceLastUpdate = last_update_unix + secondsSinceLastUpdate;
	} else if (!!minutesSinceLastUpdate) {
		const convertedInSeconds = minutesSinceLastUpdate * one_minute_unix;
		timeSinceLastUpdate = last_update_unix + convertedInSeconds;
	} else {
		const minutes_to_update = 5;
		const convertedInSeconds = minutes_to_update * one_minute_unix;
		timeSinceLastUpdate = last_update_unix + convertedInSeconds;
	}
	const isTimePassedFromLastUpdate = Date.now() < timeSinceLastUpdate;
	return isTimePassedFromLastUpdate;
};


