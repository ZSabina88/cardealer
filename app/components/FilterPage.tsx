'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select from './Select';
import { Suspense } from 'react';
import { years } from '../utils/years';

type CarData = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};


const FilterPage: React.FC = () => {
    const [carData, setCarData] = useState<CarData[]>();
    const [selectedCar, setSelectedCar] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCars() {
            const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
            const data = await res.json();
            const results = data.Results;
              console.log(results);
            setCarData(results);
        }
        fetchCars()
    }, []);
    return (
        <main className='h-[80vh] flex flex-col justify-between items-center gap-6 mt-6 overflow-hidden'>
            <section className='flex flex-row justify-between items-center gap-6 md:w-[80%] sm:flex sm:flex-row sm:overflow-hidden'>
                <Select title='Car Names' option='Select a car'
                    value={selectedCar}
                    onChange={(e: any) => setSelectedCar(e.target.value)}
                >
                    {carData?.map((car) => (
                        <option key={car.MakeId} value={car.MakeId}>
                            {car.MakeName}
                        </option>
                    ))}
                </Select>
                <Select title='Year' option='Select a year'
                    value={selectedYear}
                    onChange={(e: any) => setSelectedYear(e.target.value)}
                >
                    {years.map((year, index) => (
                        <option key={index} value={year.year}>
                            {year.year}
                        </option>
                    ))}
                </Select>
            </section>
            <button className={`h-[40px] w-[100px] border-2 border-slate-200 rounded-xl ${(!selectedCar || !selectedYear) && 'cursor-not-allowed text-slate-200'}`}
                disabled={!selectedCar || !selectedYear}
            >
                <Suspense fallback={<p>Loading...</p>}>
                <Link href={`result/${selectedCar}/${selectedYear}`}>Next</Link>
                </Suspense>
            </button>
        </main>
    );
}

export default FilterPage;