import './App.css';

function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeNode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}
function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read' + t.id}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeNode(event.target.id);
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }
    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}
function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const topics = [
        { id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language.' },
        { id: 2, title: 'CSS', body: 'CSS is design.' },
        { id: 3, title: 'JavaScript', body: 'JavaScript is for interactive.' },
    ];
    return (
        <div>
            <Header
                title="WEB"
                onChangeNode={() => {
                    alert('Header');
                }}
            ></Header>
            <Nav
                topics={topics}
                onChangeNode={(id) => {
                    alert(id);
                }}
            ></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
