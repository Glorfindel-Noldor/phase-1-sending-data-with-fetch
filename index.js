let user={
    name:'Steve',
    email:'steve@steve.com',
}


function submitData(x){
    x = fetch('http://localhost:3000/users', configurationObject)
    .then(res  =>res.json())
    .then(data =>{
        const newID = data.id;
        const newElement = document.createElement('p');
        newElement.textContent = 'new user id:\t' + newID;
        document.body.appendChild(newElement);
        console.log('data submited', data);
    })
    .catch(error => {
        const noElement = document.createElement('p');
        noElement.textContent = 'no user created:\t' + error;
        document.body.appendChild(noElement);
        console.error('data NOT submited', error)
    })
    return x;
}



const configurationObject = ({
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(user),
});