const calculateStylePoints = (styleNotes) => {

    let maxNotes = Math.max(...styleNotes);
	let minNotes = Math.min(...styleNotes);
    
    return styleNotes.reduce((a, b) => a + b) - maxNotes - minNotes;
    
  };

  module.exports = calculateStylePoints;