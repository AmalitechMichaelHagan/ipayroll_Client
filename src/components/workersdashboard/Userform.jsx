import Swal from 'sweetalert2';
import "./Userform.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate } from "react-router-dom";


export default function Userform() {
    const { register } = useForm();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ssnitNumber, setSsnitNumber] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [workstartDate, setWorkstartdate] = useState('')
    const [rank, setRank] = useState('');
    const [admin, setAdmin] = useState(false);

    const handleChange = () => {
        setAdmin(!admin);
      };

    const postData = e => {
        e.preventDefault();
        let myData = {
            "firstname": firstName,
            "surname": lastName,
            "date_of_birth": "1997-08-07",
            "gender": gender,
            "email": email,
            "department": department,
            "snnit_number": ssnitNumber,
            "work_start_date": workstartDate,
            "phone_number":phoneNumber,
            "rank": rank,
            "admin_role":admin
        }

        console.log(myData)

        

        axios({
            method: 'post',
            url: 'http://localhost:9000/employees/send',
            data: myData,
            headers: { 'Authorization': 'Bearer ...' }
        });

        Swal.fire(
            'Done',
            'Employee will receive a Login Password for their account',
            'success'
          )

          setFirstName('')
          setLastName('')
          setGender('')
          setEmail('')
          setDepartment('')
          setPhoneNumber('')
          setSsnitNumber('')
          setWorkstartdate('')
          setRank('')
          setAdmin(false)

    }

    return (
        <div>
            <form className='form-style' onSubmit={postData}>
              <h1 className='title'> Add New Employees </h1>
              <div className="emplo-form">
                <input {...register("firstName")} placeholder="Enter FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input {...register("lastName")} placeholder="Enter LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input {...register("email")} placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input {...register("phonenumber")} placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input {...register("ssnitNumber")} placeholder="Enter SSnit Number" value={ssnitNumber} onChange={(e) => setSsnitNumber(e.target.value)} />
             </div>
             <div className="emplo-form">
                <select {...register("gender")} onChange={(e) => setGender(e.target.value)}>
                    <option>Select Gender</option>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Others'}>Others</option>
                </select>
                <input {...register("department")} placeholder="Enter Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <input {...register("workstartDate")} placeholder="Enter Start Date" value={workstartDate} onChange={(e) => setWorkstartdate(e.target.value)} />
                <select {...register("rank")} onChange={(e) => setRank(e.target.value)}>
                    <option>Select Rank</option>
                    <option value={'Level 1'}>Level 1</option>
                    <option value={'Level 2'}>Level 2</option>
                    <option value={'Level 3'}>Level 3</option>
                </select>

               <div className="check">
                <label>
                Admin Rights
                </label>
                  <input
                    className="box"
                    type="checkbox"
                    checked={admin}
                    onChange={handleChange}
                    />
                </div>
                <input type="submit" onClick={() => {
          Navigate("/user")
        }}  className="login-button"/>

</div>
            </form>

        </div>
    );
}
