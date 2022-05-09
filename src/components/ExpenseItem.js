import { useEffect, useState } from 'react';
import './ExpenseItem.css';
function ExpenseItem() {


     const [user, setUser] = useState([]);

    const getData = () => {
         fetch(`https://randomuser.me/api/?nat=us&results=25&page=1`)
         .then((response) => {
             return response.json();
         })
         .then((data) =>{
             console.log(data)
             let takeData = data.results;
             setUser(takeData);
         })

         
    }


    // hook useEffect()
    useEffect(()=> {
        getData();
    },[]);


    return(
        <div className='user-container'>
            <div className='user-details'>
                {user.map(data =>
                    <div className='users'>
                        <div className='id'>{data.id.value.hidden}</div>
                         <img src={data.picture.large} className="img-name" alt='firstimage' />
                         <div className='name'>{data.name.title +' '+ data.name.first +' ' + data.name.last}<br/><br/><span>{data.location.country}</span></div> <br/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExpenseItem;