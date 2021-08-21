import { render } from 'react-dom';
import { ExamResult } from '../ExamResult';

export function goToExamResult() {
	render(<ExamResult />, document.getElementById('root'));  
}

export default goToExamResult;