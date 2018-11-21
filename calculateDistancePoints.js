const calculateDistancePoints = (distance, hillSize, kPoint) => {
	
	if (hillSize === 'normal') {
		
		return (kPoint + ((distance - kPoint) * 2));
	}
	if (distance === 'big') {
		
		return (kPoint + ((distance - kPoint) * 1.8));
	}
	if (hillSize === 'mamut') {
		
		return (kPoint + ((distance - kPoint) * 1.2));
	}
	
};

module.exports = calculateDistancePoints;