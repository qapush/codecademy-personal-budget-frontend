import { useSelector } from "react-redux"
import { selectAll } from "../../store/envelopesReducer"


export default function Envelopes() {
    const envelopesData = useSelector(selectAll);

    const envelopes = envelopesData.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.balance}</p>
            </div>
          </li>
        );
      });

  return (
    <ul>{envelopes}</ul>
  )
}
