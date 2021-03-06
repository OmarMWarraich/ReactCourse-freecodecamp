


// const h1= document.createElement("h1");

// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)


//JSX

function Header() {
    return (
        <header>
            <nav className="nav">
            <img src="./index.jpeg" className="nav-logo"/> 
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Content</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>&copy; 2022 Ovadev. All rights reserved. </small>
        </footer>
    )
}

function MainContent() {
    return(    <div>
        
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <l1>Its maintained by Facebook</l1>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        
        
    </div>)
}

function Page () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />

        </div>
    )
}
ReactDOM.render( <Page />, document.getElementById("root"));