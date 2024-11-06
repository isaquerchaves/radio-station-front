import Image from "next/image";

interface QueueItemsProps {
  id: string | number;
  order: number;
  musicName: string;
  image: string;
  musicLink: string;
  musicAuthor: string;
  musicDuration: string;
}

const QueueItem = ({
  id,
  order,
  musicName,
  image,
  musicAuthor,
  musicDuration,
}: QueueItemsProps) => {
  return (
    <div key={id} className="w-full">
      {order === 1 ? (
        <div className="flex flex-col items-start">
          <h4>Tocando agora</h4>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row items-center">
              <div className="w-[77px] h-[77px] flex items-center">
                <Image
                  src={image}
                  alt={musicName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-[80%] max-h-[80%]"
                />
              </div>

              <div className="flex flex-col items-start justify-around">
                <p className=" text-lg text-white">{musicName}</p>
                <p>{musicAuthor}</p>
              </div>
            </div>

            <p className="text-white">{musicDuration}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row items-center">
              <div className="w-[77px] h-[77px] flex items-center">
                <Image
                  src={image}
                  alt={musicName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-[80%] max-h-[80%]"
                />
              </div>

              <div className="flex flex-col items-start justify-around">
                <p className=" text-lg text-white">{musicName}</p>
                <p>{musicAuthor}</p>
              </div>
            </div>

            <p className="text-white">{musicDuration}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueueItem;
