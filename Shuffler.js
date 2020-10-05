const initialPlayersArray= [
	{playerName: 'Yakir'},
	{playerName: 'Elad'},
	{playerName: 'Garty'},
	{playerName: 'Yossi'},	
	{playerName: 'Ofir'}
];

const historyMatchesArray = [];

const maxMatchesNumber = 15; // !initialPlayersArray.length 
function shuffle() {

	const matchesArray = [];
	var copyArray = [...initialPlayersArray];

	if (historyMatchesArray.length >= maxMatchesNumber) {
		console.log('all matched')
		return;
	}
			
	while (copyArray.length > 1) {
	
		const firstRandomIndex = Math.floor(Math.random() * copyArray.length); 

		const firstPlayer = copyArray[firstRandomIndex];
		
		const preValue = copyArray[firstRandomIndex];

		copyArray[firstRandomIndex] = copyArray[copyArray.length - 1];

		copyArray[copyArray.length - 1] = preValue;

		const secondRandomIndex = Math.floor(Math.random() * (copyArray.length - 1));

		const secondPlayer = copyArray[secondRandomIndex];
		// Match object
		var newMatch = {firstName: firstPlayer.playerName, secondName: secondPlayer.playerName};

		const foundExistingMatch = historyMatchesArray.find((existingMatch) => { //existingMatch {firstPlayer.playerName, secondPlayer.playerName}
			const condMatch = (((existingMatch.firstName === newMatch.firstName) && (existingMatch.secondName === newMatch.secondName)) ||
			((existingMatch.secondName === newMatch.firstName) && (existingMatch.firstName === newMatch.secondName)));

			return condMatch; // True / False.
		})

		if (!!foundExistingMatch) {
			console.log(`Match already exists: ${newMatch.firstName} VS. ${newMatch.secondName}`);

			const maxPlayerMatches = initialPlayersArray.length -1;
			
			const foundExistingFirstPlayer = historyMatchesArray.map((existingMatch) => {
			const checkExist =((existingMatch.firstName === newMatch.firstName) || (existingMatch.secondName === newMatch.firstName)); 

				if (checkExist) {
					return existingMatch;
				}
				else {
					return null;
				}

			})
			.filter((item) => item);

			if (foundExistingFirstPlayer.length >= maxPlayerMatches) {

				const firstPlayerIndex = copyArray.findIndex(item => item.playerName === firstPlayer.playerName);
				
				copyArray.splice(firstPlayerIndex,1); 
			}

			const foundExistingSecondPlayer = historyMatchesArray.map((existingMatch) => {
			const checkExist =((existingMatch.firstName === newMatch.secondName) || (existingMatch.secondName === newMatch.secondName)); 

				if (checkExist) {
					return existingMatch;
				}
				else {
					return null;
				}

			})
			.filter((item) => item);

			if (foundExistingSecondPlayer.length >= maxPlayerMatches) {
				
				const secondPlayerIndex = copyArray.findIndex(item => item.playerName === secondPlayer.playerName);

				copyArray.splice(secondPlayerIndex,1);
			}
		}

		else {
			historyMatchesArray.push(newMatch);
			matchesArray.push(newMatch);
			
			const firstPlayerIndex = copyArray.findIndex(item => item.playerName === firstPlayer.playerName);

			copyArray.splice(firstPlayerIndex,1); 

			const secondPlayerIndex = copyArray.findIndex(item => item.playerName === secondPlayer.playerName);

			copyArray.splice(secondPlayerIndex,1);

		}

	}

	matchesArray.map(match => console.log(`${match.firstName} VS ${match.secondName}`)); 

}
