import { Quiz } from "../../types"

type QuizAlternativeProps = {
    title: string; 
    type: "default" | "correct" | "incorrect"; 
    onSelect: (option: string) => void; 
    selected: boolean;
}

export default QuizAlternativeProps