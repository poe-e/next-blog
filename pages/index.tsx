import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css';
import toast from 'react-hot-toast';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div className={styles.container}>
      <button onClick={() => toast.success('Hello toast')}>Toast me</button>
    </div>
  )
}
