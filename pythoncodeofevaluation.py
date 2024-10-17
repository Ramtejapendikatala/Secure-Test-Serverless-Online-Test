answers=[
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
def evaluate_answers(student_answers):
    # Correct answers for each question
    correct_answers = [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
    def NoofAnswers(a):
        return a.count(1)
    
    def calculate_score(answers):
        Total = 200
        Score = 0
        details=[]
        quesinfo=""
        for i in range(len(correct_answers)):
            if i >= len(answers):
                continue
            
            answer = correct_answers[i]
            student_answer = answers[i]
            
            Bitscore = 0
            b = NoofAnswers(answer)
            count0 = 0
            Partially = 0

            for j in range(len(answer)):
                if answer[j] == student_answer[j]:
                    if student_answer[j] == 1 and Partially == 0:
                        if b == 1:
                            Bitscore += 20
                        elif b == 2:
                            Bitscore += 10
                        elif b == 3:
                            Bitscore += 6.66
                            if Bitscore==19.98:
                                Bitscore=20
                        elif b == 4:
                            Bitscore += 5
                    else:
                        count0 += 1
                else:
                    if student_answer[j] == 0:
                        count0 += 1
                    elif student_answer[j] == 1:
                        Bitscore = 0
                        Partially = 1
            if Bitscore > 0:
                Score += Bitscore
            elif count0 == 4:
                Score += 0
            else:
                Bitscore -= 10
                Score += Bitscore
            if Bitscore==20:
                    quesinfo=str(i+1)+".Corect Answer : "+str(Bitscore)
                    details.append(quesinfo)

            elif count0==4:
                    Score=Score+Bitscore
                    quesinfo=str(i+1)+".Unattempted : "+str(Bitscore)
                    details.append(quesinfo)

            elif Bitscore==0 and count0<4:
                    Bitscore=Bitscore-10
                    Score=Score+Bitscore
                    quesinfo=str(i+1)+".Wrong Answer : "+str(Bitscore)
                    details.append(quesinfo)

            elif Bitscore<20 and Bitscore>0:
                    Score=Score+Bitscore
                    quesinfo=str(i+1)+".Partially Correct : "+str(Bitscore)              
                    details.append(quesinfo)



            

        percentage = (Score / Total) * 100
        print(Total, Score, percentage,details)

    return calculate_score(student_answers)

evaluate_answers(answers)