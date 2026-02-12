import { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';
import {
  collection, query, where, orderBy,
  addDoc, onSnapshot, serverTimestamp,
  deleteDoc, doc, getDocs
} from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { FaGoogle, FaHeart, FaSignOutAlt, FaTrash } from 'react-icons/fa';

export default function Comments({ articleSlug }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!articleSlug) return;

    // Загружаем комментарии
    const q = query(
      collection(db, 'comments'),
      where('articleId', '==', articleSlug),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeComments = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setComments(commentsData);
      setLoading(false);
    }, (error) => {
      console.error('Ошибка загрузки комментариев:', error);
      setLoading(false);
    });

    // Загружаем лайки
    const likesRef = collection(db, 'likes');
    const likesQuery = query(likesRef, where('articleId', '==', articleSlug));
    const unsubscribeLikes = onSnapshot(likesQuery, (snapshot) => {
      setLikes(snapshot.size);
      if (user) {
        const userLike = snapshot.docs.find(doc => doc.data().userId === user.uid);
        setUserLiked(!!userLike);
      }
    });

    const unsubscribeAuth = auth.onAuthStateChanged(setUser);

    return () => {
      unsubscribeComments();
      unsubscribeLikes();
      unsubscribeAuth();
    };
  }, [articleSlug, user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    try {
      await addDoc(collection(db, 'comments'), {
        articleId: articleSlug,
        text: newComment,
        userName: user.displayName || 'Аноним',
        userPhoto: user.photoURL || '',
        userId: user.uid,
        createdAt: serverTimestamp()
      });
      setNewComment('');
    } catch (error) {
      console.error('Ошибка отправки:', error);
    }
  };

  const handleLike = async () => {
    if (!user) {
      handleLogin();
      return;
    }

    try {
      const likesRef = collection(db, 'likes');
      const q = query(likesRef,
        where('articleId', '==', articleSlug),
        where('userId', '==', user.uid)
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        await addDoc(likesRef, {
          articleId: articleSlug,
          userId: user.uid,
          createdAt: serverTimestamp()
        });
      } else {
        await deleteDoc(doc(db, 'likes', snapshot.docs[0].id));
      }
    } catch (error) {
      console.error('Ошибка лайка:', error);
    }
  };

  const deleteComment = async (commentId) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'comments', commentId));
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Загрузка комментариев...</div>;
  }

  return (
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-amber-100">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition ${
            userLiked ? 'text-rose-500' : 'text-gray-400 hover:text-rose-500'
          }`}
        >
          <FaHeart className="text-2xl" />
          <span className="font-medium">{likes}</span>
        </button>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" />
              <span className="text-sm text-gray-700">{user.displayName}</span>
            </div>
            <button onClick={handleLogout} className="text-gray-500 hover:text-amber-600">
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
            <FaGoogle /> Войти
          </button>
        )}
      </div>

      {user && (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ваш комментарий..."
            className="w-full p-4 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            rows="3"
          />
          <div className="flex justify-end mt-2">
            <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition">
              Отправить
            </button>
          </div>
        </form>
      )}

      <div className="space-y-6">
        <h3 className="font-serif text-xl font-bold">Комментарии ({comments.length})</h3>

        {comments.map(comment => (
          <div key={comment.id} className="flex gap-4">
            <img src={comment.userPhoto} alt={comment.userName} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{comment.userName}</span>
                {user && user.uid === comment.userId && (
                  <button onClick={() => deleteComment(comment.id)} className="text-gray-400 hover:text-red-500">
                    <FaTrash size={14} />
                  </button>
                )}
              </div>
              <p className="text-gray-700 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}