function Event() {
    function handleClick(){
        console.log('Button is clicked')
    }
  return (
    <div>
        <h2>This is from Event Component</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Event