


// const h1= document.createElement("h1");

// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)


//JSX

const page = (
    <div>
        <img src="./index.jpeg" width="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <l1>Its maintained by Facebook</l1>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        
    </div>
)
ReactDOM.render(page, document.getElementById("root"));