const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('GradeTable Scenario', () => {
  it('When the grade given is not a number, then the result will return false', () => {
  	//Arange
  	let grade = 'a';
  	//Act
  	let result = gradeClassifier(grade);
  	//Assert
  	expect(result).toBe(false)

  });

  it('When the grade given is over 100, then the result will return false', () => {
  	//Arrange
  	let grade = 120;
  	//Act
  	let result = gradeClassifier(grade);
  	//Assert
  	expect(result).toBe(false)

  });

  it('When the grade given is below 0, then the result will return false', () => {
  	//Arrange
  	let grade = -25;
  	//Act
  	let result = gradeClassifier(grade);
  	//Assert
  	expect(result).toBe(false)
  });

  it('When the grade given is between 0-100, then the result will return corresponding letter grade and description', () => {
  	//Arrange
  	let grade = 99;
  	//Act
  	let result = gradeClassifier(grade);
  	//Assert
  	if(grade>=95.00&&grade<=100){
  		expect(result.letter).toBe('O');
        expect(result.Description).toBe('Outstanding'); 
    }
    if(grade>=90.00&&grade<=94.99){
    	expect(result.letter).toBe('V');
        expect(result.Description).toBe('Very Good'); 
    }    
    if(grade>=85.00&&grade<=89.99){
    	expect(result.letter).toBe('G');
        expect(result.Description).toBe('Good'); 
    }
    if(grade>=80.00&&grade<=84.99){
    	expect(result.letter).toBe('S');
        expect(result.Description).toBe('Satisfactory'); 
    }    
    if(grade>=75.00&&grade<=79.99){
    	expect(result.letter).toBe('N');
        expect(result.Description).toBe('Needs Improvement'); 
    }    
    if(grade>=0&&grade<=74.99){
    	expect(result.letter).toBe('D');
        expect(result.Description).toBe('Did not Meet Expecation'); 
    }    
   
  });
});
