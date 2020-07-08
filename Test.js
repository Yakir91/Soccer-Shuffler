const playersArray = [
	{playerName: 'Yakir'},
	{playerName: 'Ben'},
	{playerName: 'Elad'},
	{playerName: 'Garty'},
	{playerName: 'Yossi'},	
	{playerName: 'Ofir'},
	{playerName: 'Niv'},
	{playerName: 'Sharir'},
	{playerName: 'Pinki'},
	{playerName: 'Zooka'}

];

const matchesArray = [];
while(playersArray.length > 1) {
let randomIndex = Math.floor(Math.random() * playersArray.length);

const firstPlayer = playersArray.splice(randomIndex, 1)

randomIndex = Math.floor(Math.random() * playersArray.length);

const secondPlayer = playersArray.splice(randomIndex,1);

matchesArray.push({firstName: firstPlayer[0].playerName, secondName: secondPlayer[0].playerName});

}

matchesArray.map(match => console.log(`${match.firstName} Vs. ${match.secondName}`)

); 


