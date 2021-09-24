{
	/**
	 * Intersection Type: &
	 */

	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		ID: string;
		work: () => void;
	};

	function internWorker(person: Student & Worker) {
		//모두 접근 가능
		console.log(person.name, person.score, person.ID, person.work);
	}

	internWorker({
		name: 'ellie',
		score: 1,
		ID: 'good day',
		work: () => {},
	});
}
