export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	/* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false; 
	/* eslint-enable no-unused-vars */
  }

  return [task, task2];
}
