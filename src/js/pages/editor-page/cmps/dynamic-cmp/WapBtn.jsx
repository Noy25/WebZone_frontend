import { FaTrash } from 'react-icons/fa';


export function WapBtn(props) {
   const { cmp, onSetCurrElement, onRemoveElement, style } = props

   if (cmp.isPublished) {
      return <a style={style} href={cmp.url}>{cmp.txt}</a>
   }

   return <div>
      <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##'>{cmp.txt}</a>
      <FaTrash onClick={(ev) => onDeleteElement(ev, cmp)} />
   </div>
}