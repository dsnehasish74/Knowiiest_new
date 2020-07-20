import React from 'react'

function Grade(){
 return(
   <div className="container fade">
   <nav aria-label="breadcrumb">
<ol className="breadcrumb container">
 <li className="breadcrumb-item"><a href="/">Home</a></li>
 <li className="breadcrumb-item active" aria-current="page">Grade</li>
</ol>
</nav>
   <h3 className="heading-text3"> Grading System </h3>
   <hr/>
   <h5 className="heading-text">Evatluation of Theory Courses</h5>
  The evaluation of students' performance in a theory course is a continuous process. A Student’s performance
   in theory papers will be evaluated through Internal Assessment and an End-Semester Examination.
   <h6 className="heading-text2">Examinations</h6>
   <p><li>In any semester, for theory courses there will be mid-semester examinations and end-semester
         examinations, conducted centrally by the Academic Section. Mid-semester examinations will be held
         in the middle of a semester, generally after completion of the first six to seven weeks of study. Endsemester
         examinations will be held after the completion of the course. The dates of such examinations
         will be displayed in the Academic calendar.</li></p>
         <p><li>There will be supplementary examinations for the theory courses in which students have failed. Each
            year, supplementary examinations will be held after the publication of even semester results.
           Supplementary examinations are equivalent to the end-semester examinations and the students can
           retain their internal assessment. </li></p>
           <p><li>In the Summer Term also, for theory papers there will be mid-term examinations and end-term
           examinations, similar to mid-semester and end-semester examinations.</li></p>
           <p><li>The dates all examinations will be displayed in the Academic calendar.</li></p>
   <h6 className="heading-text2">Internal Assessment</h6>
   <p><li>The Internal Assessment has two components – i) performance in mid-semester examination and
             Teacher’s assessment.
     </li></p>
     <p><li>The Teacher’s assessment may have the following components – class tests, quizzes, home
                   assignments, group assignments, viva-voce etc. as per the teacher’s discretion.
     </li></p>
     <h6 className="heading-text2">Weightages</h6>
       <p>
       A typical distribution of relative weightage for the various modes of assessments is mentioned below. The
       course teacher will inform the students about these weightages at the start of the semester.
       </p>
       <li> Mid-semester examination : 30%</li>
       <li> Teacher’s assessment : 20%</li>
       <li> End-semester Assessment : 50%</li>
     <hr/>
     <h5 className="heading-text">Evatluation of Lab Courses</h5>
     <p>
     The assessment in a laboratory course will be based on continuous evaluation of the student’s weekly
performance in laboratory experiments/ work, quality of their reports and a final performance in a semester-end
test that contains experiment/quiz/test/viva-voce. The semester-end test on laboratory sessional will
normally be held a week before the end-semester theory examinations.
       </p>
       <h6 className="heading-text2">Weightages</h6>
       <li>Regular performance in laboratory works : 30%</li>
       <li>Quality of laboratory reports : 30%</li>
       <li>Semester-end test : 20%</li>
       <li>Viva-voce/Teacher’s Assessment : 20%</li>
       <hr/>
       <h5 className="heading-text"> Calculation of CGPA</h5>
         <p>
           Every subject has a credit(C).The grade point one gets in a subject is denoted by grade(G).
           <br/>
           <br/>
           <li>S.G.P.A.(Semester Grade Point Average) : &#8512;(Ci.Gi)/&#8512;(Ci)</li>
           <br/>
           <li>C.G.P.A.(Cumulative Grade Point Average) : &#8512;(Ci.Gi)/&#8512;(Ci)</li>
           <br/>
           Here S.G.P.A. reflects performance of a student in a specific semester whereas C.G.P.A. reflects the overall performance
             of a student throughout all semesters.
           <li>Grade point below 5 in a theory paper leads to supplimentary exam.</li>
           <li>Marks below 50% in a laboratory subject leads to backlog.</li>
         </p>
        <hr/>
   </div>

 );
}

export default Grade;
