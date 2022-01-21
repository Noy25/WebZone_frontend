export function WapBtn(props) {
   const { cmp, onSetCurrElement, style, currElementId } = props

   if (cmp.isPublished) {
      return <div>
         <a style={style} href={cmp.url}>{cmp.txt}</a>
      </div>
   }

   return <div>
      <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##' className={cmp.id === currElementId ? 'edit-active' : ''}>{cmp.txt}</a>
   </div>
}