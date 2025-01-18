import React, { useState } from 'react';
import Profile from '@/assets/icons/job/profile';
import PhArrowBendUpLeftFill from '@/assets/icons/detailcoin/PhArrowBendUpLeftFill';
import Like from '@/assets/icons/detailcoin/like';
import Dislike from '@/assets/icons/detailcoin/dislike';

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  replies?: Comment[];
}

interface ViewsProps {
  comments: Comment[];
  setReplyingTo: (id: string | null) => void; 
}

export default function Views({ comments, setReplyingTo }: ViewsProps) {
  const [replyingTo, setReplyingToState] = useState<string | null>(null);

  const handleReplyClick = (id: string) => {
    setReplyingToState(id);
    setReplyingTo(id); 
  };

  return (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <div key={comment.id}>
       
          <div className="flex flex-col rounded-[15px] bg-[#FFF8EB] dark:bg-[#242428] w-full px-4 py-3">
            <div className="flex gap-x-3">
              <div className="w-10 h-10 rounded-full mr-3 bg-fourth items-end justify-center flex">
                <div className="text-secondary">
                  <Profile />
                </div>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <span className="text-sm font-semibold text-[#666668]">{comment.name}</span>
                <span className="text-sm font-semibold text-[#8C8C8C]">|</span>
                <span className="text-sm font-semibold text-[#8C8C8C]">{comment.date}</span>
              </div>
            </div>
            <span className="mr-16 mt-4 text-sm font-normal leading-[22px] text-[#666666] dark:text-white">
              {comment.text}
            </span>

   
            <div className="flex gap-x-4 justify-end items-center">
              <div className="flex items-center gap-2">
                <Dislike />
                <span></span>
              </div>

              <div className="flex items-center gap-2">
                <Like />
                <span>1</span>
              </div>

              <div className="flex items-center gap-2" onClick={() => handleReplyClick(comment.id)} >
                <span className="text-xs font-normal text-[#8C8C8C]">پاسخ</span>
                <PhArrowBendUpLeftFill />
              </div>
            </div>
          </div>

          {/* نمایش پاسخ‌ها */}
          {comment.replies &&  (
            <div className="mt-5 flex flex-col gap-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex flex-col rounded-[15px] bg-[#F7F7F7] dark:bg-[#302F34] px-4 py-3 w-[95%] self-end">
                  <div className="flex gap-x-3">
                    <div className="w-10 h-10 rounded-full mr-3 bg-fourth items-end justify-center flex">
                      <div className="text-secondary">
                        <Profile />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                      <span className="text-sm font-semibold text-[#666668]">{reply.name}</span>
                      <span className="text-sm font-semibold text-[#8C8C8C]">|</span>
                      <span className="text-sm font-semibold text-[#8C8C8C]">{reply.date}</span>
                    </div>
                  </div>
                  <span className="mr-16 mt-4 text-sm font-normal leading-[22px] text-[#666666] dark:text-white">
                    {reply.text}
                  </span>

               
                  <div className="flex gap-x-4 justify-end items-center">
                    <div className="flex items-center gap-2">
                      <Dislike />
                      <span></span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Like />
                      <span>1</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-normal text-[#8C8C8C]">پاسخ</span>
                      <PhArrowBendUpLeftFill />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
