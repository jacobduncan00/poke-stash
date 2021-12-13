// @ts-ignore
import pokemon from "pokemontcgsdk";
import { useState, useMemo, useEffect } from "react";

const Sets = () => {
  const [sets, setSetNames] = useState<Array<Object>>([]);

  useEffect(() => {
    pokemon.set.all().then((set: any) => {
      set.forEach((s: any) => {
        setSetNames((oldArr) => [...oldArr, s.name]);
      });
    });
  }, []);

  const SetMapper = useMemo(() => {
    return sets.map((i, key) => (
      <div
        key={key}
        className="bg-primaryOffset text-secondary rounded-lg p-4 w-1/6 m-4"
      >
        {i}
      </div>
    ));
  }, [sets]);

  return <div className="h-full">{SetMapper}</div>;
};

export default Sets;
