import Story from './Story';
import Post from './Post';
import Sidebar from './Sidebar';

export default function Body(){
  return(
          <div className="corpo">
            <div className="esquerda">
              <Story />
              <Post />
            </div>
            <Sidebar />
          </div>
        )
}