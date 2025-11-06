import {Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import {pages} from './../../App';

interface CustomButtonProps {
    link: string;
    label: string;
}

const HomePage = () => {



    return (
        <div className='min-h-screen flex flex-col items-center justify-center pb-20'>
            <h1 className='text-4xl font-bold mb-8'>Welcome to the Home Page</h1>
            <p className='text-lg mb-6'>This is the home page of the application.</p>
            <div className='grid grid-cols-5 gap-4'>
            {pages.map((item, index) => (
             <Fragment key={index}>
              <CustomButton link={item.path} label={item.name} />
             </Fragment>
            ))}
            </div>


        </div>
    )

}
export default HomePage;

const CustomButton = ({link, label}: CustomButtonProps) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(link)}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
            {label}
        </button>
    )
}