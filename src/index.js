const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    const gradetable = [{letter: 'O', Description: 'Outstanding'},
                        {letter: 'V', Description: 'Very Good'},
                        {letter: 'G', Description: 'Good'},
                        {letter: 'S', Description: 'Satisfactory'},
                        {letter: 'N', Description: 'Needs Improvement'},
                        {letter: 'D', Description: 'Did not Meet Expecation'},
    ]

    if(grade>100 || grade<0){
        return false
    }
    if(isNaN(grade)){
        return false
    }
    if(grade>=95.00&&grade<=100){
        result = gradetable.find(el => el.letter === "O")
        return {letter: result.letter, Description: result.Description}
    }    
    if(grade>=90.00&&grade<=94.99){
    	result = gradetable.find(el => el.letter === "V")
        return {letter: result.letter, Description: result.Description}
    }    
    if(grade>=85.00&&grade<=89.99){
    	result = gradetable.find(el => el.letter === "G")
        return {letter: result.letter, Description: result.Description}
    }
    if(grade>=80.00&&grade<=84.99){
    	result = gradetable.find(el => el.letter === "S")
        return {letter: result.letter, Description: result.Description}
    }    
    if(grade>=75.00&&grade<=79.99){
    	result = gradetable.find(el => el.letter === "N")
        return {letter: result.letter, Description: result.Description}
    }    
    if(grade>=0&&grade<=74.99){
    	result = gradetable.find(el => el.letter === "D")
        return {letter: result.letter, Description: result.Description}
    }
  }
}

module.exports = functions;
