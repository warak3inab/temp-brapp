import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import books from './books'
import Book from './Book'

let BookList = () => {
  
  let displayValue = (t) => {
    console.log('Book ID: ' + t)
  }

  let getBook = (id) => {
    let book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <>
    <h1>amazon best sellers</h1>
    <article className='bookList'>
      {books.map((book, index) => {
        return (<div>
          <Book {...book} key={book.id} getBook={getBook} number={index}/>
          </div>
        )
      })}
    </article>
    </>
  )
}

// let BookList = () => {
//   return ( //The 'Books' are components
//     <section className='bookList'>
//       <Book author={firstBook.author} title={firstBook.title} image={firstBook.image}/>
//       <Book author={secondBook.author} title={secondBook.title} image={secondBook.image}/>
//       <Book/>
//     </section>
//   )
// }

// let Book = (props) => {
//   let Image = () => <img src='./images/TheWonkyDonkeyImage.jpg' alt='Book Front Cover'/>
//   let Title = 'The Wonky Donkey'
//   let Author = () => <h4 style={authorStyle}>Craig Smith</h4> 
//   return ( 
//     <article className='book'>
//       <Image/>
//       <h3 style={{color:'red'}}>{Title}</h3>
//       <Author/>
//     </article>
//   )
// }

let authorStyle = {
  color: 'blue',
  fontSize: '0.9rem'
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>)

//          ---------------------------------------------
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// function BookList(){
//   return (
//     <React.Fragment>
//       <section className="bookList">
//         {books.map((book) => {
//           let { title, img, author } = book
//           return  <Book book={book}></Book>
//         })}
//       </section>
//     </React.Fragment>
//   )
// }

// let books = [
// {
//   img: "https://m.media-amazon.com/images/P/0241431107.01._SCLZZZZZZZ_SX500_.jpg",
//   title: "One Pan Wonders",
//   author: "Jamie Oliver"
//   },
//   {
//   img: "https://m.media-amazon.com/images/P/B06XYK29NJ.01._SCLZZZZZZZ_SX500_.jpg",
//   title: "The Creakers",
//   author: "Tom Fletcher"
//   }
// ]

// let Book = (props) => {
// //  console.log(props)

//  let {img, title, author} = props.book //Destructuring

//   return <article className='book'>
//     <h3>{title}</h3>
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem'}}>{author}</h4>
//     <img src={img} alt=""/>
//   </article>
// }

// ReactDOM.render(<BookList/>, document.getElementById('root'))

//          ---------------------------------------------
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// function Greeting(){
//   return (
//     <div>
//       <p>
//         Ullamco Lorem eiusmod consectetur nulla consectetur enim ullamco commodo ea laborum voluptate. Eu pariatur aliquip aliqua ea velit cillum ipsum ut sunt eiusmod pariatur ex. Proident non anim laborum anim. Voluptate qui esse ex quis eiusmod veniam reprehenderit aliquip deserunt anim tempor et.
//       </p>
//       <CompOne/>
//       <CompTwo/>
//   </div>
// )
//   // return React.createElement('p',{},'Voluptate reprehenderit ex incididunt dolor amet nostrud sit eiusmod nisi cillum minim laboris quis.')
// }

// let CompOne = () => {
//   return <p>This is a test</p>
// }
// let CompTwo = () => <p>This is another test</p>

// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Greeting/>)

// export default Greeting
//          ---------------------------------------------

// /*
// - You can destructure by declaring a variable within the object and equalling it to the props you want or you can destructure by writing the destructured props within the instantiation of the object you are destructuring or you can just use "props.'whatever'"
// - The "children" tag is used to add the data between the opening ang closing JSX tags.
// - 
// */