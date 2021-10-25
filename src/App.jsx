import './styles.scss';
import logo from "./images/logo.png";
import ferris from "./images/ferris-wizard.png"

function App() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="nixum-logo"/>
            </div>
            <div className="content">
                <span>Delivering high-quality Rust solutions for the Blockchain world.</span>
                <span>For inquiries, reach out <a href={"mailto:nixumltd@gmail.com"} className="accent">here</a>.</span>
            </div>
            <div className="mascot">
                <img src={ferris} alt="mascot"/>
            </div>
        </>
    );
}

export default App;
