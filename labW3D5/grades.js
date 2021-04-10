const quiz={}
quiz.students=[{sid:10,answers:[{qid:2,ans:'b'},{qid:3,ans:'a'},{qid:1,ans:'b'}]},
{sid:11,answers:[{qid:1,ans:'e'},{qid:2,ans:'a'},{qid:3,ans:'b'}]},

{sid:12,answers:[{qid:3,ans:'b'},{qid:2,ans:'a'},{qid:1,ans:'d'}]}]

quiz.key=[{qid:1,ans:"b"},{qid:2,ans:"a"},{qid:3,ans:'b'}];

 comparator=function(ans1,ans2)
{
    return ans1.qid-ans2.qid
}

quiz.scoreStudent=function(id)
{
    let foundStud=quiz.students.find(s=>s.sid==id);
    foundStud.answers.sort(comparator);
    //console.log(this.key);
    let score=0;
    // console.log(foundStud.answers[0].ans);
    // console.log(foundStud.answers[1].ans);
    // console.log(foundStud.answers[2].ans);
    // console.log(this.key[0].ans);
    // console.log(this.key[1].ans);
    // console.log(this.key[2].ans);
    for(let i=0;i<foundStud.answers.length;i++){
        if(foundStud.answers[i].ans===this.key[i].ans){
        
            score++;
        }
        
    }
    return score;
    
}

quiz.getAverage=function()
{
    let sum=0;
    let count=0
    let avg;
    for(let totAns of quiz.students)
    {
        sum+=this.scoreStudent(totAns.sid)
        count++
    }
    avg=sum/count;
    return avg;
}

console.log(quiz.scoreStudent(10));
console.log(quiz.scoreStudent(11));
console.log(quiz.scoreStudent(12));
console.log(quiz.getAverage());