import { Card } from "../Card/card";

export function Home({ data, setData }) {
  return (
    <div className='d-flex'>
      <ol className='d-flex m-auto justify-content-center flex-wrap list-unstyled'>
        {data.map(function (Car) {
          return (
            <li className='mx-4 my-4'>
              <Card Comp={Car}></Card>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
