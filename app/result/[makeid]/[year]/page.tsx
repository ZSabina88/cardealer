

export async function generateStaticParams(){
    try {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json');
        const res = await response.json();

        console.log(res);

        const cars = res?.Results;

        // if (!Array.isArray(cars)) {
        //     console.error("API response is not an array or Results is undefined:", cars);
        //     return [];
        // }

        return cars.map((car: any) => ({
            makeId: car.Make_ID,
            year: car.Make_Name,
        }));
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
    }

// {Make_ID: 445, Make_Name: 'ROLLS-ROYCE', Model_ID: 1689, Model_Name: 'Phantom'}

const ResultPage =  ({makeId, year}: {makeId: string, year: string}) => {

  return (
    <div>
        <p>{makeId}</p>
        <p>{year}</p>
       

    </div>
  );
}

export default ResultPage;
