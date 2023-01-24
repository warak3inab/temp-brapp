let Book = (props) => {
    let { imageSrc, title, author, displayValu, id, getBook, number } = props
    let getSingleBook = () => {
      getBook(id)
    }
    return (
      <article className='book'>
        <img src={imageSrc}/>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <span className='number'>{`#${number + 1}`}</span>
        <button type='button' onClick={getSingleBook} className='btnEvent'>Click me!</button>
      </article>
    )
  }

export default Book