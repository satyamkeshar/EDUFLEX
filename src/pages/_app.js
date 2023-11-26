import { store } from '@/Redux/store';
import { Provider } from 'react-redux';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
const router = useRouter();
	return (
		<>
			<Provider store={store} >
				<Toaster
					position="top-center"
					reverseOrder={true}
				/>
				<Component {...pageProps} />
				{/* <Footer /> */}
			</Provider>
		</>
	);
}

export default MyApp;
