import { endAdventure } from '../..';
import { askQuestion, clear, print } from '../ui/console';
import { attendATeaParty } from '../chapter_3/chapter_3_tea_party';

const EXPRESSIONS = [
	'☹ Frown ☹',
	'🙂 Smile 🙂',
	'😁 Grin 😁',
	'😶 Blank Face 😶',
	'😡 Angry Face 😡',
] as const; // 💡 CURIOUS - see activity_2.md for explanations
type FacialExpression = typeof EXPRESSIONS[number];

class CheshireCat {
	name: string = 'The Cheshire Cat';
	expression: FacialExpression = '☹ Frown ☹';
}

export function meetTheCheshireCat(): void {
	clear(true);

	const theCat = new CheshireCat();
      
	const expressions = [
		'☹ Frown ☹',
		'🙂 Smile 🙂',
		'😁 Grin 😁',
		'😶 Blank Face 😶',
		'😡 Angry Face 😡',
	] as const;
	type FacialExpression = typeof expressions[number];
	const expression = new CheshireCat();
	switch(theCat.expression) {
		case '☹ Frown ☹':
		  // Handle frown expression
		  break;
		case '🙂 Smile 🙂':
		  // Handle smile expression
		  break;
		case '😁 Grin 😁':
		  // Handle grin expression
		  break;
		case '😶 Blank Face 😶':
		  // Handle blank face expression
		  break;
		case '😡 Angry Face 😡':
		  // Handle angry face expression
		  break;
		default:
		  // Handle other or unknown expressions
		  break;
	  }
	print(
		`You can see ${theCat.name}. A wide ${theCat.expression} is hovering in the air.`
	);

	if (theCat.expression === '😁 Grin 😁') {
		print(
			`🥳 The cat allows you to continue onwards. There is the sound of a party in the distance... 🥳 `
		);
		return askQuestion('Press ENTER to continue! ', attendATeaParty);
	} else {
		print(`😱 The cat will not allow you to pass. 😱 `);
		return endAdventure();
	}
}
