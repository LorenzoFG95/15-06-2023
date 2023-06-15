import './index.css'

const Title = ({text = "titolo non fornito"}) =>{
    return(
<h1 className='todo_title'>{text}</h1>)
}

export default Title