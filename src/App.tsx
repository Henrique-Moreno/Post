
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, PostType } from "./components/Post";

import styles from './App.module.css';
import './global.css';

export function App() {

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/Henrique-Moreno.png",
        name: 'Henrique Alexandre',
        role: 'Empresario'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera ✌' },
        { type: 'Novo projeto no ar vai la comferir' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-06-24 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: 'Diego Fernades',
        role: 'CTO'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera ✌' },
        { type: 'Novo projeto no ar vai la comferir' },
        { type: 'Link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-06-24 20:00:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: 'Mayk Brito',
        role: 'Educador'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera ✌' },
        { type: 'Novo projeto no ar vai la comferir' },
        { type: 'Link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-06-24 20:00:00')
    },
  ]

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
               post={post}
              />
            )

          })}
        </main>
      </div>

    </>
  )
}

