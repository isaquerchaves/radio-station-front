import { Separator } from "../ui/separator";
import QueueItem from "./QueueItem";

const Queue = () => {
  const queue = [
    {
      id: '1',
      order: 1,
      musicName: 'Musica 1',
      image: '/album.jpg',
      musicLink: 'musica-1.com.br',
      musicAuthor: 'Isaque Chaves',
      musicDuration: '00:03:23'
    },
    {
      id: '2',
      order: 2,
      musicName: 'Musica 2',
      image: '/album.jpg',
      musicLink: 'musica-2.com.br',
      musicAuthor: 'Ana Silva',
      musicDuration: '00:02:45'
    },
    {
      id: '3',
      order: 3,
      musicName: 'Musica 3',
      image: '/album.jpg',
      musicLink: 'musica-3.com.br',
      musicAuthor: 'João Souza',
      musicDuration: '00:04:00'
    },
    {
      id: '4',
      order: 4,
      musicName: 'Musica 4',
      image: '/album.jpg',
      musicLink: 'musica-4.com.br',
      musicAuthor: 'Maria Oliveira',
      musicDuration: '00:03:10'
    },
    {
      id: '5',
      order: 5,
      musicName: 'Musica 5',
      image: '/album.jpg',
      musicLink: 'musica-5.com.br',
      musicAuthor: 'Carlos Almeida',
      musicDuration: '00:05:15'
    }
  ];
  return ( 
    <div className="flex flex-col items-start">
      {queue.map((music) => (
        <QueueItem key={music.id} {...music} />  
      ))}
      <Separator />
    </div>
   );
}
 
export default Queue;