import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header'
import { Input } from './src/components/Input'
import { ModalBase } from './src/components/Modal';
import { Posts } from './src/components/Posts';
import { db } from './src/lib/firebase';
import { format } from 'date-fns';

export default function App() {
  const [postsData, setPostsData] = useState<any>();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection('posts').orderBy(`created_at`, `asc`).onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setPostsData(posts);
    });
  }, []);

  const selectImage = () => {
    alert("オサレテル");
  }

  const submit = () => {
    if(text === '') {
      alert('テキストを入力してください');
    } else {
      setOpen(true);
    }
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Posts posts={postsData}/>
        </View>
      </ScrollView>
      <Input
        onChange={(text) => setText(text)}
        text={text}
        onClick={submit}
      />
      <ModalBase open={open} setOpen={(open) => setOpen(open)} text={text} setText={(text) => setText(text)}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  modal: {
    fontSize: 100
  }
});
