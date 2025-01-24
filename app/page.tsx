export default function Home() {
  return (
    <div className="grid grid-cols-2 max-w-xl mx-auto p-6">
      <div>
        <h2 className="font-bold">Dynamic Routes</h2>
        <p>These work as expected.</p>
        <ul className="mt-3">
          <li>
            <a href="/dynamic/1">Dynamic 1</a>
          </li>
          <li>
            <a href="/dynamic/2">Dynamic 2</a>
          </li>
          <li>
            <a href="/dynamic/3">Dynamic 3</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Not Dynamic Routes</h2>
        <p>These do not work as expected. 1-3 should display since they are provided by generateStaticParams</p>
        <ul className="mt-3">
          <li>
            <a href="/not-dynamic/1">Not Dynamic 1</a>
          </li>
          <li>
            <a href="/not-dynamic/2">Not Dynamic 2</a>
          </li>
          <li>
            <a href="/not-dynamic/3">Not Dynamic 3</a>
          </li>
          <li>
            <a href="/not-dynamic/4">Not Dynamic 4 (should not work)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
