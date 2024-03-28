import './App.css'


function Body() {
  return <div className="card">
    <h1>Give Me<br></br>Your Info:</h1>
    <div><div>First:</div><input id ="first" type="text"/></div>
    <div><div>Last:</div><input id ="last" type="text" /></div>
    <div> <div>Email:</div><input id ="email" type="text" /></div>
    <div> <div>Number:</div><input type="tel" id ="number"/></div>
    <div><button onClick={TextContent}>SUBMIT</button></div>
    </div>
}

function TextContent() {
  const first = document.getElementById('first').value;
  const last = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  
  const TextContent = `${first}, ${last}, ${email}, ${number},`;
  
  const blob = new Blob([TextContent], { type: 'text/csv' });

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "info.txt";
  link.click();
}

export { Body, TextContent }