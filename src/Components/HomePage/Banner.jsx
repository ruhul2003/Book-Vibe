import React from 'react';
import HeroImg from '../../../assets/hero_img.jpg';

const Banner = () => {
    return (
        <div className='mb-10 w-9/12 mx-auto'>
            <div className="hero bg-base-200 min-h-[70vh] my-10 container mx-auto rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={HeroImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-7xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-primary bg-green-600 text-white mt-10 border-2 border-green-600 hover:bg-white hover:text-green-600">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;