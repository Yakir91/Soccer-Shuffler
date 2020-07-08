const initialPlayersArray= [
	{playerName: 'Yakir'},
	{playerName: 'Ben'},
	{playerName: 'Elad'},
	/*{playerName: 'Garty'},
	{playerName: 'Yossi'},	
	{playerName: 'Ofir'}*/
];

const historyMatchesArray = [];
const maxMatchesNumber = 3 //!initialPlayersArray;
function shuffle() {

	const matchesArray = [];
	var copyArray = [...initialPlayersArray]; // initialPlayersArray.slice();

	if (historyMatchesArray.length >= maxMatchesNumber) {
		console.log('all matched')
		return;
	}
			

	while (copyArray.length > 1) {
	
		const firstRandomIndex = Math.floor(Math.random() * copyArray.length); // 2

		const firstPlayer = copyArray[firstRandomIndex]
		
		const preValue = copyArray[firstRandomIndex]

		copyArray[firstRandomIndex] = copyArray[copyArray.length - 1]

		copyArray[copyArray.length - 1] = preValue;

		const secondRandomIndex = Math.floor(Math.random() * (copyArray.length - 1)); // 4

		const secondPlayer = copyArray[secondRandomIndex];
		// Match object
		var newMatch = {firstName: firstPlayer.playerName, secondName: secondPlayer.playerName};

		const foundExistingMatch = historyMatchesArray.find((existingMatch) => 
			((existingMatch.firstName === newMatch.firstName) && (existingMatch.secondName === newMatch.secondName)) ||
			((existingMatch.secondName === newMatch.firstName) && (existingMatch.firstName === newMatch.secondName)));

		if (!!foundExistingMatch) {
			console.log(`Match already exists: ${newMatch.firstName} VS. ${newMatch.secondName}`)
		}

		else {
			historyMatchesArray.push(newMatch);
			matchesArray.push(newMatch);
			
			const firstPlayerIndex = copyArray.findIndex(item => item.playerName === firstPlayer.playerName)

			copyArray.splice(firstPlayerIndex,1); 

			const secondPlayerIndex = copyArray.findIndex(item => item.playerName === secondPlayer.playerName)

			copyArray.splice(secondPlayerIndex,1);
			if (historyMatchesArray.length >= maxMatchesNumber) {
				console.log('all matched')
				//break;

			} else {
				
			}

		}

		

	}
	console.log('Match Results:');

	matchesArray.map(match => console.log(`${match.firstName} Vs. ${match.secondName}`)); 

}







