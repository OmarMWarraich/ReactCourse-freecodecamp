


// const h1= document.createElement("h1");

// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)


//JSX
const nav = 
    <nav>
        <h1>Ovatech</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Content</li>
        </ul>
    </nav>
ReactDOM.render(
    nav ,
         document.getElementById("root"))