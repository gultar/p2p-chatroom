
//Connected users contact info are store in localStorage to be
//displayed on the sidebar

//Retrieves the users objects
const getConnectedUsersFromStorage = () =>{
    let connectedUsersString = localStorage.getItem('connectedUsers')
    try{
        let connectedUsers = JSON.parse(connectedUsersString)
        return connectedUsers;
    }catch(e){
        console.log(e)
        return
    }
}

//Users are stored in an object, to facilitate access and modification
const saveConnectedUsersToStorage = (connectedUsersObject) =>{
    if(!connectedUsersObject && typeof connectedUsersObject !== 'object') 
      throw Error('Connected users need to be an object')
    const connectedUsersString = JSON.stringify(connectedUsersObject)
    localStorage.setItem('connectedUsers', connectedUsersString)
}

export {getConnectedUsersFromStorage, saveConnectedUsersToStorage}