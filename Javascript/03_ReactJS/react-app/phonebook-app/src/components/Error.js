const Notification = ({message, classCSS}) =>{
    if (message===null) {
        return null
    } else {
        console.log("message touched." + classCSS);
        return(
            <div className={classCSS}>
                {message}
            </div>
        )
    }
}

export default Notification