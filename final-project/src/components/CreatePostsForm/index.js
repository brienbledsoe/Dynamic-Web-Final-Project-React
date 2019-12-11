
import React, {useState, useEffect} from "react"
import axios from 'axios';
export default function CreatePosts({uid}){
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);
  const [error,isError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('')
    function submitApi(e) {
      setSubmitting(true)
      e.preventDefault(e);
      let name = e.currentTarget.name.value
      let university = e.currentTarget.university.value
      let salary = e.currentTarget.salary.value
      let year = e.currentTarget.year.value
      let major = e.currentTarget.major.value
      let question = e.currentTarget.question.value

      axios.post('https://dynamic-web-final-project.herokuapp.com/posts', {
        currYear: year,
        salary: salary,
        name: name,
        university: university,
        currMajor: major,
        userQuestion: question

      }).then(function(res) {
        console.log(res);
        if(res.status !== 200){
            setSubmitting(false);
            isError(true);
            setErrorMessage(`${res.status}: ${'Error'}`);
        }else{
          isError(false);
          setSubmitting(true);
        }

      }).catch(function(error) {
        console.log("Error: ",error)
        return error;
      });
    }


    return (
      <div>
        <form onSubmit={e => submitApi(e)}>
          {errors && <p>Errors: {errors} </p>}
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="enter name here" />
          <label htmlFor="university">What University Do You Attend</label>
          <input type="text" name="university" placeholder="enter your university" />
          <label htmlFor="salary">Enter Desired Salary</label>
          <input type="number" name="salary" placeholder="enter your desired Salary"/>
          <label htmlFor="year">Freshman, Sophomore, Junior, Senior, Graduated</label>
          <input type="text" name="year" placeholder="enter current year in college"/>
          <label htmlFor="major">Your major</label>
          <input type="text" name="major" placeholder="enter your major"/>
          <label htmlFor="question">What would you like to know?</label>
          <input type="text" name="question" placeholder="enter your question"/>
          <button disabled={submitting}>Submit Form</button>
          {submitting && <p>We're submitting</p>}
        </form>
      </div>
    );
  }
