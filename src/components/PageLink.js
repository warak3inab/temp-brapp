import React from 'react'

export const PageLink = ({link,  itemClass}) => {
  return (
    <li>
        <a key={link.id} href={link.href} className={itemClass}> {link.text} </a>
    </li>
  )
}

// import React from 'react'

// export const PageLink = ({id, href, text, itemClass}) => {
//   return (
//     <li>
//         <a key={id} href={href} className={itemClass}> {text} </a>
//     </li>
//   )
// }
