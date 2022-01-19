import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';


export function EditorPage() {

   return <main className='editor-page flex'>
      <EditorSidebar />
      <EditorBoard />
   </main>
}