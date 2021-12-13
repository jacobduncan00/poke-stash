// @ts-ignore
import pokemon from "pokemontcgsdk";
import sets from "../../data/sets";
import { useState, useMemo } from "react";

const Dashboard = () => {
  const [img, setImg] = useState<Array<string>>([]);
  const [set, setSet] = useState<string>("");

  const updateSet = (e: any) => {
    e.preventDefault();
    setSet(e.target.value);
    console.log(Object.entries(sets));
  };

  const fetchPokemon = () => {
    setImg([]);
    // const s = set.toLowerCase();
    const s = "swsh8";
    pokemon.card.all({ q: `set.id:${s}` }).then((result: Array<{}>) => {
      result.forEach((r: any) => {
        setImg((oldArr) => [...oldArr, r.images.small]);
      });
    });
  };

  const ImgMapper = useMemo(() => {
    return img.map((i, key) => (
      <img src={i} className="m-2" height={250} width={150} key={key} />
    ));
  }, [img]);

  return (
    <div className="h-full">
      <div className="m-auto text-center">
        <h1 className="text-primaryOffset text-3xl">Pokemon Set Searcher</h1>
        <input
          type="text"
          onChange={updateSet}
          value={set}
          className="font-bold py-2 px-4 rounded mr-2 outline-none border-2 border-primaryOffset"
        />
        <button
          className="bg-primaryOffset text-secondary font-bold py-2 px-4 rounded"
          onClick={fetchPokemon}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-5">{ImgMapper}</div>
    </div>
  );
};

export default Dashboard;
