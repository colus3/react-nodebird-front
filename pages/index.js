import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []);

  console.error('mainPosts', mainPosts);
  return (
    <div>
      {/* {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>} */}
      {me && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c.createdAt} post={c} />
      ))}
    </div>
  );
};

export default Home;
