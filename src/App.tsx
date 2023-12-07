import './App.css'
import Blog from './components/Blog'

function App() {

    function Profile() {
        return (
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            />
        );
    }

    
    return (
        <>
            <Blog/>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>

        </>
    )
}

export default App
