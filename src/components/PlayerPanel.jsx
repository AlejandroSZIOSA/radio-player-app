export default function PlayerPanel({ source }) {
  return (
    <div>
      <audio controls autoPlay>
        {source ? <source src={source} /> : <p>No audio source provided</p>}
      </audio>
    </div>
  );
}
